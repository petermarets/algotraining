// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const words = str.split(' ');
  const capitalized = [];

  words.forEach((word, index, words) => {
    const charArray = word.split('');
    charArray[0] = charArray[0].toUpperCase();
    capitalized.push(charArray.join(''));
  });

  return capitalized.join(' ');









  // if (!str || str.length === 0)
  //   return;
  //
  // const charArray = str.split('');
  // const capitalizedCharArray = [charArray[0].toUpperCase()];
  //
  // for (let i = 1; i < charArray.length; i++) {
  //   if (charArray[i - 1] === ' ') {
  //     capitalizedCharArray.push(charArray[i].toUpperCase());
  //   } else {
  //     capitalizedCharArray.push(charArray[i]);
  //   }
  // }
  //
  // return capitalizedCharArray.join('');

  //
  // const words = str.split(' ');
  // const retWords = [];
  //
  // words.forEach((element, index, words) => {
  //   retWords.push(element[0].toUpperCase() + element.slice(1));
  // })
  //
  // return retWords.join(' ');

  // const charArray = str.split('');
  // const retCharArray = [];
  //
  // retCharArray.push(charArray[0].toUpperCase());
  //
  // for (let i = 1; i < charArray.length; i++) {
  //   let element = charArray[i];
  //
  //   retCharArray.push(element);
  //
  //   // we check if character is space. if yes - that means that the next character should capitalized. Also we make sure that space is not at the end of the string.
  //   if (element === ' ' && ++i < charArray.length) {
  //     retCharArray.push(charArray[i].toUpperCase());
  //   }
  //
  // }
  //
  // return retCharArray.join('');
}

module.exports = capitalize;