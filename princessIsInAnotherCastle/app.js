class character{
    constructor(name,totalCoins,status,hasStar){
        this.name = name;
        this.totalCoins = 0;
        this.status = status;
        this.hasStar = hasStar;
        
    }
    setName(namePicked){
        //     let playerName = Math.floor(Math.random() * 2)
        //  if(playerName === 0){
        //      this.name = "Mario"
        //  } else if (playerName === 1){
        //      this.name = "Luigi"
        //  }
        // return this.name

        this.name = namePicked
    }
   

    gotHit(status){
        let newStatus = Math.floor(Math.random() * 4)
        if(newStatus === 0){
           this.status = "Powered Up"
        } else if(newStatus === 1){
           this.status = "Big"
        } else if(newStatus === 2){
           this.status = "Small"
        } else if(newStatus === 3){
            this.status = "Dead"
        

        }
        return this.status

    }

    

    gotPowerup(){
        if (this.status === "Powered Up"){
            return this.hasStar === "You got a star!"
        } 
    }

    addCoin(){
        this.totalCoins ++;
        console.log(`${this.name} has received a coin!`)
    }

    print(){
        console.log(`Name: ${this.name}  
    Total Coins: ${this.totalCoins} 
    Status: ${this.status} 
    has star:${this.hasStar}`)
    }

}
//placeholder
var player = new character
    
player.setName("Mario")


//look into setInterval --> const gameRun = setInterval(() => {})
function gameStart() {
    // let player = new character();
    player.totalCoins = 0;
    player.print()
    let value = Math.floor(Math.random() * 3)
    if (value === 0){
        player.gotHit(value)
    } else if (value === 1){
        player.gotPowerup(value)
    } else if (value === 2){
        player.addCoin(value)
    }
    let gameRun = setInterval( gameStart, 1000);
}

console.log(gameStart())
