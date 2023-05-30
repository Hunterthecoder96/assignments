document.getElementById("square").addEventListener('mouseover',mousedown
)

function mousedown(){
    document.getElementById("square").style.backgroundColor = "lightblue"
}

document.getElementById("square").addEventListener('mouseout',mouseout
)

function mouseout(){
    document.getElementById("square").style.backgroundColor = "gray"
}

document.getElementById("square").addEventListener('dblclick',holddown
)

function holddown(){
    document.getElementById("square").style.backgroundColor = "green"}