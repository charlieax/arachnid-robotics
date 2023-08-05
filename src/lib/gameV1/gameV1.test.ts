import { gameV1 } from './gameV1'

describe('Mk 1 Tests', () => {
  it('should result in [1,0] under sequence R', () => {
    expect(
      gameV1({
        startPosition: [0, 0],
        sequence: 'R',
      }),
    ).toEqual([1, 0])
  })
  it('should result in [-1,0] under sequence L', () => {
    expect(
      gameV1({
        startPosition: [0, 0],
        sequence: 'L',
      }),
    ).toEqual([-1, 0])
  })
  it('should result in [0,1] under sequence F', () => {
    expect(
      gameV1({
        startPosition: [0, 0],
        sequence: 'F',
      }),
    ).toEqual([0, 1])
  })
  it('should result in [0,-1] under sequence B', () => {
    expect(
      gameV1({
        startPosition: [0, 0],
        sequence: 'B',
      }),
    ).toEqual([0, -1])
  })
})
