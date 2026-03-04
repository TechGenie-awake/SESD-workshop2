import { Command } from "commander";
import { ICommand } from "../interfaces/ICommand";
import axios from "axios";

export class GithubCommand implements ICommand {
  register(program: Command): void {
    program
      .command("github <username>")
      .description("Get GitHub user info")
      .action(async (username: string) => {
        try {
          const response = await axios.get(`https://api.github.com/users/${username}`);
          const user = response.data;
          console.log(`Username: ${user.login}`);
          console.log(`Name: ${user.name}`);
          console.log(`Bio: ${user.bio}`);
          console.log(`Public Repos: ${user.public_repos}`);
          console.log(`Followers: ${user.followers}`);
        } catch (error) {
          console.log("User not found");
        }
      });
  }
}