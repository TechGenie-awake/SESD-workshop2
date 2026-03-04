#!/usr/bin/env node
import { Command } from "commander";
import { GreetCommand } from "./commands/GreetCommand";
import { MathCommand } from "./commands/MathCommand";
import { JokeCommand } from "./commands/JokeCommand";
import { GithubCommand } from "./commands/GithubCommand";
import { QuoteCommand } from "./commands/QuoteCommand";
import { FileInfoCommand } from "./commands/FileInfoCommand";
import { DogCommand } from "./commands/DogCommand";
import { AdviceCommand } from "./commands/AdviceCommand";

const program = new Command();

program
  .name("mycli")
  .description("CLI tool for SESD Workshop 2")
  .version("1.0.0");

new GreetCommand().register(program);
new MathCommand().register(program);
new JokeCommand().register(program);
new GithubCommand().register(program);
new QuoteCommand().register(program);
new FileInfoCommand().register(program);
new DogCommand().register(program);
new AdviceCommand().register(program);

program.parse();