import { Command } from "commander";
import { ICommand } from "../interfaces/ICommand";
import axios from "axios";

export class DogCommand implements ICommand {
  register(program: Command): void {
    program
      .command("dog")
      .description("Get a random dog image")
      .action(async () => {
        try {
          const response = await axios.get("https://dog.ceo/api/breeds/image/random");
          console.log(`Random dog image: ${response.data.message}`);
        } catch (error) {
          console.log("Error fetching dog image");
        }
      });
  }
}