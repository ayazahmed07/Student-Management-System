import inquirer from "inquirer";
import chalk from "chalk";

let new_students = [];

let add_students = await inquirer.prompt([
  {
    name: "addstudent",
    message: "What is the name of student?",
    type: "input",
  },

  {
    name: "course",
    message: "Please select the course for enrolment",
    type: "list",
    choices: [
      "English Language",
      "Computer Programming",
      "Artificail Intelligence",
      "Machine Learning",
      "Data Science",
    ],
  },
]);

new_students.push(add_students.addstudent);

new_students.forEach((new_students) =>
  console.log(`${new_students} is enrolled in ${add_students.course} course.`)
);
