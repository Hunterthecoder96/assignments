import React from "react";
import axios from"axios";
import "./App.css"

const baseUrl = "https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}"
export default function App(){
    const [colorData,setColorData]=React.useState("000000")
    

    React.useEffect(function(){
      axios
        .get(baseUrl)
        .then(res=>setColorData(res.data.new_color))
    }, [])

    const styles ={
      backgroundColor: `#${colorData}`
    }
    return(
        <div>
            <div className='box'style={styles}> </div>
        </div>
    )
}
