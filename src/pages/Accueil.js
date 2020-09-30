import React, { Component } from 'react';

import '../design/pages/accueil.css'

import {Tuile} from '../modules/Tuile';

import MoisIntegration from '../images/moisAfterwork.jpg'
import Adhesion from '../images/adhesion.jpg'
import Parrainage from '../images/parrainage.jpg'

const WEIannulation = "Le Week-end d'Intégration 2020 : le Wei'cingétorix, initialement prévu les 3 et 4 octobre 2020, est annulé.";

class Accueil extends Component {
    render() {
        return(
            <div className="page-accueil">
                <Tuile 
                display="true"
                type="info"
                typeInfo="alerte"
                texte={WEIannulation}
                siBouton="true"
                typeBouton="interne"
                buttonColor="white"
                buttonLink="/communiques/weicingetorix"
                buttonLabel="Lire le communiqué"
                />
                <Tuile 
                display="true"
                type="mix"
                typeMix="large"
                status="online"
                imgurl={Parrainage}
                linkGlobal=""
                title="L'enquête des parrains"
                description="Un meurtre a été commis, qui est le coupable ?"
                date="Début des investigations le 07 octobre !"
                typeBouton="interne"
                numberButtons="1"
                buttonColor="white"
                buttonLabel="En savoir plus"
                buttonLink="/events/parrainage"
                />
                <Tuile 
                display="true"
                type="mix"
                typeMix="large"
                status="online"
                imgurl={MoisIntegration}
                linkGlobal="/events"
                title="Mois d'Intégration"
                description="Le mois à ne pas manquer !"
                date="Tout le mois de Septembre"
                typeBouton="interne"
                numberButtons="1"
                buttonColor="white"
                buttonLabel="En savoir plus"
                buttonLink="/events"
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