import React from 'react';

import '../../assets/design/commun/tuileEvent.css';

// import {Button} from './Button'

export function TuileEvent(props) {

    // const typeEvent = props.typeEvent;

    // var marginbottom = "0%";
    // if (props.isLast === "false") {
    //     marginbottom = "";
    // }

    // return(
    //     <div class="module-tuileEvent2">
    //         <div class="module-tuileEvent2-illustration">
    //             <img src={props.imageEvent} alt={props.title} />
    //         </div>
    //         <div class="module-tuileEvent2-infos">
    //             <div class="module-tuileEvent2-infos-ligne siProchainEvent">
    //                 Prochain event
    //             </div>
    //             <div class="module-tuileEvent2-infos-ligne nomEvent">
    //                 Among the Miagistes !
    //             </div>
    //             <div class="module-tuileEvent2-infos-ligne dateEvent">
    //                 Mercredi 25 novembre 2020
    //             </div>
    //             <div class="module-tuileEvent2-infos-ligne lieuEvent">
    //                 Discord de l'AMB
    //             </div>
    //             <div class="module-tuileEvent2-infos-ligne descriptionEvent">
    //                 Description
    //             </div>
    //             <div class="module-tuileEvent2-infos-boutons">

    //             </div>
    //         </div>
    //     </div>
    // );

    // return(
    //     <div class="module-tuileEvent module-tuileEvent-margin">
    //             { props.status === "over" 
    //             ? 
    //             <div class="module-tuileEvent-illustration module-tuileEvent-illustration-over">
    //                 <img src={props.imageEvent} alt={props.title} />
    //             </div>
    //             :  
    //             <div class="module-tuileEvent-illustration">
    //                  <img src={props.imageEvent} alt={props.title} />
    //             </div>
    //             }
    //             <div class="module-tuileEvent-infos">
    //                 <div class="module-tuileEvent-info-titre">
    //                     {props.title}
    //                 </div>
    //                 <div class="module-tuileEvent-info-lieu">
    //                     {props.lieu}
    //                 </div>
    //                 <div class="module-tuileEvent-info-date">
    //                     {props.date}
    //                 </div>
    //                 <div class="module-tuileEvent-info-description">
    //                     {props.description}
    //                 </div>
    //                 <div class="module-tuileEvent-info-buttons">
    //                 { props.status === "over" 
    //                 ?
    //                 <div></div> 
    //                 :  
    //                 <div class="module-tuileEvent-info-buttons-button1">
    //                     <Button
    //                     typeBouton={props.typeBouton} 
    //                     color={props.button1Color}
    //                     label={props.button1Label}
    //                     link={props.button1Link}
    //                     />
    //                 </div>
    //                 }
    //                 </div>
    //             </div>
    //         </div>
    // );

    return (
        <div class="module-tuileEvent module-tuileEvent-margin">
            {props.status === "over"
                ?
                <div class="module-tuileEvent-illustration module-tuileEvent-illustration-over">
                    <img src={props.imageEvent} alt={props.title}/>
                </div>
                :
                <div class="module-tuileEvent-illustration">
                    <img src={props.imageEvent} alt={props.title}/>
                </div>
            }
            <div class="module-tuileEvent-infos">
                <div class="module-tuileEvent-info-titre">
                    {props.title}
                </div>
                <div class="module-tuileEvent-info-lieu">
                    {props.lieu}
                </div>
                <div class="module-tuileEvent-info-date">
                    {props.date}
                </div>
                <div class="module-tuileEvent-info-description">
                    {props.description}
                </div>
                <div class="module-tuileEvent-info-buttons">
                    {props.status === "over"
                        ?
                        <div></div>
                        :
                        <div class="module-tuileEvent-info-buttons-button1">
                            <a 
                                href={props.lien} class="module-tuileEvent-info-buttons-button2"
                            >
                                En savoir plus
                            </a>
                        </div>
                    }
                </div>
            </div>
        </div>
    );

}

export default TuileEvent;