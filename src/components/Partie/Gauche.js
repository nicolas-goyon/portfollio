import React from "react";
import "./Gauche.css";

export default function Gauche() {
    return (
        <div id="gauche">
        <header>
            <h1>
                Nicolas Goyon
            </h1>
            <h2>
                Développeur Web
            </h2>
        </header>
        <nav className="vertical">
            <ul>
                <li className="active"><a href="#about">
                        A propos de moi
                    </a></li>
                <li><a href="#Experiences">
                        Expériences
                    </a></li>
                <li><a href="#Projets">
                        Projets
                    </a></li>
                <li><a href="#Formation">
                        Formation
                    </a></li>
                <li><a href="#Contact">
                        Contact
                    </a></li>
            </ul>
        </nav>

    </div> 
    )
}