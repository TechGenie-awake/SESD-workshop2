"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathCommand = void 0;
class MathCommand {
    register(program) {
        program
            .command("add <num1> <num2>")
            .description("Add two numbers")
            .action((num1, num2) => {
            console.log(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`);
        });
        program
            .command("sub <num1> <num2>")
            .description("Subtract two numbers")
            .action((num1, num2) => {
            console.log(`${num1} - ${num2} = ${Number(num1) - Number(num2)}`);
        });
        program
            .command("mul <num1> <num2>")
            .description("Multiply two numbers")
            .action((num1, num2) => {
            console.log(`${num1} * ${num2} = ${Number(num1) * Number(num2)}`);
        });
        program
            .command("div <num1> <num2>")
            .description("Divide two numbers")
            .action((num1, num2) => {
            if (Number(num2) === 0) {
                console.log("Error: Cannot divide by zero");
            }
            else {
                console.log(`${num1} / ${num2} = ${Number(num1) / Number(num2)}`);
            }
        });
    }
}
exports.MathCommand = MathCommand;
