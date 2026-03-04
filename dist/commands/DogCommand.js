"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogCommand = void 0;
const axios_1 = __importDefault(require("axios"));
class DogCommand {
    register(program) {
        program
            .command("dog")
            .description("Get a random dog image")
            .action(async () => {
            try {
                const response = await axios_1.default.get("https://dog.ceo/api/breeds/image/random");
                console.log(`Random dog image: ${response.data.message}`);
            }
            catch (error) {
                console.log("Error fetching dog image");
            }
        });
    }
}
exports.DogCommand = DogCommand;
