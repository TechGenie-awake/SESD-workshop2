import { Command } from "commander";
import { ICommand } from "../interfaces/ICommand";
import * as fs from "fs";

export class FileInfoCommand implements ICommand {
  register(program: Command): void {
    program
      .command("fileinfo <filename>")
      .description("Get file information")
      .action((filename: string) => {
        try {
          const stats = fs.statSync(filename);
          console.log(`File: ${filename}`);
          console.log(`Size: ${stats.size} bytes`);
          console.log(`Created: ${stats.birthtime}`);
          console.log(`Modified: ${stats.mtime}`);
        } catch (error) {
          console.log("File not found");
        }
      });
  }
}