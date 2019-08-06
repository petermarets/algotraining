// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let nString = n.toString().split('');

  if (nString[0] === '-') {

    nString.unshift();

    nString.reverse().unshift('-');

    return parseInt(nString.join(''));
  }
  let revString = nString.reverse().join('');
  let retInt = parseInt(revString);

  return retInt;
}
reverseInt(15);
module.exports = reverseInt;