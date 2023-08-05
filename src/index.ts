import { game } from './lib/game'

let testCases = [
  {
    startPosition: [0, 0],
    sequence: 'FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF',
  },
  {
    startPosition: [3, 6],
    sequence: 'FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF',
  },
  {
    startPosition: [0, 7],
    sequence: 'RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR',
  },
]

console.log('testCases - Mk1')
testCases.forEach((testCase) => {
  console.log(game(testCase))
})

console.log('testCases - Mk2')
testCases.forEach((testCase) => {
  console.log(game({ ...testCase, version: 2 }))
})
