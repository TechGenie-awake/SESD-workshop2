import { Command } from "commander";
import { ICommand } from "../interfaces/ICommand";

export class GreetCommand implements ICommand {
  register(program: Command): void {
    program
      .command("greet <name>")
      .description("Greet a user")
      .action((name: string) => {
        console.log(`Hello ${name}!`);
      });
  }
}