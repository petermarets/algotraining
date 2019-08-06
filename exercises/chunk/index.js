// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let subArrays = [];
  let index = 0;
  while (index < array.length) {
    let chunk = array.slice(index, index + size);
    subArrays.push(chunk);
    index += size;
  }

  // if (!array || array.length === 0)
  //   return;
  //
  // let index = 0;
  // const subArrays = [];
  //
  // while (index < array.length) {
  //   subArrays.push(array.slice(index, index += size));
  // }

  // const subArrays = [];
  // let index = 0;
  //
  // while (index < array.length) {
  //   subArrays.push(array.slice(index, index += size));

  //
  // array.forEach((current, index, array) => {
  //
  //   let last = subArrays[subArrays.length - 1];
  //
  //   // if returning subArrays is empty or last array element of returning subArrays is not full with the specified size
  //   if (subArrays.length === 0 || last.length === size) {
  //     subArrays.push([current]);
  //   } else {
  //     last.push(current);
  //   }
  // })

  // for (let i = 0; i < array.length; i++) {
  //
  //   if (subArrays.length === 0 || subArrays[subArrays.length - 1].length === size) {
  //     subArrays.push([array[i]]);
  //   } else {
  //     subArrays[subArrays.length - 1].push(array[i]);
  //   }
  // }
  return subArrays;
}


module.exports = chunk;