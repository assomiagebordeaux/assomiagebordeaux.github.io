import React, { Component } from 'react';

import {Tuile} from '../modules/Tuile';

import EventsIllustration from '../images/events.jpg';
import Afterwork from '../images/AW-0809.png';
import AfterworkAlumnis from '../images/AW-1509.png';
import WEI from '../images/wei20212022.png';
import NuitEtudiant from '../images/NuitEtudiant.png';

import '../design/pages/events.css'

class Events extends Component {
    render() {
        return(
            <div class="page-events">
                <div style ={{ backgroundImage: "url("+EventsIllustration+")" }}  class="page-events-illustration">
                    <div class="page-events-illustration-infos">
                        <div class="page-events-illustration-infos-titre">Events</div>
                        <div class="page-events-illustration-infos-subtitle">Et pas qu'au 31 du mois d'août !</div>
                    </div>
                </div>
                <div class="page-events-contenu">
                    {/* <div class="page-events-beback">
                        Rendez-vous en septembre...
                    </div> */}
                {/* <div class="page-events-subtitle">Prochain event</div>

                <div class="page-events-subtitle">Events à venir</div> */}

                <div class="page-events-subtitle">Events passés</div>
                <Tuile 
                display="true"
                type="event"
                status="over"
                imageEvent={WEI}
                typeEvent=""
                title="Week-end d'intégration - MIAGE Infinity WEI"
                lieu="Domaine de Peyreguilhot"
                date="02 - 03 octobre 2021"
                description="L'évènement de cette rentrée à ne surtout pas louper !"
                typeBouton="externe"
                button1Color="bleuAMB"
                button1Label="En savoir plus"
                button1Link="https://www.facebook.com/events/s/miage-infinity-wei-week-end-in/372457881137438/"
                isLast="false"
                />
                <Tuile 
                display="true"
                type="event"
                status="over"
                imageEvent={NuitEtudiant}
                typeEvent=""
                title="La nuit de l'étudiant"
                lieu="Bordeaux"
                date="jeudi 23 septembre 2021"
                description="La plus grosse soirée d’intégration de l'année est de retour ! La SEULE qui est consacrée aux étudiants de toutes les Écoles et Universités de France !"
                typeBouton="externe"
                button1Color="bleuAMB"
                button1Label="En savoir plus | M'inscrire"
                button1Link="https://littl.fr/NDL-Bordeaux"
                isLast="false"
                />
                <Tuile 
                display="true"
                type="event"
                status="over"
                imageEvent={AfterworkAlumnis}
                typeEvent=""
                title="Afterwork Alumni by Alumni MIAGE Bordeaux"
                lieu="HMS Victory"
                date="mercredi 15 septembre 2021"
                description="Alors, prêts à rencontrer des Miagistes diplômés depuis quelques années ?"
                typeBouton="externe"
                button1Color="bleuAMB"
                button1Label="En savoir plus"
                button1Link="https://facebook.com/events/s/afterwork-alumni-hms/952161438694609/"
                isLast="false"
                />
                <Tuile 
                display="true"
                type="event"
                status="over"
                imageEvent={Afterwork}
                typeEvent=""
                title="Afterwork de rentrée AMB x JMC"
                lieu="Carnaval Café"
                date="mercredi 08 septembre 2021"
                description="Venez découvrir, autour d'un verre, les deux assos de la formation MIAGE : 
                l'AMB, le Bureau des Elèves et JMC, la Junior-Entreprise."
                typeBouton="interne"
                button1Color="bleuAMB"
                button1Label="En savoir plus"
                button1Link="/events/afterwork-de-rentree-amb-jmc"
                isLast="false"
                />
                {/* <Tuile 
                display="true"
                type="event"
                status="over"
                imageEvent={AmongTheMiagistes}
                typeEvent=""
                title="Among The Miagistes !"
                lieu="Discord de l'AMB"
                date="mercredi 25 novembre 2020"
                description="Rejoignez les miagistes pour débusquer les imposteurs lors de la soirée de lancement du discord de l'AMB !"
                typeBouton="desactive"
                button1Color="bleuAMB"
                button1Label="Discord à venir..."
                button1Link=""
                isLast="false"
                />
                <Tuile 
                display="true"
                type="event"
                status="over"
                imageEvent={Parrainage}
                typeEvent="unspecified"
                title="L'enquête des parrains"
                lieu="A22 - Amphi Darwin"
                date="mercredi 7 octobre 2020"
                description="Un meurtre a été commis, les indices et messages codés se multiplient, saurez-vous trouver le tueur ?"
                typeBouton="interne"
                button1Color="bleuAMB"
                button1Label="En savoir plus"
                button1Link="/events/parrainage"
                isLast="false"
                />
                <Tuile 
                display="true"
                type="event"
                status="over"
                imageEvent={Afterwork}
                typeEvent="afterwork"
                title="Afterwork AMB x JMC"
                lieu="Carnaval Café"
                date="mercredi 9 septembre 2020"
                description="Venez découvrir les deux assos de la formation MIAGE : 
                l'AMB, le Bureau des Elèves et JMC, la Junior-Entreprise."
                typeBouton="interne"
                button1Color="bleuAMB"
                button1Label="En savoir plus"
                button1Link="/events/aw-amc-jmc"
                isLast="true"
                /> */}
                </div>
            </div>
        );
    }
}

export default Events