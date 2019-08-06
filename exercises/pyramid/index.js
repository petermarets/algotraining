// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < 2 * n - 1; j++) {
      if ((j < n - 1 - i) || (j > n - 1 + i)) {
        row += ' ';
      } else {
        row += '#';
      }
    }
    console.log(row);
  }
}
//
// function pyramid(n) {
//
//   let midpoint = Math.round((2 * n - 1) / 2);
//   for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= 2 * n - 1; j++) {
//
//       if ((j <= midpoint - i) || (j >= midpoint + i)) {
//         row += ' ';
//       } else {
//         row += '#';
//       }
//     }
//     console.log(row);
//   }
// }

//
// function pyramid(n) {
//
//   for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= 2 * n - 1; j++) {
//       if (Math.abs(j - n) < i) {
//         row += '#';
//       } else {
//         row += ' ';
//       }
//     }
//     console.log(row);
//   }
// }

module.exports = pyramid;