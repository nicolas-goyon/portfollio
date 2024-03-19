import React from "react";
import "./Gauche.css";

export default function Gauche() {

    let jobTitle = "Développeur Web";
    let description = "Créatif passionné de l'informatique, dévoué à l'innovation et à l'impact positif.";

    let about = "A propos de moi";
    let experiences = "Expériences";
    let projects = "Projets";
    let education = "Formation";
    let contact = "Contact";
    let files = "Fichiers";


    let isEnglish = window.location.pathname.includes('/en');
    if (isEnglish) {
        jobTitle = "Web Developer";
        description = "Creative computer science student, dedicated to innovation and positive impact.";

        about = "About me";
        experiences = "Experiences";
        projects = "Projects";
        education = "Education";
        contact = "Contact";
        files = "Files";
    }


    return (
        <div id="gauche">
            <header>
                <h1>
                    Nicolas Goyon
                </h1>
                <h2>
                    {jobTitle}
                </h2>
            </header>
            <p>
                {description}
            </p>
            <nav className="vertical">
                <ul>
                    <li className="active"><a href="#about">
                        {about}
                    </a></li>
                    <li><a href="#Experiences">
                        {experiences}
                    </a></li>
                    <li><a href="#Projets">
                        {projects}
                    </a></li>
                    <li><a href="#Formation">
                        {education}
                    </a></li>
                    <li><a href="#Contact">
                        {contact}
                    </a></li>
                    <li><a href="#Fichiers">
                        {files}
                    </a></li>
                </ul>
            </nav>

        </div>
    )
}