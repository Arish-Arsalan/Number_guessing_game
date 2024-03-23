console.log("guess the number between 1  to  10");
//now variable create//
let a:number = Math.floor(Math.random()*10);
import inquirer from "inquirer";
while(true){
    let input=await inquirer.prompt
        ({name: "guess",type:"number",
    message:"Enter your guess number you want:  "})
    
//provide code
let ans:number=input.guess
if (a==ans)
{console.log("congratulation your guess number is correct")
break;}
else{console.log("sorry you guess wrong number try again")}
}