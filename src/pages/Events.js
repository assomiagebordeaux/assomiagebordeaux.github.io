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
                typeEvent="unspecified"
                title="L'enquête des parrains"
                lieu="A22 - Amphi Darwin"
                date="mercredi 7 octobre 2020"
                description=""
                typeBouton="interne"
                button1Color="bleuAMB"
                button1Label="En savoir plus"
                button1Link="/events/parrainage"
                isLast="false"
                />
                {/* <div class="page-events-subtitle">Events à suivre</div> */}
                <div class="page-events-subtitle">Events passés</div>
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
        );
    }
}

export default Events