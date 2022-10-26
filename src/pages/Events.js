import React, {Component} from 'react';

import {Tuile} from '../modules/Tuile';

import EventsIllustration from '../images/events.jpg';
import Afterwork from '../images/AW-0809.png';
import AfterworkAlumnis from '../images/AW-1509.png';
import WEI from '../images/wei20222023.png';

import '../design/pages/events.css'

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
                    <div class="page-events-subtitle">Events passés</div>
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
                    <Tuile
                        display="true"
                        type="event"
                        status="over"
                        imageEvent={AfterworkAlumnis}
                        typeEvent=""
                        title="Afterwork Alumni by Alumni MIAGE Bordeaux - Septembre"
                        lieu="HMS Victory"
                        date="21 septembre 2022"
                        description="Alors, prêts à rencontrer des Miagistes diplômés depuis quelques années ?"
                        typeBouton="externe"
                        button1Color="bleuAMB"
                        button1Label="En savoir plus"
                        button1Link=""
                        isLast="false"
                    />
                    <Tuile
                        display="true"
                        type="event"
                        status="over"
                        imageEvent={Afterwork}
                        typeEvent=""
                        title="Afterwork de rentrée AMB"
                        lieu="STARFISH"
                        date="08 septembre 2022"
                        description="Si tu es un ancien, viens retrouver tes copains autour d’une bière bien fraîche, si tu es un nouveau, viens nous rencontrer autour d’un verre. On te présentera la MIAGE de Bordeaux, ainsi que les deux Assos qui la composent."
                        typeBouton="interne"
                        button1Color="bleuAMB"
                        button1Label="En savoir plus"
                        button1Link="/events/afterwork-de-rentree-amb-jmc"
                        isLast="false"
                    />
                </div>
            </div>
        );
    }
}

export default Events