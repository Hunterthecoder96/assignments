import React, {useState} from "react";
import "./Die.css"



export default function App(){
    const [number,setNumber] = useState([1,2,3,4,5])
    const random1 = Math.floor(Math.random()*6)+1;
    const random2 = Math.floor(Math.random()*6)+1;
   

    const roll =()=> {
        setNumber(
            [random1, random2]
           
        )
    };

    


    return (
        <div>
            <div className="die">
                
                
                <h1>{`${number[0]}`}</h1>
                <h1>{` ${number[1]}`}</h1>
            
            </div>
            <div>
                <button onClick ={roll}>ROLL!</button>
            </div>
        </div>
    )
}