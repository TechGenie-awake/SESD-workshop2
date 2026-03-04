"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteCommand = void 0;
const axios_1 = __importDefault(require("axios"));
class QuoteCommand {
    register(program) {
        program
            .command("quote")
            .description("Get a random quote")
            .action(async () => {
            try {
                const response = await axios_1.default.get("https://api.quotable.io/random");
                const quote = response.data;
                console.log(`"${quote.content}"`);
                console.log(`- ${quote.author}`);
            }
            catch (error) {
                console.log("Error fetching quote");
            }
        });
    }
}
exports.QuoteCommand = QuoteCommand;
