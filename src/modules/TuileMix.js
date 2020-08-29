import React from 'react';

import {TuileMixLarge} from './TuileMixLarge';

export function TuileMix(props) {

    const typeMix = props.typeMix;

    if(typeMix==="large") {
        return (
            <TuileMixLarge 
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
    } else if (typeMix==="small") {
        return (null);
    }
}

export default TuileMix;