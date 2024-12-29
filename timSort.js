const divideIntoRuns = (array) => {
  return array.reduce((accumulator, element) => {
    accumulator.at(-1).at(-1) > element ? accumulator.push([element]) : accumulator.at(-1).push(element);
    return accumulator;
  }, [[]]);
};

const mergeArr = (array1, array2) => {
  let firstIndex = 0;
  let secondIndex = 0;
  const result = [];

  while (firstIndex < array1.length && secondIndex < array2.length) {
    if (array1[firstIndex] < array2[secondIndex]) {
      result.push(array1[firstIndex]);
      firstIndex++;
    }
    else {
      result.push(array2[secondIndex]);
      secondIndex++;
    }
  }

  result.push(...array1.slice(firstIndex));
  result.push(...array2.slice(secondIndex));
  return result;
};

const main = (array) => {
  const runs = divideIntoRuns(array);
  return runs.reduce(mergeArr, []);
};

console.log(main([2, 4, 55, 2, 45, 7, 87, 34, 90, 12]));
