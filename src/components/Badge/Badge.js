import React from "react";
import "./Badge.css";


export default function Badge({ name, color }) {
    return (
        <span className={`badge ${color}`}>{name}</span>
    )
}