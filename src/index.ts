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

let testCasesMk3 = [
  {
    startPosition: [0, 0],
    sequence: 'FFFFFF3FLFFFFFFR5FL',
  },
  {
    startPosition: [4, 3],
    sequence: 'FFFFFFFF5FRFFFFFF3FRFFFFFFLFFFFF5FFF5FFFFFFFLFFFFF',
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

console.log('testCases - Mk3')

testCasesMk3.forEach((testCase) => {
  console.log(game({ ...testCase, version: 3 }))
})
