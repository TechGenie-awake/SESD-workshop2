# MyCLI - SESD Workshop 2 Project

A CLI tool built with Node.js, TypeScript, and Object-Oriented Programming principles.

## Setup Instructions

1. Clone the repository:
```bash
git clone <your-repo-url>
cd workshop2
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Link the CLI globally (optional):
```bash
npm link
```

## Available Commands

### 1. Greet Command
```bash
mycli greet <name>
```
Greets a user by name.

**Example:**
```bash
mycli greet John
# Output: Hello John!
```

### 2. Math Commands
```bash
mycli add <num1> <num2>
mycli sub <num1> <num2>
mycli mul <num1> <num2>
mycli div <num1> <num2>
```
Perform basic mathematical operations.

**Examples:**
```bash
mycli add 5 3
# Output: 5 + 3 = 8

mycli div 10 2
# Output: 10 / 2 = 5
```

### 3. Joke Command (API #1)
```bash
mycli joke
```
Fetches a random joke from the Official Joke API.

**Example:**
```bash
mycli joke
# Output: Why did the chicken cross the road?
#         To get to the other side!
```

### 4. GitHub Command (API #2)
```bash
mycli github <username>
```
Fetches GitHub user information.

**Example:**
```bash
mycli github torvalds
# Output: Username: torvalds
#         Name: Linus Torvalds
#         ...
```

### 5. Quote Command (API #3)
```bash
mycli quote
```
Fetches a random inspirational quote.

**Example:**
```bash
mycli quote
# Output: "The only way to do great work is to love what you do."
#         - Steve Jobs
```

### 6. Dog Command (API #4)
```bash
mycli dog
```
Fetches a random dog image URL.

**Example:**
```bash
mycli dog
# Output: Random dog image: https://images.dog.ceo/breeds/...
```

### 7. Advice Command (API #5)
```bash
mycli advice
```
Fetches random advice.

**Example:**
```bash
mycli advice
# Output: Don't be afraid to ask questions.
```

### 8. File Info Command
```bash
mycli fileinfo <filename>
```
Displays information about a file.

**Example:**
```bash
mycli fileinfo package.json
# Output: File: package.json
#         Size: 512 bytes
#         Created: ...
#         Modified: ...
```

### 9. Help Command
```bash
mycli --help
```
Displays all available commands.

### 10. Version Command
```bash
mycli --version
```
Displays the CLI version.

## Project Structure

```
workshop2/
├── cli.ts                 # Main entry point
├── commands/              # Command classes
│   ├── GreetCommand.ts
│   ├── MathCommand.ts
│   ├── JokeCommand.ts
│   ├── GithubCommand.ts
│   ├── QuoteCommand.ts
│   ├── DogCommand.ts
│   ├── AdviceCommand.ts
│   └── FileInfoCommand.ts
├── interfaces/            # TypeScript interfaces
│   └── ICommand.ts
├── package.json
├── tsconfig.json
└── README.md
```

## APIs Used

1. **Official Joke API** - https://official-joke-api.appspot.com/
2. **GitHub API** - https://api.github.com/
3. **Quotable API** - https://api.quotable.io/
4. **Dog CEO API** - https://dog.ceo/api/
5. **Advice Slip API** - https://api.adviceslip.com/

## OOP Concepts Used

- **Classes**: Each command is implemented as a separate class
- **Interfaces**: `ICommand` interface defines the contract for all commands
- **Encapsulation**: Command logic is encapsulated within respective classes
- **Object Creation**: Command instances are created and registered in the main CLI file

## Technologies

- Node.js
- TypeScript
- Commander.js (CLI framework)
- Axios (HTTP requests)

## Author

Gayatri Jaiswal