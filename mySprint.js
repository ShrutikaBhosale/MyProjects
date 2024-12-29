const add = (sprint, index) => {
  const num1 = sprint[index + 1] - 1;
  const num2 = sprint[index + 2] - 1;
  sprint[sprint[index + 3] - 1] = sprint[num1] + sprint[num2];
};

const sub = (sprint, index) => {
  const num1 = sprint[index + 1] - 1;
  const num2 = sprint[index + 2] - 1;
  sprint[sprint[index + 3] - 1] = sprint[num1] - sprint[num2];
};

const findCommand = (sprint, index) => {
  switch (sprint[index]) {
    case 3:
      index = sprint[index + 1] - 1;
      break;
    case 1:
      add(sprint, index);
      index += 4;
      break;
    case 2:
      sub(sprint, index);
      index += 4;
      break;
  }
  return index;
};

const main = (sprintProgram) => {
  const sprint = sprintProgram;
  let index = 0;

  while (sprintProgram[index] !== 9) {
    index = findCommand(sprint, index);
  }

  return sprint;
};

// main([3, 6, 10, 20, 0, 9]);
console.log(main([3, 6, 10, 20, 0, 1, 3, 4, 5, 9]));
// main([3, 6, 10, 20, 0, 1, 3, 4, 5, 9]);
