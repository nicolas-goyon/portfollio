import React from 'react';
import './Droite.css';
import ListCard from '../Cards/ListCard';
import {Droite as DroiteFr} from '../../Data/Francais';
import {Droite as DroiteEn} from '../../Data/English';


export default function Droite() {
    let data = DroiteFr;

    let isEnglish = window.location.pathname.includes("/en");
    if (isEnglish) {
        data = DroiteEn;
    }


    return (
        <div id="droite">
            <section id="about">
                <h3>
                    {data.aboutHeader}
                </h3>
                <p>
                    {data.aboutDescription}
                </p>
            </section>
            <section id="Experiences">
                <h3>
                    {data.experienceHeader}
                </h3>
                <ListCard list={data.experienceList} />
            </section>



            <section id="Projets">
                <h3>
                    {data.projectsHeader}
                </h3>
                <ListCard list={data.projectsList} />
            </section>

            <section id="Formation">
                <h3>
                    {data.formationHeader}
                </h3>
                <ListCard list={data.formationList} />
            </section>

            <section id="Contact">
                <h3>
                    {data.contactHeader}
                </h3>
                <ListCard list={data.contactList} />
            </section>

        </div>
    )
}