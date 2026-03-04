"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetCommand = void 0;
class GreetCommand {
    register(program) {
        program
            .command("greet <name>")
            .description("Greet a user")
            .action((name) => {
            console.log(`Hello ${name}!`);
        });
    }
}
exports.GreetCommand = GreetCommand;
