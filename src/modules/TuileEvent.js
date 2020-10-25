import React from 'react';

import '../design/commun/tuileEvent.css';

import {Button} from './Button'

export function TuileEvent(props) {

    const typeEvent = props.typeEvent;

    var marginbottom = "0%";
    if(props.isLast==="false"){
        marginbottom = "";
    }

    // return(
    //     <div class="module-tuileEvent">
    //         <div class="module-tuileEvent-illustration">
    //             <img src={props.image} alt={props.title} />
    //         </div>
    //         <div class="module-tuileEvent-infos">
    //             <div class="module-tuileEvent-infos-ligne">
    //                 <div class="module-tuileEvent-infos-date">
    //                     <div class="module-tuileEvent-infos-date-jourNom">
    //                     Lundi
    //                     </div>
    //                     <div class="module-tuileEvent-infos-date-jourNumero">
    //                     17
    //                     </div>
    //                     <div class="module-tuileEvent-infos-date-mois">
    //                     oct
    //                     </div>
    //                 </div>
    //                 <div class="module-tuileEvent-infos-titre">
    //                     Miage on Snow
    //                 </div>
    //             </div>
    //             <div class="module-tuileEvent-infos-ligne">
    //                 <div class="module-tuileEvent-infos-description">
    //                     Loremp ipseus
    //                 </div>
    //             </div>
    //             <div class="module-tuileEvent-infos-boutons">
    //                 lala
    //             </div>
    //         </div>
    //     </div>
    // );

    if(typeEvent === "afterwork") {
        return(
            <div class="module-tuileEvent module-tuileEvent-margin">
                { props.status === "over" 
                ? 
                <div class="module-tuileEvent-illustration module-tuileEvent-illustration-over">
                    <img src={require("../images/Afterwork.jpg")} alt={props.title} />
                </div>
                :  
                <div class="module-tuileEvent-illustration">
                    <img src={require("../images/Afterwork.jpg")} alt={props.title} />
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
                    { props.status === "over" 
                    ?
                    <div></div> 
                    :  
                    <div class="module-tuileEvent-info-buttons-button1">
                        <Button
                        typeBouton={props.typeBouton} 
                        color={props.button1Color}
                        label={props.button1Label}
                        link={props.button1Link}
                        />
                    </div>
                    }
                    </div>
                </div>
            </div>
        );
    } else if (typeEvent === "unspecified") {
        return(
            <div class="module-tuileEvent">
                { props.status === "over" 
                ? 
                <div class="module-tuileEvent-illustration module-tuileEvent-illustration-over">
                    <img src={require("../images/event-notype.jpg")} alt={props.title} />
                </div>
                :  
                <div class="module-tuileEvent-illustration">
                    <img src={require("../images/event-notype.jpg")} alt={props.title} />
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
                    { props.status === "over" 
                    ?
                    <div></div> 
                    :  
                    <div class="module-tuileEvent-info-buttons-button1">
                        <Button
                        typeBouton={props.typeBouton} 
                        color={props.button1Color}
                        label={props.button1Label}
                        link={props.button1Link}
                        />
                    </div>
                    }
                    </div>
                </div>
            </div>
        );
    } else if (typeEvent === "wei") {
        return(
            <div class="module-tuileEvent">
                <div class="module-tuileEvent-illustration">
                    <img src={require("../images/wei-2020-460x460.jpg")} alt={props.title} />
                </div>
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
                        <div class="module-tuileEvent-info-buttons-button1">
                            <Button 
                            color={props.button1Color}
                            label={props.button1Label}
                            link={props.button1Link}
                            />
                        </div>
                        <div class="module-tuileEvent-info-buttons-button2 module-tuileEvent-info-buttons-margin">
                            <Button 
                            color={props.button2Color}
                            label={props.button2Label}
                            link={props.button2Link}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return(null);
    }

}

export default TuileEvent;