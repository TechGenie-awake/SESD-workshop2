#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const GreetCommand_1 = require("./commands/GreetCommand");
const MathCommand_1 = require("./commands/MathCommand");
const JokeCommand_1 = require("./commands/JokeCommand");
const GithubCommand_1 = require("./commands/GithubCommand");
const QuoteCommand_1 = require("./commands/QuoteCommand");
const FileInfoCommand_1 = require("./commands/FileInfoCommand");
const DogCommand_1 = require("./commands/DogCommand");
const AdviceCommand_1 = require("./commands/AdviceCommand");
const program = new commander_1.Command();
program
    .name("mycli")
    .description("CLI tool for SESD Workshop 2")
    .version("1.0.0");
new GreetCommand_1.GreetCommand().register(program);
new MathCommand_1.MathCommand().register(program);
new JokeCommand_1.JokeCommand().register(program);
new GithubCommand_1.GithubCommand().register(program);
new QuoteCommand_1.QuoteCommand().register(program);
new FileInfoCommand_1.FileInfoCommand().register(program);
new DogCommand_1.DogCommand().register(program);
new AdviceCommand_1.AdviceCommand().register(program);
program.parse();
