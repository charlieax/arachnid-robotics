export interface gameProps {
  startPosition: number[]
  sequence: string
  version?: number
}

export function game({ startPosition, sequence, version = 1 }: gameProps) {
  if (version === 1) return gameV1({ startPosition, sequence })
  if (version === 2) return gameV2({ startPosition, sequence })
}

function gameV1({ startPosition, sequence }: gameProps) {
  let sequenceHash = {
    horizontal: 0,
    vertical: 0,
  }

  sequence.split('').forEach((val) => {
    if (val === 'F') sequenceHash.vertical++
    if (val === 'B') sequenceHash.vertical--
    if (val === 'L') sequenceHash.horizontal--
    if (val === 'R') sequenceHash.horizontal++
  })

  return [
    startPosition[0] + sequenceHash.horizontal,
    startPosition[1] + sequenceHash.vertical,
  ]
}

function gameV2({ startPosition, sequence }: gameProps) {
  let current: position = {
    currentPosition: startPosition,
    rotation: [0, 1],
  }

  sequence.split('').forEach((val, index) => {
    let next: position = { ...current }
    // change rotation if L or R
    if (val === 'R') {
      next = turnRight(current)
    }
    if (val === 'L') {
      next = turnLeft(current)
    }
    // change position if F or B
    if (val === 'F') {
      next = moveForward(current)
    }
    if (val === 'B') {
      next = moveForward(turnRight(turnRight(current)))
    }
    if (next.currentPosition[0] >= 0 && next.currentPosition[1] >= 0) {
      current = { ...next }
    }
    console.log('step:', index)
    console.log('position:', current)
  })

  return current
}

type position = {
  currentPosition: number[]
  rotation: number[]
}

function turnLeft({ currentPosition, rotation }: position) {
  return {
    currentPosition,
    rotation: [-rotation[1] === 0 ? 0 : -rotation[1], rotation[0]],
  }
}
function turnRight({ currentPosition, rotation }: position) {
  return {
    currentPosition,
    rotation: [rotation[1], -rotation[0] === 0 ? 0 : -rotation[0]],
  }
}
function moveForward({ currentPosition, rotation }: position) {
  return {
    currentPosition: [
      currentPosition[0] + rotation[0],
      currentPosition[1] + rotation[1],
    ],
    rotation,
  }
}
