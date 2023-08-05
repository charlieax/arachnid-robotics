export interface gameProps {
  startPosition: number[]
  sequence: string
}

export function game({ startPosition, sequence }: gameProps) {
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
