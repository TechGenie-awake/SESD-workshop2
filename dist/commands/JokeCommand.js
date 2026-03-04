"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JokeCommand = void 0;
const axios_1 = __importDefault(require("axios"));
class JokeCommand {
    register(program) {
        program
            .command("joke")
            .description("Get a random joke")
            .action(async () => {
            try {
                const response = await axios_1.default.get("https://official-joke-api.appspot.com/random_joke");
                const joke = response.data;
                console.log(`${joke.setup}\n${joke.punchline}`);
            }
            catch (error) {
                console.log("Error fetching joke");
            }
        });
    }
}
exports.JokeCommand = JokeCommand;
