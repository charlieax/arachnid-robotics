import { gameV2 } from './gameV2'

describe('Mk 2 Tests', () => {
  it('should result in [0,0] rotated right under sequence R', () => {
    expect(
      gameV2({
        startPosition: [0, 0],
        sequence: 'R',
      }),
    ).toEqual({ currentPosition: [0, 0], rotation: [1, 0] })
  })
  it('should result in [0,0] rotated left under sequence L', () => {
    expect(
      gameV2({
        startPosition: [0, 0],
        sequence: 'L',
      }),
    ).toEqual({ currentPosition: [0, 0], rotation: [-1, 0] })
  })
  it('should result in [0,1] facing forwards under sequence F', () => {
    expect(
      gameV2({
        startPosition: [0, 0],
        sequence: 'F',
      }),
    ).toEqual({ currentPosition: [0, 1], rotation: [0, 1] })
  })
  it('should result in [0,0] facing forwards under sequence B to stop itself falling over the edge it has ignored entire command', () => {
    expect(
      gameV2({
        startPosition: [0, 0],
        sequence: 'B',
      }),
    ).toEqual({ currentPosition: [0, 0], rotation: [0, 1] })
  })
  it('should result in [1,0] facing right under sequence RF', () => {
    expect(
      gameV2({
        startPosition: [0, 0],
        sequence: 'RF',
      }),
    ).toEqual({ currentPosition: [1, 0], rotation: [1, 0] })
  })
  it('should result in [0,0] facing left under sequence LF', () => {
    expect(
      gameV2({
        startPosition: [0, 0],
        sequence: 'LF',
      }),
    ).toEqual({ currentPosition: [0, 0], rotation: [-1, 0] })
  })
})
