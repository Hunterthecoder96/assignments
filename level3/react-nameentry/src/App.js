import './App.css';
import React from "react";

function App() {
  // const[formData,setFormData] = React.useState({
  //     list:"",
  //     currentList:[],
  // })

  const [input, setInput] = React.useState("")
  const [list,setList] = React.useState([])
  
  function handleChange(event){
    console.log('form data in handle change', input)
    setInput (prevInput=>event.target.value)}
    
//IMPLICIT RETURN
const newListItems = (
  list.map(item => <li>{item}</li>)
)

const submitList =(event)=>{
  console.log('form data in SUBMIT LIST', list)

  event.preventDefault()
  setList(prevList=>[...prevList, input])
  setInput("")
}
  
  return (
  <div>
    <form>
      <input
        type="text"
        onChange={handleChange}  
        name="input" 
        value={input}     
      />
      <button onClick={(e) => submitList(e)}>submit</button>

      <ul>
        {
          newListItems
        }
      </ul>
    </form>
  </div>
  );
  }

export default App;
