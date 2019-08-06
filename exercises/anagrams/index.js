// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  if (!stringA || stringA.length === 0)
    return;

  if (!stringB || stringB.length === 0)
    return;

  stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

  const charArrayA = stringA.split('').sort();
  const charArrayB = stringB.split('').sort();


  return charArrayA.join('') === charArrayB.join('');

}









//
//   if (!stringA || !stringB)
//     return false;
//
//   stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
//
//   if (stringA.length != stringB.length)
//     return false;
//
//   const charArrayA = stringA.split('');
//   const charArrayB = stringB.split('');
//
//   const mapA = convertArrayToMap(charArrayA);
//   const mapB = convertArrayToMap(charArrayB);
//
//   for (let element in mapA) {
//     if (mapA[element] != mapB[element])
//       return false;
//   }
//
//   return true;
// }
//
// function convertArrayToMap(arr) {
//   const mapChar = {};
//
//   arr.forEach((element, index, arr) => {
//     if (!mapChar[element])
//       mapChar[element] = 1;
//     else
//       mapChar[element]++;
//   });
//
//   return mapChar;
// }

module.exports = anagrams;