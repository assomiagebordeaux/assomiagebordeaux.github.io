import React, { Component } from 'react';

import '../design/pages/accueil.css'

import {Tuile} from '../modules/Tuile';

import SmoothMemories from '../images/SmoothMemories.png'
import SmoothMemories20182019 from '../images/SmoothMemories20182019.png';
import SmoothMemoriesChristmasParty2019 from '../images/SmoothMemoriesChristmasParty2019.png';

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
                titre1="2018/2019"
                titre1FontFamily="Memories"
                titre2="Les Memories sont disponibles !"
                titre3="Soirée d'intégration, FarWEI'st et Gala MIAGE !"
                nombreBoutons="1"
                bouton1Type="interne"
                bouton1Label="Voir les Memories"
                bouton1Link="/memories"
                siImage="true"
                image={SmoothMemories20182019}
                siMarginBottom="false"
                />
                <Tuile
                display="true"
                type="smooth"
                typeSmooth="simple"
                backgroundColor="black"
                countdown="false"
                titre1="l'amb vous souhaite de bonnes fêtes de fin d'année !"
                titre1FontFamily="Memories"
                titre2=""
                titre3=""
                nombreBoutons="0"
                bouton1Type="interne"
                bouton1Label="Voir les Memories"
                bouton1Link="/memories"
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
                titre1="2019/2020"
                titre1FontFamily="Memories"
                titre2="La Christmas Party est disponible !"
                titre3="feat. ACBX, AEBBCB, Ambigu and M-TECH !"
                nombreBoutons="1"
                bouton1Type="interne"
                bouton1Label="Voir les Memories"
                bouton1Link="/memories"
                siImage="true"
                image={SmoothMemoriesChristmasParty2019}
                siMarginBottom="false"
                />
                <Tuile
                display="true"
                type="smooth"
                typeSmooth="simple"
                backgroundColor="black"
                countdown="false"
                titre1="des nouveautés arrivent en janvier !"
                titre1FontFamily="Memories"
                titre2=""
                titre3=""
                nombreBoutons="0"
                bouton1Type="interne"
                bouton1Label="Voir les Memories"
                bouton1Link="/memories"
                siImage="false"
                image=""
                siMarginBottom="false"
                />
                <Tuile
                display="false"
                type="smooth"
                typeSmooth="simple"
                backgroundColor="black"
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