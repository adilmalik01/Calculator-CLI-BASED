import inquirer from "inquirer";

const prompt = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter your First Number ?"
    },
    {
        name: "operator",
        message: "Select Operator by given operators",
        type: "list",
        choices: ["-", "+", "*", "/"]
    },
    {
        name: "num2",
        type: "number",
        message: "Enter your First Number ?"
    }
])


if (prompt.operator === "+") {
    console.log(`\n Your Answer Is This:${prompt.num1 + prompt.num2}`);

} else if (prompt.operator === "*") {
    console.log(`\n Your Answer Is This:${prompt.num1 * prompt.num2}`);

} else if (prompt.operator === "/") {
    console.log(`\n Your Answer Is This:${prompt.num1 / prompt.num2}`);

} else if (prompt.operator === "-") {
    console.log(`\n Your Answer Is This:${prompt.num1 - prompt.num2}`);

} else {
    console.log("invalid operator");
}












