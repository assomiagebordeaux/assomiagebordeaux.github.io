import React, { Component } from 'react';

import '../design/pages/accueil.css'

import {Tuile} from '../modules/Tuile';

import MoisIntegration from '../images/moisAfterwork.jpg'
import Partenariats from '../images/partenariats.jpg'

class Accueil extends Component {
    render() {
        return(
            <div className="page-accueil">
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
                imgurl={Partenariats}
                linkGlobal="/partenariats"
                title="Partenariats"
                description="Découvrez tous les partenaires de l'AMB"
                date=""
                numberButtons="1"
                buttonColor="white"
                buttonLabel="En savoir plus"
                buttonLink="/partenariats"
                last="fast"
                />
            </div>
        );
    }
}

export default Accueil