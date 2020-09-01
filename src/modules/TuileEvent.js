import React from 'react';

import '../design/commun/tuileEvent.css';

import {Button} from './Button'

export function TuileEvent(props) {

    const typeEvent = props.typeEvent;

    if(typeEvent === "afterwork") {
        return(
            <div class="module-tuileEvent">
                <div class="module-tuileEvent-illustration">
                    <img src={require("../images/Afterwork.jpg")} alt={props.title} />
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
    } else if (typeEvent === "unspecified") {
        return(
            <div class="module-tuileEvent">
                <div class="module-tuileEvent-illustration">
                    <img src={require("../images/event-notype.jpg")} alt={props.title} />
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
    } else {
        return(null);
    }

}

export default TuileEvent;