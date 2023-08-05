import { game } from '@lib/game'

let testCase1 = game({
  startPosition: [0, 0],
  sequence: 'FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF',
})
console.log(testCase1)

let testCase2 = game({
  startPosition: [3, 6],
  sequence: 'FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF',
})
console.log(testCase2)

let testCase3 = game({
  startPosition: [0, 7],
  sequence: 'RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR',
})
console.log(testCase3)
