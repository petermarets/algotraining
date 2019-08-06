// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

  if (!str || str.length === 0)
    return;

  str = str.split('');
  const charMap = {};
  str.forEach((current, index, charArray) => {
    if (!charMap[current]) {
      charMap[current] = 1;
    } else {
      ++charMap[current];
    }
  })

  let maxCharQuantity = 0;
  let maxRetChar;

  for (let element in charMap) {
    if (charMap[element] > maxCharQuantity) {
      maxCharQuantity = charMap[element];
      maxRetChar = element;
    }
  }

  return maxRetChar;

  // const strArray = str.split('');
  // const strMap = {};
  // for (let elem of strArray) {
  //   if (strMap[elem]) {
  //     strMap[elem] += 1;
  //   } else {
  //     strMap[elem] = 1;
  //   }
  // }
  //
  // let max = 0;
  // let maxChar = '';
  //
  // for (let elem in strMap) {
  //   if (strMap[elem] > max) {
  //     max = strMap[elem];
  //     maxChar = elem;
  //   }
  // }
  //
  // return maxChar;
}

module.exports = maxChar;