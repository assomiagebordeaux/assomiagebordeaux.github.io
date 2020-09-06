import React, { Component } from 'react';

import '../design/pages/accueil.css'

import {Tuile} from '../modules/Tuile';

import MoisIntegration from '../images/moisAfterwork.jpg'
import Adhesion from '../images/adhesion.jpg'
import WEI from '../images/wei.png'

class Accueil extends Component {
    render() {
        return(
            <div className="page-accueil">
                <Tuile 
                display="true"
                type="mix"
                typeMix="large"
                status="soon"
                imgurl={WEI}
                linkGlobal=""
                title="WEI'cingétorix"
                description="Ils sont fous ces miagistes !"
                date="Du 3 au 4 octobre 2020"
                numberButtons="1"
                buttonColor="white"
                buttonLabel="En savoir plus"
                buttonLink="/association/adhesion"
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