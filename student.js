import inquirer from "inquirer";
import chalk from "chalk";
let studentdata = [];
export async function addnewstudent() {
    let condition = true;
    while (condition) {
        let addnewstudent = await inquirer.prompt([
            {
                name: "newstudent",
                message: "Please type student complete name?",
                type: "input",
                validate: (input) => {
                    if (!input.trim()) {
                        return "Please enter name to continue...";
                    }
                    return true;
                },
            },
            {
                name: "fathername",
                message: "Please type student's father name?",
                type: "input",
                validate: (input) => {
                    if (!input.trim()) {
                        return "Please enter name to continue...";
                    }
                    return true;
                },
            },
            {
                name: "age",
                message: "Please type student age?",
                type: "input",
                validate: (input) => {
                    if (!input.trim()) {
                        return "Please enter age...";
                    }
                    const age = parseInt(input);
                    if (isNaN(age)) {
                        return "Please enter a valid number for age..";
                    }
                    if (age > 99) {
                        return "Age should not be greater than 99";
                    }
                    return true;
                },
            },
            {
                name: "gender",
                message: "Please select gender?",
                type: "list",
                choices: ["Male", "Female"],
            },
            {
                name: "contact",
                message: "Please enter contact details? (XXXX-XXXXXXX)",
                type: "input",
                validate: (input) => {
                    if (!input.trim()) {
                        return "Please enter contact details...";
                    }
                    const contact = parseInt(input);
                    if (isNaN(contact)) {
                        return "Please enter a valid contact number..";
                    }
                    return true;
                },
            },
            {
                name: "cnic",
                message: "Please enter CNIC? (XXXXX-XXXXXXX-X)",
                type: "input",
                validate: (input) => {
                    if (!input.trim()) {
                        return "Please enter CNIC...";
                    }
                    const cnic = parseInt(input);
                    if (isNaN(cnic)) {
                        return "Please enter a valid CNIC number..";
                    }
                    return true;
                },
            },
            {
                name: "askquestion",
                type: "confirm",
                message: chalk.blueBright.bold("Would you like to add more students"),
                default: "true",
            },
        ]);
        condition = addnewstudent.askquestion;
        studentdata.push(addnewstudent);
        console.log("Student Data:");
        console.table(studentdata);
    }
}
