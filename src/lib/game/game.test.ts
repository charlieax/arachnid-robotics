// Test Cases
// - test case 1
//   - input: { startPosition: [0, 0], sequence: 'FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF' }
//   - output: [2, 0]
// - test case 2
//   - input: { startPosition: [3, 6], sequence: 'FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF' }
//   - output: [3, 6]
// - test case 2
//   - input: { startPosition: [0, 7], sequence: 'RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR' }
//   - output: [3, 6]

import { game } from './game'

describe('Simple', () => {
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

describe('gameTestCases', () => {
  it('should result in [] under test case 1', () => {
    expect(
      game({
        startPosition: [0, 0],
        sequence: 'FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF',
      }),
    ).toEqual([-1, 21])
  })
  it('should result in [] under test case 2', () => {
    expect(
      game({
        startPosition: [3, 6],
        sequence: 'FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF',
      }),
    ).toEqual([4, 19])
  })
  it('should result in [] under test case 3', () => {
    expect(
      game({
        startPosition: [0, 7],
        sequence: 'RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR',
      }),
    ).toEqual([3, 15])
  })
})
