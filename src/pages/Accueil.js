import React, { Component } from 'react';

import '../design/pages/accueil.css'

import {Tuile} from '../modules/Tuile';

import MemoriesWEI2019 from '../images/tuileMemories.jpg'
import Adhesion from '../images/adhesion.jpg'
import Parrainage from '../images/parrainage.jpg'
import Sweat2021 from '../images/Sweat2021.png'
import Sweats from '../images/shop/Pulls.png'
import SmoothMemories from '../images/SmoothMemories2.png'
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
                backgroundColor="grey"
                titre1="LET'S GIVE 'EM AMB !"
                titre1FontFamily="StraightOuttaAMB"
                titre2="Le sweat de promo 2020/2021 est disponible !"
                titre3="Noir ou bleu marine ou les deux ! Prolongation jusqu'au 09/11 à 18h."
                nombreBoutons="2"
                bouton1Type="interne"
                bouton1Label="En savoir plus"
                bouton1Link="/shop"
                bouton2Type="externe"
                bouton2Label="Acheter"
                bouton2Link="https://www.helloasso.com/associations/asso-miage-bordeaux/evenements/pull-de-promo-de-la-miage-de-bordeaux-edition-2020-2021"
                siImage="true"
                image={Sweats}
                siMarginBottom="true"
                />
                <Tuile
                display="true"
                type="smooth"
                backgroundColor="black"
                titre1="MOVEMBER"
                titre1FontFamily="Movember"
                titre2="Participez à la campagne 2020 pendant le confinement !"
                titre3="Se raser la moustache le 1er ? Check. La laisser pousser tout novembre ? Check."
                nombreBoutons="2"
                bouton1Type="externe"
                bouton1Label="En savoir plus"
                bouton1Link="https://fr.movember.com"
                bouton2Type="externe"
                bouton2Label="Faire un don"
                bouton2Link="https://fr.movember.com/donate/details?memberId=86"
                siImage="true"
                image={SmoothMovember}
                siMarginBottom="true"
                />
                <Tuile
                display="true"
                type="smooth"
                backgroundColor="grey"
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
                siMarginBottom="true"
                />
                <Tuile
                display="true"
                type="smooth"
                backgroundColor="black"
                titre1="Memories are coming..."
                titre1FontFamily="Memories"
                titre2="Soirée d'intégration, WES..."
                titre3="Les albums 2019/2020 reviennent pendant le confinement !"
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