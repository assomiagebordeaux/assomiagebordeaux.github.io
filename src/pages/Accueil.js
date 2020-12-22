import React, { Component } from 'react';

import '../design/pages/accueil.css'

import {Tuile} from '../modules/Tuile';

import SmoothMemories from '../images/SmoothMemories.png'
import SmoothMovember from '../images/movember.png'
import SmoothAmongUs from '../images/AmongUsAMB3.png'
import CalendarAmongUs from '../icons/AmongTheMiagistes.ics'

class Accueil extends Component {
    render() {
        return(
            <div className="page-accueil">
                <Tuile
                display="true"
                type="smooth"
                typeSmooth="simple"
                backgroundColor="black"
                countdown="false"
                titre1="Memories"
                titre1FontFamily="Memories"
                titre2="Soirée d'intégration 2019 disponible !"
                titre3=""
                nombreBoutons="1"
                bouton1Type="interne"
                bouton1Label="Voir les Memories"
                bouton1Link="/memories"
                siImage="true"
                image={SmoothMemories}
                siMarginBottom="false"
                />
                <Tuile
                display="true"
                type="smooth"
                typeSmooth="simple"
                backgroundColor="grey"
                countdown="false"
                titre1="Adhérer à l'AMB"
                titre1FontFamily=""
                titre2="De nombreux events de prévu en 2021 !"
                titre3="Profitez de tous les avantages AMB et d'un Pass Citicks à 1€50 (au lieu de 5€)."
                nombreBoutons="2"
                bouton1Type="interne"
                bouton1Label="En savoir plus"
                bouton1Link="/association/adhesion"
                bouton2Type="externe"
                bouton2Label="Adhérer"
                bouton2Link="https://www.helloasso.com/associations/asso-miage-bordeaux/adhesions/adhesion-asso-miage-bordeaux-2020-2021"
                siImage="false"
                image=""
                siMarginBottom="false"
                />
            </div>
        );
    }
}

export default Accueil