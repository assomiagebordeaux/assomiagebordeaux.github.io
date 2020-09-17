import React, { Component } from 'react';

import '../design/pages/accueil.css'

import {Tuile} from '../modules/Tuile';

import MoisIntegration from '../images/moisAfterwork.jpg'
import Adhesion from '../images/adhesion.jpg'
import WEI from '../images/wei-2020.jpg'

const WEIannulation = "Suite aux récentes mesures annoncées par la préfète de Gironde, c'est avec grand regret que l'Asso MIAGE Bordeaux vous annonce l'annulation du Week-end d'Intégration 2020 : le Wei'cingétorix, initialement prévu les 3 et 4 octobre 2020.";

class Accueil extends Component {
    render() {
        return(
            <div className="page-accueil">
                <Tuile 
                display="true"
                type="info"
                texte={WEIannulation}
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
                imgurl={WEI}
                linkGlobal=""
                title="WEI'cingétorix"
                description="Annulé"
                date=""
                typeBouton="interne"
                numberButtons="1"
                buttonColor="white"
                buttonLabel="Lire le communiqué"
                buttonLink="/communiques/weicingetorix"
                last=""
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