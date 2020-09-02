import React from 'react';

import {TuileMix} from './TuileMix';
import {TuileEvent} from './TuileEvent';

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
                description={props.description}
                button1Color={props.button1Color}
                button1Label={props.button1Label}
                button1Link={props.button1Link}
                button2Color={props.button2Color}
                button2Label={props.button2Label}
                button2Link={props.button2Link}
                isLast={props.isLast}
                />
            );
        } else {
            return (null);
        }
    }
}