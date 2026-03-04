"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdviceCommand = void 0;
const axios_1 = __importDefault(require("axios"));
class AdviceCommand {
    register(program) {
        program
            .command("advice")
            .description("Get random advice")
            .action(async () => {
            try {
                const response = await axios_1.default.get("https://api.adviceslip.com/advice");
                console.log(response.data.slip.advice);
            }
            catch (error) {
                console.log("Error fetching advice");
            }
        });
    }
}
exports.AdviceCommand = AdviceCommand;
