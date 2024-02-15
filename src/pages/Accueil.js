import React, {Component} from 'react';

import '../assets/design/pages/accueil.css'

import {Tuile} from '../modules/utilitaires/Tuile';

import SmoothMemories from '../assets/images/SmoothMemories.png'
import MemoriesWEI2022 from '../assets/images/WEI2022.png';
import WEI2022_Aftermovie from '../assets/images/WEI_Aftermovie.png'

class Accueil extends Component {
    render() {

        return (
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
                    bouton1Link="https://photos.app.goo.gl/ivXVSUFXkNtAV4qt6"
                    siImage="true"
                    image={WEI2022_Aftermovie}
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
                    titre2="Les souvenirs fabuleux du MIAGE WEI-LANTA !!"
                    titre2FontFamily="GothamBook"
                    titre3=""
                    nombreBoutons="1"
                    bouton1Type="interne"
                    bouton1Label="J'embarque !"
                    bouton1Link="/memories"
                    siImage="true"
                    image={MemoriesWEI2022}
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
                    bouton2Link="https://www.helloasso.com/associations/asso-miage-bordeaux/adhesions/adhesion-asso-miage-bordeaux-2022-2023"
                    siImage="false"
                    image={SmoothMemories}
                    siMarginBottom="false"
                />
            </div>
        );
    }
}

export default Accueil