#! usr/bin/env node
import inquirer from "inquirer";

//declare a constant'answers' and assign is to the result of inquirer.prompt function
const answers :{
    sentence:string
} = await inquirer.prompt([
    {
        name:"sentence",
        message: "enter your Sentence to count the word",
        type: "input"
    }
]);
const words = answers.sentence.trim().split(" ");
//print aaray of words to the console
console.log(words);
//print word count of sentence 
console.log(`your sentence word count is :${words.length}`);
