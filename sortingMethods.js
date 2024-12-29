//bubble sort
// const sort = (array) => {
//   for (let currentElement = 0; currentElement < array.length; currentElement++) {
//     for (let nextElement = currentElement + 1; nextElement < array.length; nextElement++) {
//       if (array[currentElement] > array[nextElement]) {
//         const temp = array[currentElement];
//         array[currentElement] = array[nextElement];
//         array[nextElement] = temp;
//       }
//     }
//   }
//   return array;
// };


const sort = (array) => {
  for (let currentElement = 0; currentElement < array.length; currentElement++) {
    for (let prevElement = 0; prevElement < currentElement; prevElement++) {
      if (array[prevElement] > array[currentElement]) {
        const temp = array[currentElement];
        array[currentElement] = array[prevElement];
        array[prevElement] = temp;
      }
    }
  }
  return array;
};
