import React, { Component } from 'react';

import '../design/pages/accueil.css'

import {Tuile} from '../modules/Tuile';

import MemoriesWEI2019 from '../images/tuileMemories.jpg'
import Adhesion from '../images/adhesion.jpg'
import Parrainage from '../images/parrainage.jpg'
import Sweat2021 from '../images/Sweat2021.png'
import Sweats from '../images/shop/Pulls.png'
import SmoothMemories from '../images/SmoothMemories.png'
import SmoothAdhesion from '../images/SmoothAdhesion.jpg'
import SmoothMovember from '../images/movember.png'

const texteTuile = "Suite à l'annulation du WEI 2020 : le Wei'cingétorix, l'AMB vous propose de vous (re)plonger dans le WEI de l'année dernière et de son hôte : le Captain Croch'WEI !";

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
                titre1="MOVEMBER"
                titre1FontFamily="Movember"
                titre2="Participez à la campagne 2020 pendant le confinement !"
                titre3="Laisser pousser sa moustache tout novembre ? Check !"
                nombreBoutons="2"
                bouton1Type="externe"
                bouton1Label="En savoir plus"
                bouton1Link="https://fr.movember.com"
                bouton2Type="externe"
                bouton2Label="Faire un don"
                bouton2Link="https://fr.movember.com/donate/details?memberId=86"
                siImage="true"
                image={SmoothMovember}
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
                titre2="Pour bien commencer cette nouvelle année !"
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
            </div>
        );
    }
}

export default Accueil