import { gameV1 } from '../gameV1'
import { gameV2 } from '../gameV2'
import { gameV3 } from '../gameV3'
import { game } from './game'

vi.mock('../gameV1', () => ({
  gameV1: vi.fn(),
}))
vi.mock('../gameV2', () => ({
  gameV2: vi.fn(),
}))
vi.mock('../gameV3', () => ({
  gameV3: vi.fn(),
}))

describe('game', () => {
  it('should run gameV1 when by default', () => {
    game({ startPosition: [0, 0], sequence: 'R' })
    expect(gameV1).toHaveBeenCalled()
  })
  it('should run gameV2 when version 2 is called', () => {
    game({ startPosition: [0, 0], sequence: 'R', version: 2 })
    expect(gameV2).toHaveBeenCalled()
  })
  it('should run gameV3 when version 3 is called', () => {
    game({ startPosition: [0, 0], sequence: 'R', version: 3 })
    expect(gameV3).toHaveBeenCalled()
  })
})
