import React from 'react';

import '../../assets/design/commun/tuileMemories.css';
// import {Link} from 'react-router-dom';

// import {Button} from './Button'

export function TuileMemories(props) {

    var numberImage = Math.floor(Math.random() * 5);
    console.log("number : " + numberImage);
    let image = "url(" + props.img1 + ")";

    var marginLeftTuileMemories = '0px';
    if (props.siPremierListe === "false") {
        marginLeftTuileMemories = '20px';
    }

    switch (numberImage) {
        case 0:
            image = "url(" + props.img1 + ")";
            break;
        case 1:
            if (props.nombreImages >= 2) {
                image = "url(" + props.img2 + ")";
            }
            break;
        case 2:
            if (props.nombreImages >= 3) {
                image = "url(" + props.img3 + ")";
            }
            break;
        case 3:
            if (props.nombreImages >= 4) {
                image = "url(" + props.img4 + ")";
            }
            break;
        case 4:
            if (props.nombreImages == 5) {
                image = "url(" + props.img5 + ")";
            }
            break;
        default:
            image = "url(" + props.img1 + ")";
            break;
    }

    // const dateDispoAvecJour = "Disponible le " + props.jourDispo + " " + props.moisDispo + " " + props.anneeDispo + ".";
    // const dateDispoSansJour = "Disponible en " + props.moisDispo + " " + props.anneeDispo + ".";

    if (props.siDateDeDispo === "true") {
        // return (
        //     <div class="module-tuileMemories" style={{marginLeft: marginLeftTuileMemories}}>
        //         <div style={{backgroundImage: image}} class="module-tuileMemories-image">
        //         </div>
        //         <div class="module-tuileMemories-titres">
        //             <div class="module-tuileMemories-titreGauche">
        //                 {props.titreGauche}
        //             </div>
        //             <div class="module-tuileMemories-titreDroite">
        //                 {props.titreDroite}
        //             </div>
        //         </div>
        //         <div class="module-tuilesMemories-dateDispo">
        //             {props.jourDispo === ""
        //                 ?
        //                 dateDispoSansJour
        //                 :
        //                 dateDispoAvecJour
        //             }
        //         </div>
        //     </div>
        // );
    } else {
        return (
            <div class="module-tuileMemories" style={{marginLeft: marginLeftTuileMemories}}>
                <a href={props.lien} target="_blank" rel="noopener noreferrer nofollow"
                   style={{textDecoration: 'none'}}>
                    <div style={{backgroundImage: image}} class="module-tuileMemories-image">
                        {props.siNouveau === "true"
                            ?
                            <div class="module-tuileMemories-nouveau">Nouveau</div>
                            :
                            <div></div>
                        }
                    </div>
                </a>
                <div class="module-tuileMemories-titre">
                {/* <div class="module-tuileMemories-titreGauche"> */}
                    {props.titreGauche}
                </div>

                <div class="module-tuileMemories-dateMemories">
                    {props.dateMemories}
                </div>
                {/* </div> */}
        
                <div class="module-tuilesMemories-description">
                    {props.description}
                </div>
            </div>
        );
    }
}

export default TuileMemories;