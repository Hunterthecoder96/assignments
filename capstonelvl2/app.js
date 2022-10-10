// API given https://api.vschool.io/<yourname>/todo[/<todoId>]

//Get
axios.get("https://api.vschool.io/hunterSkolnick/todo")
    .then(response=>console.log(response))
    .catch(error=>console.log(error))
//post
axios.post("https://api.vschool.io/hunterSkolnick/todo")
//delete

//put
