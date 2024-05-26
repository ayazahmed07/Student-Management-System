import inquirer from "inquirer";
import chalk from "chalk";
import { addnewstudent } from "./student.js";

async function textanimation(text: string) {
  for (let char of text) {
    process.stdout.write(char);

    await new Promise((resolve) => setTimeout(resolve, 15));
  }
}

async function exitanimation(text: string) {
  for (let char of text) {
    process.stdout.write(char);

    await new Promise((resolve) => setTimeout(resolve, 10));
  }
}

await textanimation(
  chalk.bold.red.bgBlue("\t\t\t Welcome in Student Managemet System\n")
);

let selectoption = await inquirer.prompt([
  {
    name: "smsform",
    message: "Please select any one option",
    type: "list",
    choices: [
      "Add New Student",
      "View Students",
      "Delete Student",
      "View Courses and Fee",
      "Pay Fee",
      "View Balance",
      "Enroll Student",
    ],
  },
]);

if (selectoption.smsform === "Add New Student") {
  await addnewstudent();
}

