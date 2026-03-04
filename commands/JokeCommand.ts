import { Command } from "commander";
import { ICommand } from "../interfaces/ICommand";
import axios from "axios";

export class JokeCommand implements ICommand {
  register(program: Command): void {
    program
      .command("joke")
      .description("Get a random joke")
      .action(async () => {
        try {
          const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
          const joke = response.data;
          console.log(`${joke.setup}\n${joke.punchline}`);
        } catch (error) {
          console.log("Error fetching joke");
        }
      });
  }
}