const momList = document.querySelector('#add-todo')


//logging input value to put into the body
momList.addEventListener("submit", function(event){
    event.preventDefault()
   
    const nameInput = momList.title.value
    momList.title.value = ""

    const div = document.createElement('li')
    div.textContent = nameInput
    
    addItemToList(nameInput)
     console.log(nameInput)
})



function addItemToList(nameInput){
 //local constants to create button function
    const list = document.getElementById("list")
    const grocery = document.createElement("li")
    const deleteButton = document.createElement("button");

    grocery.textContent = nameInput
    list.className = "list"

    deleteButton.innerHTML = "fuckoff"
    deleteButton.id = "delete-button"
    
 //Eventlistener to create function to remove item
    deleteButton.addEventListener("click", function(event){
        event.preventDefault()
        grocery.remove()
    })
    document.getElementById("list").appendChild(grocery)
     grocery.appendChild(deleteButton);
     const editButton =document.createElement("button");
     editButton.innerHTML ="x";
     editButton.classList.add("edit-button");
}


// changing background color to black (justforfun)
const color = document.querySelector (".changecolor");
color.addEventListener('click' , click); 
color.addEventListener('dblclick' , dblclick);     


 function click(color){

     document.body.style.backgroundColor = 'black'
 };

 function dblclick(color){

    document.body.style.backgroundColor = 'aqua'
};