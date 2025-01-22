const args1 = ["-n3", "file.js"];
const args2 = ["-n", "3", "file.js"];
const args3 = ["-n", "3", "file.js", "file2.txt"];
const args4 = ["-n", "3", "-c", "3", "file2.txt", "aman.js"];
const args5 = ["-n", "3", "-c3", "file.js", "file2.txt", "aman.js"];

const isTakingSupportingArguments = (validOptions, option) => {
  if (!(option in validOptions)) {
    throw "invalid option";
  }
  return validOptions[option];
};

function extractOption(argContents, i) {
  const option = { type: argContents[i][1], supportingArgument: "" };

  if (isTakingSupportingArguments(this, option.type)) {
    if (argContents[i] === "-" + option.type) {
      option.supportingArgument = argContents.splice(i + 1, 1)[0];

      return option;
    }
    option.supportingArgument = argContents[i].slice(2);
  }
  return option;
}

export const parseArgs = function (args) {
  const argContents = [...args];
  const parsedData = { options: [], files: [] };
  let i = 0;
  while (i < argContents.length) {
    if (argContents[i].startsWith("-")) {
      const option = extractOption.call(this, argContents, i);
      parsedData.options.push(option); //shift
      i++;
    } else {
      parsedData.files = argContents.slice(i);
      break;
    }
  }

  return parsedData;
};

console.log(parseArgs.call({ n: true, c: false }, args1));
console.log(parseArgs.call({ n: true, c: false }, args2));
console.log(parseArgs.call({ n: true, c: false }, args3));
console.log(parseArgs.call({ n: true, c: false }, args4));
console.log(parseArgs.call({ n: true, c: false }, args5));
