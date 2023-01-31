import React from "react";

export default function Vacation(props){

    return(
        <div>
            <img className="image" src={props.info.image} alt="meridian idaho"/>
            <h3>{props.info.place}</h3>
            <div>
                <ul>
                    <li>{props.info.timeToGo}</li>
                    <li>${props.info.price}</li>
                </ul>
            </div>
        </div>
    )
}