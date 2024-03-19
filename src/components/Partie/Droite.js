import React from 'react';
import './Droite.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import ListCard from '../Cards/ListCard';


export default function Droite() {
    let aboutHeader = "A propos de moi";
    let aboutDescription = "En tant qu'étudiant passionné, mon objectif ultime est de devenir un ingénieur informatique visionnaire, déterminé à façonner un avenir meilleur à travers mes propres créations. Je me distingue par ma quête incessante de projets à la fois innovants et utiles, mettant l'accent sur des solutions concrètes et pratiques. Cependant, si ces projets sont en harmonie avec l'écologie et contribuent à la préservation de notre planète, alors cela représente pour moi une opportunité encore plus précieuse. À travers mon portfolio, je vous invite à découvrir mon parcours, mes réalisations et ma détermination à utiliser la puissance de l'informatique pour faire une réelle différence dans notre monde en constante évolution."

    let experienceHeader = "Expériences";
    let experienceList = [
        {
            title: "Stage - Développeur analyste · Diamantor SAS",
            date: "Juin 2022 - Août 2022",
            description: "Expérience de stage concluante en DUT informatique et gestion, axée sur l'élaboration d'outils avancés de gestion des stocks et le déploiement de modules d'administration hautement performants pour un site web Prestashop.",
            tags: ["PHP", "Prestashop", "JS natif", "JQuery", "SQL", "Bootstrap"],
            link: "https://diamantor.fr"
        }
    ];

    let projectsHeader = "Projets";
    let projectsList = [
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
        }
    ];

    let formationHeader = "Formations";
    let formationList = [
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
        }
    ]

    let contactHeader = "Contact";
    let contactList = [
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
        }
    ]


    let fileheader = "Fichiers";
    let fileList = [
        {
            title: "CV",
            link: "/files/CV_Nicolas_Goyon_2023.pdf",
            icon: faFilePdf
        }
    ]

    let isEnglish = window.location.pathname.includes("/en");
    if (isEnglish) {
        aboutHeader = "About me";
        aboutDescription = "As a passionate student, my objective is to become a visionary Software engineer, determined to shape a better future through my own creations. I stand out for my relentless quest for projects that are both innovative and useful, focusing on concrete and practical solutions. However, if these projects are in harmony with ecology and contribute to the preservation of our planet, then this represents an even more precious opportunity for me. Through my portfolio, I invite you to discover my background, my achievements and my determination to use the power of computer science to make a real difference in our ever-changing world."

        experienceHeader = "Experiences";
        experienceList = [
            {
                title: "Internship - Developer analyst · Diamantor SAS",
                date: "June 2022 - August 2022",
                description: "Successful internship experience in DUT computer science and management, focused on the development of advanced stock management tools and the deployment of highly efficient administration modules for a Prestashop website.",
                tags: ["PHP", "Prestashop", "JS native", "JQuery", "SQL", "Bootstrap"],
                link: "https://diamantor.fr"
            }
        ];

        projectsHeader = "Projects";
        projectsList = [
            {
                title: "Relational algebra",
                description: "This is a sophisticated website, designed to facilitate relational algebra queries. With advanced features, this site allows users to test, save and improve their relational algebra skills, while offering challenging practical exercises. Thanks to its intuitive and user-friendly interface, this platform offers a unique immersive experience, paving the way for effective and enjoyable learning in this essential field of computer science.",
                tags: ["Work in progress", "Relational algebra", "NodeJS", "Express", "PostgresSQL", "TailwindCSS", "LaTex"],
                link: "https://github.com/nicolas-goyon/Algebre-web",
                img: "/images/Algebre-thumbnail.png"
            },
            {
                title: "Code Game Jam (January 2021)",
                description: "Dive into the captivating adventure of an exciting Game Jam focused on the enchanting theme of treasure hunting. In a whirlwind of creativity, our talented team was able to push the limits by designing a sensational game in just 48 hours, thanks to the power of Unity. The challenge? Use a bow to track and capture treasures that move skillfully on a map. All wrapped in a sumptuous pixel art style that will delight nostalgic players and retro lovers. Get ready for an exciting gaming experience where excitement and competition reach their peak in this frantic quest for ultimate wealth.",
                tags: ["Unity", "C#", "Pixel Art", "Game Jam"],
                link: "https://flochaz.itch.io/kallogs-island",
                img: "/images/GameJam21-thumbnail.png"
            },
            {
                title: "Old Portfolio",
                description: "Old Portfolio made on Wordpress during my DUT.",
                tags: ["Wordpress"],
                link: "https://nicolasgoyon.wordpress.com/",
                img: "/images/AncienPortfollio-thumbnail.png"
            }
        ];

        formationHeader = "Education";
        formationList = [
            {
                title: "Master's degree in computer science and management",
                date: "2022 - 2025",
                description: "Polytech Montpellier, Montpellier, France",
                link: '#',
            },
            {
                title: "DUT in computer science and management",
                date: "2020 - 2022",
                description: "UIT of Montpellier, Montpellier, France",
                link: '#',
            },
            {
                title: "Scientific baccalaureate specializing in life and earth sciences",
                date: "2020",
                description: "Lycée Rive Gauche, Toulouse, France",
                link: '#',
            }
        ]

        fileheader = "Files";
        fileList = [
            {
                title: "CV",
                link: "/files/English_CV_Nicolas_Goyon_2023.pdf",
                icon: faFilePdf
            }
        ]

    }


    return (
        <div id="droite">
            <section id="about">
                <h3>
                    {aboutHeader}
                </h3>
                <p>
                    {aboutDescription}
                </p>
            </section>
            <section id="Experiences">
                <h3>
                    {experienceHeader}
                </h3>
                <ListCard list={experienceList} />
            </section>



            <section id="Projets">
                <h3>
                    {projectsHeader}
                </h3>
                <ListCard list={projectsList} />
            </section>

            <section id="Formation">
                <h3>
                    {formationHeader}
                </h3>
                <ListCard list={formationList} />
            </section>

            <section id="Contact">
                <h3>
                    {contactHeader}
                </h3>
                <ListCard list={contactList} />
            </section>

            <section id="Fichiers">
                <h3>
                    {fileheader}
                </h3>
                <ListCard list={fileList} />
            </section>
        </div>
    )
}