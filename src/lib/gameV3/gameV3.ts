import { type gameProps } from '../game'

export function gameV3({ startPosition, sequence }: gameProps) {
  let current: robot = {
    currentPosition: startPosition,
    rotation: [0, 1],
    fuel: 30,
  }

  let boost: number | null = null

  sequence.split('').forEach((val, index) => {
    // if the val is a number then set boost to that number and continue
    if (parseInt(val)) {
      boost = parseInt(val)
    } else {
      // change rotation if L or R
      if (val === 'R') {
        current = turnRight(current)
      }
      if (val === 'L') {
        current = turnLeft(current)
      }
      // change position if F or B
      // if the previous val was a number and we're going forwards then boost is set so boost
      if (val === 'F') {
        if (boost) {
          if (current.fuel < boost) {
            console.log('not enough fuel, stopping')
            return current
          }
          if (boost > 5) {
            console.log('too much boost, overheating and stopping')
            return current
          }
          console.log(`boosting ${boost} spaces`)
          current = boostForward(current, boost)
        } else {
          current = moveForward(current)
        }
      }
      if (val === 'B') {
        current = moveForward(turnRight(turnRight(current)))
      }
      current
      boost = null // reset boost
    }
  })

  return current
}

type robot = {
  currentPosition: number[]
  rotation: number[]
  fuel: number
}

function turnLeft({ rotation, ...currentRobot }: robot) {
  return {
    ...currentRobot,
    rotation: [-rotation[1] === 0 ? 0 : -rotation[1], rotation[0]], //deals with -0 for cleanliness
  }
}
function turnRight({ rotation, ...currentRobot }: robot) {
  return {
    ...currentRobot,
    rotation: [rotation[1], -rotation[0] === 0 ? 0 : -rotation[0]], //deals with -0 for cleanliness
  }
}
function moveForward({ currentPosition, rotation, fuel }: robot) {
  return {
    currentPosition: [
      currentPosition[0] + rotation[0],
      currentPosition[1] + rotation[1],
    ],
    rotation,
    fuel,
  }
}
function boostForward({ currentPosition, rotation, fuel }: robot, boost = 1) {
  return {
    currentPosition: [
      currentPosition[0] + boost * rotation[0],
      currentPosition[1] + boost * rotation[1],
    ],
    rotation,
    fuel: fuel - boost,
  }
}
