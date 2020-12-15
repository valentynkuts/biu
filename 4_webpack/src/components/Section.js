import React from "react";

export default function Section({ name, imagelink, description }) {
    return (
        <section className="section">
            <h4>{name}</h4>
            <img src={imagelink} width="110" height="90"/>
            <p>{description}</p>
        </section>
    );
}