import React from 'react';

import {TuileMix} from './TuileMix';
import {TuileEvent} from './TuileEvent';
import {TuileInfo} from './TuileInfo';

export function Tuile(props) {

    const isDisplay = props.display;
    const type = props.type;

    if(isDisplay==="false") {
        return (null);
    } else {
        if(type === "mix") {
            return(
                <TuileMix 
                typeMix={props.typeMix}
                status={props.status}
                imgurl={props.imgurl}
                linkGlobal={props.linkGlobal}
                title={props.title}
                description={props.description}
                date={props.date}
                typeBouton={props.typeBouton}
                numberButtons={props.numberButtons}
                buttonColor={props.buttonColor}
                buttonLabel={props.buttonLabel}
                buttonLink={props.buttonLink}
                last={props.last}
                />
            );
        } else if(type === "event") {
            return (
                <TuileEvent
                typeEvent={props.typeEvent} 
                title={props.title}
                lieu={props.lieu}
                date={props.date}
                status={props.status}
                description={props.description}
                typeBouton={props.typeBouton}
                button1Color={props.button1Color}
                button1Label={props.button1Label}
                button1Link={props.button1Link}
                button2Color={props.button2Color}
                button2Label={props.button2Label}
                button2Link={props.button2Link}
                isLast={props.isLast}
                />
            );
        } else if(type === "info") {
            return (
                <TuileInfo
                texte={props.texte}
                typeBouton={props.typeBouton}
                buttonColor={props.buttonColor}
                buttonLink={props.buttonLink}
                buttonLabel={props.buttonLabel}
                />
            );
        } 
        else {
            return (null);
        }
    }
}