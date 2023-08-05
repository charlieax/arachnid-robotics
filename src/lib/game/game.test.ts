import { gameV1 } from '../../lib/gameV1'
import { gameV2 } from '../../lib/gameV2'
import { game } from './game'

vi.mock('../../lib/gameV1', () => ({
  gameV1: vi.fn(),
}))
vi.mock('../../lib/gameV2', () => ({
  gameV2: vi.fn(),
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
})
