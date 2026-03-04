import { Command } from "commander";
import { ICommand } from "../interfaces/ICommand";
import axios from "axios";

export class AdviceCommand implements ICommand {
  register(program: Command): void {
    program
      .command("advice")
      .description("Get random advice")
      .action(async () => {
        try {
          const response = await axios.get("https://api.adviceslip.com/advice");
          console.log(response.data.slip.advice);
        } catch (error) {
          console.log("Error fetching advice");
        }
      });
  }
}