import React from "react";

export default function Nav({ arr }) {
    return (
        <ul>
            {arr.map((n) => (
                <li>{n}</li>
            ))}
        </ul>
    );
}