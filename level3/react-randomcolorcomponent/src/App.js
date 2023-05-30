import React from "react";


export default function App(){
    const [colorData,setColorData]=React.useState({})
    const [count,setCount]=React.useState(1)
    React.useEffect(function(){
        console.log("effect ran")
        fetch('https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}')
            .then(res=>res.json())
            .then(data=>setColorData(data))
    }, [colorData])

    return(
        <div>
            <button onClick={()=>setCoun(prevCount=>prevCount +1) }>Get New Color</button>
            <pre>{json.stringify(colorData,null, 2 )}</pre>
        </div>
    )
}

