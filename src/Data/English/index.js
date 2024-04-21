
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
/* -------------------------------------------------------------------------- */
/*                                   GAUCHE                                   */
/* -------------------------------------------------------------------------- */

const jobTitle = "Web Developer";
const description = "Creative computer science student, dedicated to innovation and positive impact.";

const about = "About me";
const experiences = "Experiences";
const projects = "Projects";
const education = "Education";
const contact = "Contact";
const files = "Files";


/* -------------------------------------------------------------------------- */
/*                                   DROITE                                   */
/* -------------------------------------------------------------------------- */

const aboutHeader = "About me";
const aboutDescription = "As a passionate student, my objective is to become a visionary Software engineer, determined to shape a better future through my own creations. I stand out for my relentless quest for projects that are both innovative and useful, focusing on concrete and practical solutions. However, if these projects are in harmony with ecology and contribute to the preservation of our planet, then this represents an even more precious opportunity for me. Through my portfolio, I invite you to discover my background, my achievements and my determination to use the power of computer science to make a real difference in our ever-changing world."

const experienceHeader = "Experiences";
const experienceList = [
    {
      title : "Internationnal Mobility Internship - Unity AR/VR Developer · Ulster University",
        date : "April 2024 - August 2024",
        description : "I am currently doing an internship at Ulster University in Derry/LondonDerry, United Kingdom. The internship focuses on the development of software and video games for virtual and augmented reality. Since I have just started, I do not yet have any feedback on the experience. However, I am eager to develop my skills in this exciting and constantly evolving field.",
        tags : ["Unity", "C#", "AR", "VR", "Video games", "Software", "English"],
        link : "https://www.ulster.ac.uk/news/2022/august/spar-ni-creates-virtual-world-with-ulster-universitys-new-lab"  
    },
    {
        title: "Internship - Developer analyst · Diamantor SAS",
        date: "June 2022 - August 2022",
        description: "Successful internship experience in DUT computer science and management, focused on the development of advanced stock management tools and the deployment of highly efficient administration modules for a Prestashop website.",
        tags: ["PHP", "Prestashop", "JS native", "JQuery", "SQL", "Bootstrap"],
        link: "https://diamantor.fr"
    }
];

const projectsHeader = "Projects";
const projectsList = [
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
        title: "Kitchen Chaos",
        description: "This project is a video game created by following a 10-hour course by the YouTuber CodeMonkey on Unity. The goal of the game is to prepare meals according to the recipes given by customers. The game is in 3D with simple animations and basic interactions. The project covers a large part of the basic functionalities of creating a video game with Unity.",
        tags: ["Unity", "C#", "Course", "Autonomy"],
        link: "https://github.com/nicolas-goyon/Unity-learning",
        img: "/images/KitchenChaosLogo.png"
    }
];

const formationHeader = "Education";
const formationList = [
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