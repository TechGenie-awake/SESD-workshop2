import { Command } from "commander";
import { ICommand } from "../interfaces/ICommand";

export class MathCommand implements ICommand {
  register(program: Command): void {
    program
      .command("add <num1> <num2>")
      .description("Add two numbers")
      .action((num1: string, num2: string) => {
        console.log(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`);
      });

    program
      .command("sub <num1> <num2>")
      .description("Subtract two numbers")
      .action((num1: string, num2: string) => {
        console.log(`${num1} - ${num2} = ${Number(num1) - Number(num2)}`);
      });

    program
      .command("mul <num1> <num2>")
      .description("Multiply two numbers")
      .action((num1: string, num2: string) => {
        console.log(`${num1} * ${num2} = ${Number(num1) * Number(num2)}`);
      });

    program
      .command("div <num1> <num2>")
      .description("Divide two numbers")
      .action((num1: string, num2: string) => {
        if (Number(num2) === 0) {
          console.log("Error: Cannot divide by zero");
        } else {
          console.log(`${num1} / ${num2} = ${Number(num1) / Number(num2)}`);
        }
      });
  }
}