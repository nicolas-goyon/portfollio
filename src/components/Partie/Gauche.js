import React from "react";
import "./Gauche.css";
import {Gauche as GaucheFr} from '../../Data/Francais';
import {Gauche as GaucheEn} from '../../Data/English';

export default function Gauche() {
    let data = GaucheFr;

    let isEnglish = window.location.pathname.includes("/en");
    if (isEnglish) {
        data = GaucheEn;
    }


    return (
        <div id="gauche">
            <header>
                <h1>
                    Nicolas Goyon
                </h1>
                <h2>
                    {data.jobTitle}
                </h2>
            </header>
            <p>
                {data.description}
            </p>
            <nav className="vertical">
                <ul>
                    <li className="active"><a href="#about">
                        {data.about}
                    </a></li>
                    <li><a href="#Experiences">
                        {data.experiences}
                    </a></li>
                    <li><a href="#Projets">
                        {data.projects}
                    </a></li>
                    <li><a href="#Formation">
                        {data.education}
                    </a></li>
                    <li><a href="#Contact">
                        {data.contact}
                    </a></li>
                </ul>
            </nav>

        </div>
    )
}