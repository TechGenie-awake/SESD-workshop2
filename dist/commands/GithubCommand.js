"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubCommand = void 0;
const axios_1 = __importDefault(require("axios"));
class GithubCommand {
    register(program) {
        program
            .command("github <username>")
            .description("Get GitHub user info")
            .action(async (username) => {
            try {
                const response = await axios_1.default.get(`https://api.github.com/users/${username}`);
                const user = response.data;
                console.log(`Username: ${user.login}`);
                console.log(`Name: ${user.name}`);
                console.log(`Bio: ${user.bio}`);
                console.log(`Public Repos: ${user.public_repos}`);
                console.log(`Followers: ${user.followers}`);
            }
            catch (error) {
                console.log("User not found");
            }
        });
    }
}
exports.GithubCommand = GithubCommand;
