import React, { Component } from 'react';

import '../design/pages/accueil.css'

import {Tuile} from '../modules/Tuile';

import SmoothMemories from '../images/SmoothMemories.png'
import WEI from '../images/wei20212022.png';
import NuitEtudiant from '../images/NuitEtudiant.png';
import AfterworkAlumnis from '../images/AW-1509.png';
import MemoriesWEI2021 from '../images/WEI2021.png';
import WEI2021_Aftermovie from '../images/WEI_Aftermovie.png'

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
                uptitle=""
                titre1=""
                titre1FontFamily="Memories"
                titre2=""
                titre2FontFamily="GothamBook"
                titre3=""
                nombreBoutons="1"
                bouton1Type="externe"
                bouton1Label="Je visionne !"
                bouton1Link="https://photos.app.goo.gl/MrU77HSRaAWZzzzB8"
                siImage="true"
                image={WEI2021_Aftermovie}
                siMarginBottom="false"
                />
                <Tuile
                display="true"
                type="smooth"
                typeSmooth="simple"
                backgroundColor="black"
                countdown="false"
                uptitle=""
                titre1="Memories"
                titre1FontFamily="Memories"
                titre2="Les souvenirs épiques du MIAGE Infinity WEI !!"
                titre2FontFamily="GothamBook"
                titre3=""
                nombreBoutons="1"
                bouton1Type="interne"
                bouton1Label="J'embarque !"
                bouton1Link="/memories"
                siImage="true"
                image={MemoriesWEI2021}
                siMarginBottom="false"
                />
                <Tuile
                display="true"
                type="smooth"
                typeSmooth="simple"
                backgroundColor="black"
                countdown="false"
                uptitle=""
                titre1="Deviens adhérent !"
                titre1FontFamily="Memories"
                titre2="5€. Une carte. Des events toute l'année."
                titre2FontFamily="GothamBook"
                titre3=""
                nombreBoutons="2"
                bouton1Type="interne"
                bouton1Label="En savoir plus"
                bouton1Link="/association/adhesion"
                bouton2Type="externe"
                bouton2Label="Adhérer"
                bouton2Link="https://www.helloasso.com/associations/asso-miage-bordeaux/adhesions/adhesion-adhesion-asso-miage-bordeaux-2021-2022"
                siImage="false"
                image={SmoothMemories}
                siMarginBottom="false"
                />
            </div>
        );
    }
}

export default Accueil