/* 
Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

Example 1
a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
Example 2
a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']

returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
Each element in the arrays will start with a unique letter so there will only be a single match for each element.
*/

// MY SOLUTION
const sortArray = (a1, a2) => {
  a1 = a1.map(word => word[0])
  const result = []

  for (let i = 0; i < a2.length; i++) {
    const idx = a1.indexOf(a2[i][0])
    result[idx] = a2[i]
  }

  return result
}

// SOLUTION OF OTHERS
const sortArray = (a1, a2) => a1.map(v => a2.find(w => v[0] === w[0]))
