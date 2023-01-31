import React from"react";
import Data from "./data"
import Card from "./Components/Card"
import Header from "./Components/Header"

export default function App(){

  const map = Data.map(info=>{
    return <Card info={info} />
  })


return(
  <div>
  <Header/>
  {map}

  </div>
)





}