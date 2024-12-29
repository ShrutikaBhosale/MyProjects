const data = () => {  //import this from different data file
  const letters = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  return letters;
};

function concat(array1, array2) {
  return array2.reduce((accumulator, element) => { accumulator.push(element); return accumulator; }, array1);
};

const generatePowerSet = (set, powerSet) => {
  const newSet = [];
  for (const element of set) {
    for (let subIndex = 0; subIndex < powerSet.length; subIndex++) {
      newSet.push(concat([powerSet[subIndex]], [[element]]).flat());
    }
  }
  return newSet;
};

const generateRequiredData = (digits, powerSet) => {
  if (!Array.isArray(powerSet)) {
    return [];
  }
  return powerSet.filter((element) => element.length === digits.length).map((array) => array.join(''));
};

const letterCombinations = (number) => {
  const letters = data();
  const digits = [...number + ''];
  let powerSet = letters[digits[0]];

  if (digits.length === 1) {
    return powerSet;
  }

  for (let index = 1; index < digits.length; index++) {
    powerSet = generatePowerSet(letters[digits[index]], powerSet);
  }

  return generateRequiredData(digits, powerSet);
};

console.log(letterCombinations(22));
