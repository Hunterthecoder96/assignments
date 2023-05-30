import React from "react"
import "./DjSquare.css"

export default function djSquare(props){

    console.log("props", props)
    return(
        <div className="square" style={{
            backgroundColor: props.color
        }}>

        </div>
    )
};