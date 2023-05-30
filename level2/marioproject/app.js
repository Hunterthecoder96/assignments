const goomba=document.getElementById("goomba")
const boomba = document.getElementById("boomba")
const cheep = document.getElementById("cheep")

const total = document.getElementById("total")
const submit=document.getElementById("submit")

submit.addEventListener("click", function(e) {
    e.preventDefault()

        let goombaTotal = goomba.value
        let goombaPrice = goombaTotal * 5

        let boombaTotal = boomba.value
        let boombaPrice = boombaTotal*7

        let cheepTotal = cheep.value
        let cheepPrice = cheepTotal * 11

    
        total.textContent = "Total: " + (goombaPrice + boombaPrice + cheepPrice ) 

})
