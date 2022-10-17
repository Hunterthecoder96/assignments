// API given https://api.vschool.io/<yourname>/todo[/<todoId>]

//Get
// axios.get("https://api.vschool.io/hunterSkolnick/todo")
//     .then(response=>console.log(response))
//     .catch(error=>console.log(error))
//post



const todoForm = document.todoform

todoForm.addEventListener("submit", function(event){  
    event.preventDefault()

const newTodo={
    title: todoForm.title.value,
    description: todoForm.description.value,
       


}
axios.post("https://api.vschool.io/hunterSkolnick/todo", newTodo)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

})

//delete
axios.delete("https://api.vschool.io/hunterSkolnick/todo", )
//put
