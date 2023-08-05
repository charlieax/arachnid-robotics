import exp from 'constants'
import { gameV3 } from './gameV3'

const log = vi.spyOn(console, 'log').mockImplementation(() => null)

describe('Mk 2 Tests', () => {
  it('should result in [0,0] rotated right under sequence R', () => {
    expect(
      gameV3({
        startPosition: [0, 0],
        sequence: 'R',
      }),
    ).toEqual({ currentPosition: [0, 0], rotation: [1, 0], fuel: 30 })
  })
  it('should result in [0,0] rotated left under sequence L', () => {
    expect(
      gameV3({
        startPosition: [0, 0],
        sequence: 'L',
      }),
    ).toEqual({ currentPosition: [0, 0], rotation: [-1, 0], fuel: 30 })
  })
  it('should result in [0,1] facing forwards under sequence F', () => {
    expect(
      gameV3({
        startPosition: [0, 0],
        sequence: 'F',
      }),
    ).toEqual({ currentPosition: [0, 1], rotation: [0, 1], fuel: 30 })
  })
  it('should result in [0,-1] facing backwards under sequence B', () => {
    expect(
      gameV3({
        startPosition: [0, 0],
        sequence: 'B',
      }),
    ).toEqual({ currentPosition: [0, -1], rotation: [0, -1], fuel: 30 })
  })
  it('should result in [1,0] facing right under sequence RF', () => {
    expect(
      gameV3({
        startPosition: [0, 0],
        sequence: 'RF',
      }),
    ).toEqual({ currentPosition: [1, 0], rotation: [1, 0], fuel: 30 })
  })
  it('should result in [-1,0] facing left under sequence LF', () => {
    expect(
      gameV3({
        startPosition: [0, 0],
        sequence: 'LF',
      }),
    ).toEqual({ currentPosition: [-1, 0], rotation: [-1, 0], fuel: 30 })
  })
  it('should result in [0,2] facing forwards with fuel 28 under sequence 2F', () => {
    expect(
      gameV3({
        startPosition: [0, 0],
        sequence: '2F',
      }),
    ).toEqual({ currentPosition: [0, 2], rotation: [0, 1], fuel: 28 })
  })
  it('should raise a log about overheating and result in [0,0] and facing forwards with fuel 30 under sequence 6F', () => {
    expect(
      gameV3({
        startPosition: [0, 0],
        sequence: '6F',
      }),
    ).toEqual({ currentPosition: [0, 0], rotation: [0, 1], fuel: 30 })
    expect(log).toHaveBeenCalledWith('too much boost, overheating and stopping')
    it('should raise a log about running out of fuel and result in [0,30] and facing forwards with fuel 30 under sequence 5F5F5F5F5F5F3F', () => {
      expect(
        gameV3({
          startPosition: [0, 0],
          sequence: '5F5F5F5F5F5F3F',
        }),
      ).toEqual({ currentPosition: [0, 30], rotation: [0, 1], fuel: 0 })
      expect(log).toHaveBeenCalledWith('not enough fuel, stopping')
    })
  })
})
