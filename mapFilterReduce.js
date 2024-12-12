const isOdd = function (num) {
  return num % 2 !== 0;
};

const getHalf = function (num) {
  return num / 2;
};

const isMoreThan5Chars = function (string) {
  return string.length > 5;
};

const getUpperCase = function (string) {
  return string.toUpperCase();
};

const isLongest = function (string, longestString) {
  return string.length > longestString.length ? string : longestString;
};

const combine = function (string1, string2) {
  return string2 + string1;
};

const product = function (num1, num2) {
  return num1 * num2;
};

const generateValues = function (list, isSatisfyingCondition) {
  // const values = [];
  // for (const element of list) {
  //   values.push(isSatisfyingCondition(element));
  // }
  // return values;
  return list.map(isSatisfyingCondition);
};

const filter = function (list, isSatisfyingCondition) {
  // const values = [];
  // for (const element of list) {
  //   if (isSatisfyingCondition(element))
  //     values.push(element);
  // }
  // return values;
  return list.filter(isSatisfyingCondition);
};

const countOccurences = function (list, isSatisfyingCondition) {
  let count = 0;

  for (const element of list) {
    if (isSatisfyingCondition(element)) {
      count++;
    }
  }

  return count;
};

const myReduce = function (list, reducer, initialValue) {

  // let result = list[0];
  // for (const element of list) {
  //   result = reducer(element, result);
  // }
  // return result;

  let result = initialValue;
  return list.reduce(reducer, result);
};

const numbers = [1, 4, 9, 16, 25, 36];
const strings = ['abc', 'abcd', 'shrutika', 'step', 'function'];

function testAll() {
  console.log(generateValues(numbers, Math.sqrt,));
  console.log(generateValues(numbers, getHalf));
  console.log(generateValues(strings, getUpperCase));
  console.log(filter(numbers, isOdd));
  console.log(filter(strings, isMoreThan5Chars));
  console.log(myReduce(strings, isLongest, ''));
  console.log(myReduce(strings, combine, ''));
  console.log(myReduce(numbers, product, 1));
  console.log(countOccurences(numbers, isOdd));
}

testAll();



// function getChoice() {
//   const choice = +prompt('0 . SquareRoot \n 1. Odd\n 2. Half\n 3. Strings ');
//   const input = [1, 4, 9, 16, 25];
//   const output = functions[choice % 2](parameterFunctions[choice], input);
//   console.log(output);
// }

// getChoice();

// function testSqrt() {
//   console.log(getSquareRoots(Math.sqrt, [1, 4, 9, 16]));
//   console.log(getSquareRoots(Math.sqrt, [1, 9, 25, 64]));
//   console.log(getSquareRoots(Math.sqrt, [100, 401, 25, 64]));
//   console.log(getSquareRoots(Math.sqrt, [1, 10, 25, 64]));
// }

// function testOdd() {
//   console.log(getOdds(isOdd, [1, 2, 3, 4]));
//   console.log(getOdds(isOdd, [2, 4, 6, 8]));
//   console.log(getOdds(isOdd, [2, 4, 6, 5]));
// }

// function testHalf() {
//   console.log(getHalfValues(getHalf, [1, 2, 3, 4]));
//   console.log(getHalfValues(getHalf, [2, 4, 6, 8]));
//   console.log(getHalfValues(getHalf, [2, 4, 6, 5]));
// }

// testHalf();
