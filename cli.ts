#!/usr/bin/env node
const {Command} = require("commander")
const axios = require("axios")

const program = new Command()

program
.command("greet <name>")
.action((name)=>(console.log(`Hello ${name}!`)))

program
.command("add <num1> <num2>")
.action((num1, num2)=>(console.log(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`)))

program
.command("sub <num1> <num2>")
.action((num1, num2)=>(console.log(`${num1} - ${num2} = ${Number(num1) - Number(num2)}`)))

program
.command("mul <num1> <num2>")
.action((num1, num2)=>(console.log(`${num1} * ${num2} = ${Number(num1) * Number(num2)}`)))

program
.command("div <num1> <num2>")
.action((num1, num2)=>{
    if(Number(num2) === 0){
        console.log("Error: Division by zero is not allowed.")
    } else {
        console.log(`${num1} / ${num2} = ${Number(num1) / Number(num2)}`)
    }
})

program
.command("joke")
.description("Tells a random joke")
.action( async ()=>{
    try {
        const response = await axios.get("https://official-joke-api.appspot.com/random_joke")
        const joke = response.data
        console.log(`${joke.setup}\n${joke.punchline}`)
    } catch (error) {
        console.error("Error fetching joke:", error)
    }
})

program.parse();