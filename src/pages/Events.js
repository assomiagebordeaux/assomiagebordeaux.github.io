import React, { Component } from 'react';

import {Tuile} from '../modules/Tuile';

import EventsIllustration from '../images/events.jpg';
import WES from '../images/lamongie.jpg';

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
                    {/* <div class="page-events-noevents">
                        De nouveaux events arrivent...
                    </div> */}
                {/* <div class="page-events-subtitle">Prochain event</div> */}
                {/* <div class="page-events-subtitle">Events à suivre</div> */}
                <div class="page-events-subtitle">Events passés</div>
                <Tuile 
                display="true"
                type="event"
                status="over"
                image={WES}
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
                />
                </div>
            </div>
        );
    }
}

export default Events