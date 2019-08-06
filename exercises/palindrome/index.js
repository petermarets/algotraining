// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   let indexA = 0;
//   let indexB = str.length - 1;
//
//   while (indexA + 1 <= indexB) {
//     if (str[indexA] !== str[indexB])
//       return false;
//
//     indexA++;
//     indexB--;
//   }
//
//   return true;
// }


function palindrome(str) {

  if (!str || str.length === 0)
    return;

  let charArray = str.split('');

  let startIndex = 0;
  let endIndex = str.length - 1;

  while (startIndex <= endIndex) {
    if (charArray[startIndex++] !== charArray[endIndex--])
      return false;
  }

  return true;

  // return str.split('').every((element, index, arr) => {
  //   return element === arr[arr.length - 1 - index]
  // })
}
module.exports = palindrome;