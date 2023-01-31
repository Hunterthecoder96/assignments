import React from "react"
import Data from "./Data"
import Friends from "./Friends"

export default function App(){

    const list =Data.map(info=> {
        return <Friends info={info} />
    })
    return(
    {list}
    )
}