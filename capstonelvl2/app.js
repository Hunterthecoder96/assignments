// API given https://api.vschool.io/<yourname>/todo[/<todoId>]

// GET TODO LIST

// create todos
const getdata = () => {
  axios
    .get('https://api.vschool.io/hunterSkolnick/todo')
    .then((res) => listData(res.data))
    .catch((err) => console.err(err));
};

const createTodos = (res) => {
  clearList();
  for (let i = 0; i < res.length; i++) {
    getdata(res[i]);
  }
};

//Get

function listData(data) {
  console.log(data);
  document.getElementById('todoList').innerHTML = '';
  for (let i = 0; i < data.length; i++) {
    const h1 = document.createElement('h1');
    h1.textContent = data[i].title;
    document.getElementById('todoList').appendChild(h1);
    //delete
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.className = 'delete';
    h1.append(deleteButton);

    deleteButton.addEventListener('click', () => {
      axios
        .delete(`https://api.vschool.io/hunterSkolnick/todo/${data[i]._id}`)
        .then(getdata)
        .catch((error) => console.log(error));
    });
    //put
    const putButton = document.createElement('input');
    putButton.type = 'checkbox';
    putButton.textContent = 'Done';
    h1.append(putButton);
    // const cmplete ={
    //     completed: true
    // }
    const notCmplete = {
      completed: putButton.checked,
    };
  }
}
function clearList() {
  const el = document.getElementById('todoList');
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
}
getdata();

//post
const todoForm = document.todoForm;

todoForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const newTodo = {
    title: todoForm.title.value,
    description: todoForm.description.value,
  };
  axios
    .post('https://api.vschool.io/hunterSkolnick/todo', newTodo)
    .then((response) => createTodos([response.data]))
    .catch((error) => console.log(error));
});
