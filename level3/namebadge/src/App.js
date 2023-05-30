import React from "react";
import Badge from "./Badge";
import "./App.css"

export default function App(){
    const data = {   
    firstName: "", 
    lastName: "",
    email: "",
    birthPlace:"",
    phoneNumber:"",
    favoriteFood:"",
    description:"", }
    const[formData,setFormData]= React.useState (data)

    

    console.log("formData",formData)
    const[post,setPost]=React.useState([])
   
    const postMap= post.map((item,index)=> 
        <Badge key={index}
        firstName ={item.firstName} 
        lastName={item.lastName}
        email = {item.email} 
        birthPlace={item.birthPlace}
        phoneNumber = {item.phoneNumber} 
        favoriteFood={item.favoriteFood}
        description={item.description}
    />)
  
    
    function handleChange(e){
        setFormData(prevFormData => {
            console.log(e.target.value)
            return{
                ...prevFormData,
                [e.target.name]:e.target.value
            }
        })
}


const handleSubmit=(e)=>{
    
    e.preventDefault()
    setPost(prevPost=>[...prevPost,formData])
    setFormData(data)
console.log("handleSubmit",formData)
}


    return(
        <div className ="main">
            <h1 className="mainer">Comments</h1>
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <br/>
            <input
                type="text"
                placeholder="E-mail"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <input
                type="text"
                placeholder="Place of Birth"
                onChange={handleChange}
                name="birthPlace"
                value={formData.birthPlace}
            />
            <br/>
            <input
                type="text"
                placeholder="Phone Number"
                onChange={handleChange}
                name="phoneNumber"
                value={formData.phoneNumber}
            />
            <input
                type="text"
                placeholder="Favorite Food"
                onChange={handleChange}
                name="favoriteFood"
                value={formData.favoriteFood}
            />
            <br/>
            <textarea 
            value={formData.description}
            onChange={handleChange}
            placeholder="describe yourself"
            name="description"
            >
        
            </textarea>

            <button onClick={(e)=>handleSubmit(e)}>Submit</button>
        </form>
        <br/>
        <br/>
        <div className="domPost">
            {postMap}
        </div>

        </div>
    )
}
