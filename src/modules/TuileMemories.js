import React from 'react';

import '../design/commun/tuileMemories.css';
import { Link } from 'react-router-dom';

import {Button} from './Button'

export function TuileMemories(props) {

    const dateDispoAvecJour = "Disponible le "+props.jourDispo+" "+props.moisDispo+" "+props.anneeDispo+".";
    const dateDispoSansJour = "Disponible en "+props.moisDispo+" "+props.anneeDispo+".";

    if(props.siDateDeDispo === "true") {
        return(
            <div class="module-tuileMemories">
            <div style ={{ backgroundImage: "url("+props.img1+")" }} class="module-tuileMemories-image">
            </div>
            <div class="module-tuileMemories-titres">
                <div class="module-tuileMemories-titreGauche">
                    {props.titreGauche}
                </div>
                <div class="module-tuileMemories-titreDroite">
                    {props.titreDroite}
                </div>
            </div>
            <div class="module-tuilesMemories-dateDispo">
            { props.jourDispo === "" 
                ? 
                dateDispoSansJour
                :  
                dateDispoAvecJour
                }
            </div>
        </div>
        );
    } else {
        return(
            <div class="module-tuileMemories">
            <a href={props.lien} onclick="window.open(this.href);return false" rel="noopener noreferrer nofollow" style={{ textDecoration: 'none' }}>
            <div style ={{ backgroundImage: "url("+props.img1+")" }} class="module-tuileMemories-image">
                { props.siNouveau === "true" 
                ? 
                <div class="module-tuileMemories-nouveau">Nouveau</div>
                :  
                <div></div>
                }
            </div>
            </a>
            <div class="module-tuileMemories-titres">
                <div class="module-tuileMemories-titreGauche">
                    {props.titreGauche}
                </div>
                <div class="module-tuileMemories-titreDroite">
                    {props.titreDroite}
                </div>
            </div>
            <div class="module-tuilesMemories-description">
                {props.description}
            </div>
        </div>
        );
    }
}

export default TuileMemories;