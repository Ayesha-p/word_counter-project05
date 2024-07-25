import inquirer from "inquirer";
const user_answer = await inquirer.prompt([{
message:"Enter pragraph",
type:"string",
name:"paragraph"
}]);


    const charactersWithoutWhitespace = user_answer.paragraph.replace(/\s+/g, '');
    const characterCount = charactersWithoutWhitespace.length;
    const words = user_answer.paragraph.trim().split(/\s+/);
    const wordCount = words.length;



console.log(`Characters: ${characterCount}`);
console.log(`Words: ${wordCount}`);
