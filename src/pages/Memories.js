import React, { Component } from 'react';

import {Tuile} from '../modules/Tuile';

import MemoriesIllustration from '../images/memories.jpg';

import WEI20192020 from '../images/memories/2019-2020-wei/WEI20192020_1.jpg';

import '../design/pages/memories.css'

class Memories extends Component {
    
    render() {

        return(
            <div class="page-memories">
                <div style ={{ backgroundImage: "url("+MemoriesIllustration+")" }}  class="page-memories-illustration">
                    <div class="page-memories-illustration-infos">
                        <div class="page-memories-illustration-infos-titre">Memories</div>
                        <div class="page-memories-illustration-infos-subtitle">Les souvenirs miagistes d'une décennie</div>
                    </div>
                </div>
                <div class="page-memories-content">
                    <div class="page-memories-content-margin">
                        <div class="page-memories-content-title">WEIs</div>
                        <Tuile
                        display="true" 
                        type="memories"
                        img1={WEI20192020}
                        titreGauche="Captain Croch'WEI"
                        titreDroite="2019"
                        description="Embarquez moussaillons, fiers z'et hardis, avec le Captain Croch'WEI pour un week-end explosif !"
                        lien="https://photos.app.goo.gl/c7NTEZ9FSbMVmkke6"
                        siNouveau="true"
                        siDateDeDispo="false"
                        jourDispo="3"
                        moisDispo="octobre"
                        anneeDispo="2020"
                        />
                    </div> 
                    <div id ="page-memories-conditions" class="page-memories-conditions">
                        Toutes les photos sont stockées sur Google Photos de manière sécurisée. 
                        Vous pouvez télécharger l'application Google Photos pour <a href="https://apps.apple.com/fr/app/google-photos/id962194608" target="_blank" rel="noopener noreferrer nofollow">iOS</a> et <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.photos&hl=fr" target="_blank" rel="noopener noreferrer nofollow">Android</a>. 
                        Si vous souhaitez signaler une ou plusieurs photos pour qu'elle(s) soi(en)t retirée(s), veuillez nous communiquer votre nom, prénom, la capture d'écran de la ou des dite(s) photo(s), 
                        ainsi qu'un paragraphe explicatif. Envoyez le tout à cette adresse mail : asso@miagebordeaux.fr 
                        ou en cliquant <a href="mailto:asso@miagebordeaux.fr">ici</a>.
                    </div>  
                </div>
            </div>
        );
    }
}

export default Memories