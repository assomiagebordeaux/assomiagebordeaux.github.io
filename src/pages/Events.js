import React, { Component } from 'react';

import {Tuile} from '../modules/Tuile';

import '../design/pages/events.css'

class Events extends Component {
    render() {
        return(
            <div class="page-events">
                <div class="page-events-title">Events</div>
                <div class="page-events-subtitle">Prochain event</div>
                <Tuile 
                display="true"
                type="event"
                typeEvent="afterwork"
                title="Afterwork AMB x JMC"
                lieu="Carnaval Café"
                date="mercredi 9 septembre 2020"
                description="Venez découvrir les deux assos de la formation MIAGE : 
                l'AMB, le Bureau des Elèves et JMC, la Junior-Entreprise."
                button1Color="bleuAMB"
                button1Label="En savoir plus"
                button1Link="/events/aw-amc-jmc"
                />
                <div class="page-events-subtitle">Events à suivre</div>
                <Tuile 
                display="true"
                type="event"
                typeEvent="afterwork"
                title="Afterwork Parrainnage"
                lieu="Lieu à venir..."
                date="mercredi 16 septembre 2020"
                description="Une soirée placée sous le signe des parrains. 
                A vous de le débusquer !"
                button1Color="grey"
                button1Label="Infos à venir"
                button1Link="/events/aw-16092020"
                isLast="false"
                />
                <Tuile 
                display="true"
                type="event"
                typeEvent="afterwork"
                title="Afterwork"
                lieu="Lieu à venir..."
                date="mercredi 23 septembre 2020"
                description="Description à venir..."
                button1Color="grey"
                button1Label="Infos à venir"
                button1Link="/events/aw-16092020"
                isLast="true"
                />
                <Tuile 
                display="true"
                type="event"
                typeEvent="unspecified"
                title="WEI 2020"
                lieu="Lieu à venir..."
                date="du 3 au 4 octobre 2020"
                description="Le WEI est bien maintenu, 
                mais la vraie question est : quel sera le thème cette année ?"
                button1Color="grey"
                button1Label="Infos à venir"
                button1Link="/events/wei-2020"
                isLast="true"
                />
                {/* <div class="page-events-subtitle">Events passés</div> */}
            </div>
        );
    }
}

export default Events