const readline = require("readline-sync");


 const start = readline.question("Do you wish to find your way out of the woods?")
 var userName = readline.question("what is your name?")

let isGameOn =  false;




var player = {
  name: userName,
  hp: 100,
  atk: 20, 
  inventory: [],
}
  

  

  var enemies = [
    {
      name: 'Wiledabeast',
      hp: 100,
      atk: 15,
      item: 'tusk',
    },
    {
      name: 'Hunny Badger',
      hp: 70,
      atk: 20,
      item: 'Fur',
    },
    {
      name: 'Bear',
      hp: 80,
      atk: 17,
      item: 'claw',
    },
  ];





  
function amIGettingAttacked (min, max){
  min = Math.ceil(min);
  mac = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


if (start === "yes"){
  isGameOn = true };

const optionMenu = ['walk', 'playerStats',] ;
const choose= ["run","fight"]



while(isGameOn){
   let index = readline.keyInSelect(optionMenu, userName  + ' you have found yourself in the woods lost; your goal is to find the way out, but be careful danger is lurking.')
  if (index === 0){
    letsWalkHome ()
  } else if (index === 1){
    console.log(player);
  }
 

  function letsWalkHome(){
    const beastIsComing  = amIGettingAttacked(1 , 5);
    if (beastIsComing === 3) {
      const randomEnemy = amIGettingAttacked(0 , 3);
      const forrestEnemy = enemies[randomEnemy];
      const fightOrRun = readline.keyInSelect(choose,`a dangerous animal is seen from the depths of the trees and is heading your way, By god It's a
        name: ${forrestEnemy.name}
        hp: ${forrestEnemy.hp}            
        atk:${forrestEnemy.atk}
        item: ${forrestEnemy.item}
        you can fight or run.`);

      if (fightOrRun === 0){
        runAway(forrestEnemy);
      }
      else if(fightOrRun === 1){
        fightTheBeast(forrestEnemy);
      }
    

  function runAway(forrestEnemy){
    const outaHere = amIGettingAttacked(1 , 3)
      if (outaHere === 1){
        console.log("your face has been ripped off ")
        isGameOn = false;
      }
      
     else{
        let seeYa = player.hp -= forrestEnemy.hp
        console.log(seeYa)
        console.log("you have escaped but have been injured by the " + forrestEnemy.name)
        
     }

  }

  function fightTheBeast(forrestEnemy){
    console.log ("you have chosen to fight the " + forrestEnemy.name);
    while(forrestEnemy.hp>0 || player.hp >0 ){
      forrestEnemy.hp -= player.atk;
      console.log(forrestEnemy.hp)

      player.hp -= forrestEnemy.atk
      console.log(player.hp)
      if (forrestEnemy.hp<= 0){
        fightWon(forrestEnemy)
 

        break;
      }
      else if(player.hp <= 0){
        console.log("your face has been ripped off")
        isGameOn = false;
    
        break;
      }
    }
  }
  function fightWon(forrestEnemy){
    console.log("you won the fight")
    player.hp += 45
    player.inventory.push(forrestEnemy.item)
  }
}
  
    }
  }

