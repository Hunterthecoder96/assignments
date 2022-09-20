const readline = require("readline-sync");
const name = readline.question("What is your name? ");

let isGameOn = true;
let isKeyFound = false;


const options = ["walk", "", "Open door"]

while (isGameOn){
let index = readline.keyInSelect(options,"What is your move?:");

    if (options [index] === "Reach inside the hole") {
      console.log ("dead")  

    }  else if (options[index]==="look Under the Rock"){
         console.log("You found the key");
            isKeyFound = true}

        else if (options[index] ==="open the door"){

        if(isKeyFound === false)
        console.log("access denied")

      } 
        else if (options[index] ==="open the door"){
            console.log("You are free to leave")
            isGameOn=false
        
        }
        else;{
            console.log("please make a selection")
        }
    }
    
