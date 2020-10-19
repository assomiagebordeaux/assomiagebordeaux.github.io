import React, { Component } from 'react';

import '../design/pages/accueil.css'

import {Tuile} from '../modules/Tuile';

import MemoriesWEI2019 from '../images/tuileMemories.jpg'
import Adhesion from '../images/adhesion.jpg'
import Parrainage from '../images/parrainage.jpg'
import Sweat2021 from '../images/Sweat2021.png'

const texteTuile = "Suite à l'annulation du WEI 2020 : le Wei'cingétorix, l'AMB vous propose de vous (re)plonger dans le WEI de l'année dernière et de son hôte : le Captain Croch'WEI !";

class Accueil extends Component {
    render() {
        return(
            <div className="page-accueil">
                <Tuile 
                display="true"
                type="mix"
                typeMix="large"
                status="online"
                imgurl={Sweat2021}
                linkGlobal=""
                title="Let's give 'em AMB !"
                description="Le sweat de promo 2020/2021 est disponible !"
                date="Commandes ouvertes jusqu'au 2 novembre à 18h !"
                typeBouton="interne"
                numberButtons="1"
                buttonColor="white"
                buttonLabel="Je le veux !"
                buttonLink="/shop"
                last="fast"
                />
                <Tuile 
                display="true"
                type="mix"
                typeMix="large"
                status="online"
                imgurl={MemoriesWEI2019}
                linkGlobal=""
                title="Memories"
                description="Les souvenirs miagistes d'une décennie."
                date="Captain Croch'WEI disponible !"
                typeBouton="interne"
                numberButtons="1"
                buttonColor="white"
                buttonLabel="En savoir plus"
                buttonLink="/memories"
                last="fast"
                />
                <Tuile 
                display="true"
                type="mix"
                typeMix="large"
                status="online"
                imgurl={Adhesion}
                linkGlobal=""
                title="Adhérer à l'AMB"
                description="Une nouvelle année commence..."
                date="Adhésion au stand ou en ligne !"
                typeBouton="interne"
                numberButtons="1"
                buttonColor="white"
                buttonLabel="En savoir plus"
                buttonLink="/association/adhesion"
                last=""
                />
            </div>
        );
    }
}

export default Accueil