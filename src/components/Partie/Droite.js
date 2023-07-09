import React from 'react';
import './Droite.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ListCard from '../Cards/ListCard';


export default function Droite() {

    return (
        <div id="droite">
            <section id="about">
                <h3>
                    A propos de moi
                </h3>
                <p>
                    Je suis étudiant et je vise à être ingénieur informatique afin de développer mes propres projets, jeux, et outils. Je me focalise d'avantage dans des choses ayant une réelle utilité. Si les différents projets auquels je serais ammené à travailler sont lié à l'écologie, c'est d'autant mieux.
                </p>
            </section>
            <section id="Experiences">
                <h3>
                    Experiences
                </h3>
                <ListCard list={[
                    {
                        title: "Stage - Développeur analyste · Diamantor SAS",
                        date: "Juin 2022 - Août 2022",
                        description: "Expérience de stage concluante en DUT informatique et gestion, axée sur l'élaboration d'outils avancés de gestion des stocks et le déploiement de modules d'administration hautement performants pour un site web Prestashop.",
                        tags: ["PHP", "Prestashop", "JS native", "JQuery", "SQL", "Bootstrap"],
                        link: "https://diamantor.fr"
                    }
                ]} />
            </section>



            <section id="Projets">
                <h3>
                    Projets
                </h3>
                <ListCard list={[
                    {
                        title: "Algebrèbre relationnelle",
                        description: "Il s'agit d'un site web sophistiqué, conçu dans le but de faciliter les requêtes d'algèbre relationnelle. Doté de fonctionnalités avancées, ce site permet aux utilisateurs de tester, enregistrer et perfectionner leurs compétences en algèbre relationnelle, tout en offrant des exercices pratiques stimulants. Grâce à son interface intuitive et conviviale, cette plateforme offre une expérience immersive unique, ouvrant ainsi la voie à un apprentissage efficace et agréable dans ce domaine essentiel de l'informatique.",
                        tags: ["En cours de développement", "Algèbre relationnelle", "NodeJS", "Express", "PostgresSQL", "TailwindCSS", "LaTex"],
                        link: "https://github.com/nicolas-goyon/Algebre-web",
                        img: "/images/Algebre-thumbnail.png"
                    },
                    {
                        title: "Code Game Jam (Janvier 2021)",
                        description: "Plongez dans l'aventure captivante d'une Game Jam passionnante axée sur le thème envoûtant de la chasse au trésor. Dans un tourbillon de créativité, notre équipe talentueuse a su repousser les limites en concevant un jeu sensationnel en seulement 48 heures, grâce à la puissance d'Unity. Le défi ? Utiliser un arc pour traquer et capturer des trésors qui se déplacent habilement sur une carte. Le tout enveloppé dans un somptueux style pixel art qui ravira les joueurs nostalgiques et les amateurs de rétro. Préparez-vous à une expérience de jeu palpitante où l'excitation et la compétition atteignent leur apogée dans cette quête effrénée vers la richesse ultime.",
                        tags: ["Unity", "C#", "Pixel Art", "Game Jam"],
                        link: "https://flochaz.itch.io/kallogs-island",
                        img: "/images/GameJam21-thumbnail.png"
                    },
                    {
                        title: "Ancien Portfollio",
                        description: "Ancien Portfollio réalisé en sur Wordpress durant mon DUT.",
                        tags: ["Wordpress"],
                        link: "https://nicolasgoyon.wordpress.com/",
                        img: "/images/AncienPortfollio-thumbnail.png"
                    },
                ]} />
            </section>

            <section id="Formation">
                <h3>
                    Formation
                </h3>
                <ListCard list={[
                    {
                        title: "Diplôme d'ingénieur informatique et gestion",
                        date: "2022 - 2025",
                        description: "Polytech Montpellier, Montpellier, France",
                        link: '#',
                    },
                    {
                        title: "DUT informatique et gestion",
                        date: "2020 - 2022",
                        description: "IUT de Montpellier, Montpellier, France",
                        link: '#',
                    },
                    {
                        title: "Baccalauréat scientifique spécialité sciences et vie de la terre",
                        date: "2020",
                        description: "Lycée Rive Gauche, Toulouse, France",
                        link: '#',
                    },

                ]} />
            </section>

            <section id="Contact">
                <h3>
                    Contact
                </h3>
                <ListCard list={[
                    {
                        title: "Linkedin",
                        link: "https://www.linkedin.com/in/nicolas-goyon-6575ab1b6/",
                        icon: faLinkedin
                    },
                    {
                        title: "Github",
                        link: "https://github.com/nicolas-goyon",
                        icon: faGithub
                    },
                    {
                        title: "Email",
                        link: "mailto:nicolas_goyon@orange.fr",
                        icon: faEnvelope,
                        description: "nicolas_goyon@orange.fr | nicolas.goyon@etu.umontpellier.fr" 
                    },
                ]} />
            </section>
        </div>
    )
}