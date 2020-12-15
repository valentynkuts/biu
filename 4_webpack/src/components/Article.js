import React from "react";
import Section from "./Section";

export default function Article({list}) {
    return (
        <React.Fragment>
            {list.map((n) => (
                <Section name ={n.name} imagelink ={n.image} description ={n.description}/>
            ))}
            </React.Fragment>
    );
}