import { Command } from "commander";
import { ICommand } from "../interfaces/ICommand";
import axios from "axios";

export class QuoteCommand implements ICommand {
  register(program: Command): void {
    program
      .command("quote")
      .description("Get a random quote")
      .action(async () => {
        try {
          const response = await axios.get("https://api.quotable.io/random");
          const quote = response.data;
          console.log(`"${quote.content}"`);
          console.log(`- ${quote.author}`);
        } catch (error) {
          console.log("Error fetching quote");
        }
      });
  }
}