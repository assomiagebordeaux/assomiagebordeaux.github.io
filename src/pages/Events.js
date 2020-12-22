import React, { Component } from 'react';

import {Tuile} from '../modules/Tuile';

import EventsIllustration from '../images/events.jpg';
import WES from '../images/lamongie.jpg';
import AmongTheMiagistes from '../images/AmongUsAMB.png';
import Afterwork from'../images/Afterwork.jpg';
import Parrainage from '../images/parrainage.jpg';

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
                />
                </div>
            </div>
        );
    }
}

export default Events