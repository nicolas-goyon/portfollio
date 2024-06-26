
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
/* -------------------------------------------------------------------------- */
/*                                   GAUCHE                                   */
/* -------------------------------------------------------------------------- */

const jobTitle = "Développeur Web";
const description = "Créatif passionné de l'informatique, dévoué à l'innovation et à l'impact positif.";

const about = "A propos de moi";
const experiences = "Expériences";
const projects = "Projets";
const education = "Formation";
const contact = "Contact";
const files = "Fichiers";


/* -------------------------------------------------------------------------- */
/*                                   DROITE                                   */
/* -------------------------------------------------------------------------- */

const aboutHeader = "A propos de moi";
const aboutDescription = "En tant qu'étudiant passionné, mon objectif ultime est de devenir un ingénieur informatique visionnaire, déterminé à façonner un avenir meilleur à travers mes propres créations. Je me distingue par ma quête incessante de projets à la fois innovants et utiles, mettant l'accent sur des solutions concrètes et pratiques. Cependant, si ces projets sont en harmonie avec l'écologie et contribuent à la préservation de notre planète, alors cela représente pour moi une opportunité encore plus précieuse. À travers mon portfolio, je vous invite à découvrir mon parcours, mes réalisations et ma détermination à utiliser la puissance de l'informatique pour faire une réelle différence dans notre monde en constante évolution."

const experienceHeader = "Expériences";
const experienceList = [
    {
        title: "Stage Mobilité Internationale - Développeur Unity AR/VR · Ulster University",
        date: "Avril 2024 - Août 2024",
        description: "Je suis actuellement en stage à l'Université d'Ulster à Derry/LondonDerry, au Royaume-Uni. Ce stage se concentre sur le développement de logiciels et de jeux vidéo pour la réalité virtuelle et augmentée. Étant donné que je viens tout juste de commencer, je n'ai pas encore de retour d'expérience à partager. Cependant, je suis impatient de développer mes compétences dans ce domaine passionnant et en constante évolution.",
        tags: ["Unity", "C#", "AR", "VR", "Jeux vidéos", "Logiciels", "Anglais"],
        link: "https://www.ulster.ac.uk/news/2022/august/spar-ni-creates-virtual-world-with-ulster-universitys-new-lab"
    },
    {
        title: "Stage - Développeur analyste · Diamantor SAS",
        date: "Juin 2022 - Août 2022",
        description: "Expérience de stage concluante en DUT informatique et gestion, axée sur l'élaboration d'outils avancés de gestion des stocks et le déploiement de modules d'administration hautement performants pour un site web Prestashop.",
        tags: ["PHP", "Prestashop", "JS natif", "JQuery", "SQL", "Bootstrap"],
        link: "https://diamantor.fr"
    }
];

const projectsHeader = "Projets";
const projectsList = [
    {
        title: "Algebrèbre relationnelle",
        description: "Il s'agit d'un site web sophistiqué, conçu dans le but de faciliter les requêtes d'algèbre relationnelle. Doté de fonctionnalités avancées, ce site permet aux utilisateurs de tester, enregistrer et perfectionner leurs compétences en algèbre relationnelle, tout en offrant des exercices pratiques stimulants. Grâce à son interface intuitive et conviviale, cette plateforme offre une expérience immersive unique, ouvrant ainsi la voie à un apprentissage efficace et agréable dans ce domaine essentiel de l'informatique.",
        tags: ["Algèbre relationnelle", "NodeJS", "Express", "PostgresSQL", "TailwindCSS", "LaTex"],
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
        title: "Kitchen Chaos",
        description: "Dans le cadre d'un cours de 10 heures dispensé par le youtubeur CodeMonkey, j'ai développé un jeu vidéo 3D utilisant le moteur de jeu Unity. Le concept du jeu consiste à préparer des plats en suivant les instructions des clients. Les graphismes sont simples et les animations basiques, mais le jeu offre une expérience interactive agréable. Ce projet m'a permis d'acquérir des compétences solides dans la création de jeux vidéo avec Unity, notamment en ce qui concerne les fonctionnalités de base.",
        tags: ["Unity", "C#", "Cours", "Autonomie"],
        link: "https://github.com/nicolas-goyon/Unity-learning",
        img: "/images/KitchenChaosLogo.png"
    }
];

const formationHeader = "Formations";
const formationList = [
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

const contactHeader = "Contact";
const contactList = [
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


export const Gauche = {
    jobTitle,
    description,
    about,
    experiences,
    projects,
    education,
    contact,
    files
}

export const Droite = {
    aboutHeader,
    aboutDescription,
    experienceHeader,
    experienceList,
    projectsHeader,
    projectsList,
    formationHeader,
    formationList,
    contactHeader,
    contactList,
}