let score = 0;
let userSum = 0;
let compSum = 0;

if (confirm("😁 Batting or Bolling?")) {
  console.log("😜 ohh Let's Start 😜");
  let user1Number = 0;
  let compNumber = 1;

  while (+user1Number !== compNumber) {
    compNumber = Math.round(Math.random() * 10);
    user1Number = prompt("😊 Enter any random number");

    userSum += +user1Number;
    compSum += compNumber;

    console.log(userSum, compSum)
    if (userSum > compSum) {
      console.log("\nYour score : ", userSum);
      console.log("\n😎 You won batting");
      score = 1;
      break;
    }
  }
  if (score === 0) {
    console.log("\n 😎 Computer won");

  }
} else {
  let user1Number = 0;
  let compNumber = 1;

  while (+user1Number !== compNumber) {
    compNumber = Math.round(Math.random() * 10);
    user1Number = prompt("😊 Enter any random number");

    userSum += +user1Number;
    compSum += compNumber;
    if (compSum > userSum) {
      console.log("\n Computer score : ", userSum);
      console.log("\n 😎 Computer won batting");
      score = 1;
      break;
    }
  }
  if (score === 0) {
    console.log("\n 😎 You won");
  }
}

