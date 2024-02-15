import React, {Component} from 'react';

import {Tuile} from '../../modules/utilitaires/Tuile';

import EventsIllustration from '../../assets/images/events.jpg';
import Moustache from '../../assets/images/moustache.png'
import WEI from '../../assets/images/wei20222023.png';

import '../../assets/design/pages/events.css'

class Events extends Component {
    render() {
        return (
            <div class="page-events">
                <div style={{backgroundImage: "url(" + EventsIllustration + ")"}} class="page-events-illustration">
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

                    <Tuile
                        display="true"
                        type="event"
                        status="" // over = gris + button disparait
                        imageEvent={Moustache}
                        // typeEvent="" // dégage
                        title="Movember M-TECH X AMB"
                        lieu="Joya - Talence"
                        date="24 novembre 2022 21h00"
                        description="Il va falloir ramener sa plus belle moustache !"
                        // typeBouton="externe" // A regrouper dans 1 des 4 tuiles
                        // button1Color="bleuAMB" // A regrouper dans 1 des 4 tuiles
                        // button1Label="En savoir plus" // A regrouper dans 1 des 4 tuiles
                        lien="https://fb.me/e/30sQJAY0o" // A regrouper dans 1 des 4 tuiles
                        // isLast="true" // dégage
                    />

                    <div class="page-events-subtitle">Events passés</div> /* A gérer dans le backend */
                    <Tuile
                        display="true"
                        type="event"
                        status="over"
                        imageEvent={WEI}
                        typeEvent=""
                        title="Week-end d'intégration - MIAGE WEI-LANTA"
                        lieu="Domaine de Peyreguilhot"
                        date="01 - 02 octobre 2022"
                        description="L'évènement de cette rentrée à ne surtout pas louper !"
                        typeBouton="externe"
                        button1Color="bleuAMB"
                        button1Label="En savoir plus"
                        button1Link=""
                        isLast="false"
                    />
                </div>
            </div>
        );
    }
}

export default Events