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
                title="Afterwork AMC x JMC"
                lieu="HMS Victory"
                date="mercredi 9 septembre 2020"
                description="Venez découvrir les deux assos de la formation MIAGE : 
                l'AMB, le Bureau des Elèves et JMC, la Junior-Entreprise."
                button1Color="bleuAMB"
                button1Label="En savoir plus"
                button1Link="/events/aw-09092020"
                />
                <div class="page-events-subtitle">Events à suivre</div>
                <Tuile 
                display="true"
                type="event"
                typeEvent="afterwork"
                title="Afterwork Parainnage"
                lieu="Carnaval Café"
                date="mercredi 16 septembre 2020"
                description="Une soirée placée sous le signe des parrains. 
                A vous de le débusquer !"
                button1Color="bleuAMB"
                button1Label="En savoir plus"
                button1Link="/events/aw-16092020"
                />
                <Tuile 
                display="true"
                type="event"
                typeEvent="afterwork"
                title="Afterwork Alumnis"
                lieu="St-Aubin"
                date="mercredi 23 septembre 2020"
                description="Rencontrez les diplômés de MIAGE Bordeaux, 
                que ce soit des M3 ou des M10 !"
                button1Color="grey"
                button1Label="Infos à venir"
                button1Link="/events/aw-16092020"
                isLast="true"
                />
                {/* <div class="page-events-subtitle">Events passés</div> */}
            </div>
        );
    }
}

export default Events