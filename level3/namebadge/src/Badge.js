import React from "react";

export default function Badge(props) {

    return(
        <div>
            <h1>Heres your bullshit</h1>
            <h2>First Name:{props.firstName} Last Name:{props.lastName}</h2>
            <h2> {props.email}</h2>
            <h2>{props.birthPlace}</h2>
            <h2>{props.phoneNumber}</h2>
            <h2>{props.favoriteFood}</h2>
            <h2>{props.description}</h2>
        </div>
    )
}
