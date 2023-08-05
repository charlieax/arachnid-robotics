import { gameV1 } from '../gameV1'
import { gameV2 } from '../gameV2'
import { gameV3 } from '../gameV3'

export interface gameProps {
  startPosition: number[]
  sequence: string
  version?: number
}

export function game({ startPosition, sequence, version = 1 }: gameProps) {
  if (version === 1) return gameV1({ startPosition, sequence })
  if (version === 2) return gameV2({ startPosition, sequence })
  if (version === 3) return gameV3({ startPosition, sequence })
}
