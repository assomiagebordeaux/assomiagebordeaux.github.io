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
                titre3="Noir ou bleu marine ou les deux ! Jusqu'au 2/11 à 18h."
                nombreBoutons="1"
                bouton1Label="Je le veux !"
                bouton1Link="/shop"
                siImage="true"
                image={Sweats}
                siDernier="false"
                />
                <Tuile
                display="true"
                type="smooth"
                backgroundColor="grey"
                titre1="Adhérer à l'AMB"
                titre1FontFamily=""
                titre2="Pour bien commencer cette nouvelle année !"
                titre3="Profitez d'un Pass Citicks au rabais et de tous les avantages AMB !"
                nombreBoutons="1"
                bouton1Label="En savoir plus"
                bouton1Link="/association/adhesion"
                siImage="false"
                image=""
                siDernier="false"
                />
                <Tuile
                display="true"
                type="smooth"
                backgroundColor="black"
                titre1="Memories"
                titre1FontFamily="Memories"
                titre2="Le Captain Croch'WEI est disponible !"
                titre3="Les souvenirs miagistes d'une décennie."
                nombreBoutons="1"
                bouton1Label="Accéder aux photos !"
                bouton1Link="/memories"
                siImage="true"
                image={SmoothMemories}
                siDernier="true"
                />
            </div>
        );
    }
}

export default Accueil