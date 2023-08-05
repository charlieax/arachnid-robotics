// Test Cases
// - test case 1
//   - input: { startPosition: [0, 0], sequence: 'FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF' }
// - test case 2
//   - input: { startPosition: [3, 6], sequence: 'FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF' }
// - test case 2
//   - input: { startPosition: [0, 7], sequence: 'RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR' }

import { game } from './game'

// Mk 1 Tests

describe('Mk 1 Tests', () => {
  it('should result in [1,0] under sequence R', () => {
    expect(
      game({
        startPosition: [0, 0],
        sequence: 'R',
      }),
    ).toEqual([1, 0])
  })
  it('should result in [-1,0] under sequence L', () => {
    expect(
      game({
        startPosition: [0, 0],
        sequence: 'L',
      }),
    ).toEqual([-1, 0])
  })
  it('should result in [0,1] under sequence F', () => {
    expect(
      game({
        startPosition: [0, 0],
        sequence: 'F',
      }),
    ).toEqual([0, 1])
  })
  it('should result in [0,-1] under sequence B', () => {
    expect(
      game({
        startPosition: [0, 0],
        sequence: 'B',
      }),
    ).toEqual([0, -1])
  })
})

// Mk 2 Tests

describe('Mk 2 Tests', () => {
  it('should result in [0,0] rotated right under sequence R', () => {
    expect(
      game({
        startPosition: [0, 0],
        sequence: 'R',
        version: 2,
      }),
    ).toEqual({ currentPosition: [0, 0], rotation: [1, 0] })
  })
  it('should result in [0,0] rotated left under sequence L', () => {
    expect(
      game({
        startPosition: [0, 0],
        sequence: 'L',
        version: 2,
      }),
    ).toEqual({ currentPosition: [0, 0], rotation: [-1, 0] })
  })
  it('should result in [0,1] facing forwards under sequence F', () => {
    expect(
      game({
        startPosition: [0, 0],
        sequence: 'F',
        version: 2,
      }),
    ).toEqual({ currentPosition: [0, 1], rotation: [0, 1] })
  })
  it('should result in [0,0] facing forwards under sequence B to stop itself falling over the edge it has ignored entire command', () => {
    expect(
      game({
        startPosition: [0, 0],
        sequence: 'B',
        version: 2,
      }),
    ).toEqual({ currentPosition: [0, 0], rotation: [0, 1] })
  })
  it('should result in [1,0] facing right under sequence RF', () => {
    expect(
      game({
        startPosition: [0, 0],
        sequence: 'RF',
        version: 2,
      }),
    ).toEqual({ currentPosition: [1, 0], rotation: [1, 0] })
  })
  it('should result in [0,0] facing left under sequence LF', () => {
    expect(
      game({
        startPosition: [0, 0],
        sequence: 'LF',
        version: 2,
      }),
    ).toEqual({ currentPosition: [0, 0], rotation: [-1, 0] })
  })
})
