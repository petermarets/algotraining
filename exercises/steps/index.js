// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, step = 1, row = '') {
  if (n < step) {
    return;
  }

  if (row.length === n) {
    console.log(row);
    return steps(n, step++)
  }

  if (row.length < step) {
    row += '#';
  } else {
    row += ' ';
  }
  steps(n, step, row);
}

module.exports = steps;

//
// function steps(n) {
//
//   for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= n; j++) {
//       if (j <= i) {
//         row += '#';
//       } else {
//         row += ' ';
//       }
//     }
//     console.log(row);
//   }
// }