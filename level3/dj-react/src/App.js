import React, {useState} from 'react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
import Djsquare from "./Djsquare"


export default function App(){

  const [color,setColor] = useState(["white","pink","blue","black"])

  const djSmall = () => { 
    setColor(function(prevColors){
      if(prevColors[0]==="white")
        return(
          ["black","black","black","black"]
        )
        else 
          return(
            ["white","white","white","white"]
          )
    
    })
  }

  const partyDj = () => {
    setColor(function(prevColors){
      if(prevColors[0]==="white")
        return(["purple","purple","white","white"])
      else
      return(["white","white","white","white"])
    })
  }

  const leftBlue = () => {
    setColor(function(prevColors){
      return(["white","white","blue","white"])
    })
  }
  const rightBlue = () => {
    setColor(function(prevColors){
      return(["white","white","white","blue"])
    })
  }

  const bigOne = () => {
    setColor(function(prevColors){
      return(["red","red","red","red"])
    })
  }

  const bigTwo = () => {
    setColor(function(prevColors){
      return(["red","yellow","green","purple"])
    })
  }
  const bigThree = () => {
    setColor(function(prevColors){
      return(["green","blue","red","yellow"])
    })
  }
  const bigFour = () => {
    setColor(function(prevColors){
      return(["pink","red","yellow","blue"])
    })
  }
  return(

  <div className='main'>
    <div className='djSquare'>
    
    {/* pass down a color prop into each square */}
    <Djsquare color={color[0]} />
    <Djsquare color={color[1]}/>
   
    
  </div>
  <div className='djSquare'>
    <Djsquare color={color[2]} />
    <Djsquare color={color[3]} />
   
    
  </div>

  <div className='buttons'>
    
            <button onClick ={djSmall}>Dj small</button>
            <button onClick ={partyDj}>Party DJ</button>
            <button onClick ={leftBlue}>Left Blue</button>
            <br/>
            <button onClick ={rightBlue}>Right Blue</button>
            <button onClick ={bigOne}>Big DJ one</button>
            <button onClick ={bigTwo}>Big DJ two</button>
            <br />
            <button onClick ={bigThree}>Big DJ three</button>
            <button onClick ={bigFour}>Big DJ four</button>
            <button>Make Noise</button>
  </div>
</div>)
};


