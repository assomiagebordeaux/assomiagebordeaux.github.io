import React from 'react';

import '../design/commun/tuileInfo.css';

import {Button} from './Button'

export function TuileInfo(props) {

    return(
        <div class="module-tuileInfo">
            <div class="module-tuileInfo-contenu">
                <div class="module-tuileInfo-texte">
                    {props.texte}
                </div>
                <div class="module-tuileInfo-button">
                    <Button
                    typeBouton={props.typeBouton} 
                    color={props.buttonColor}
                    link={props.buttonLink}
                    label={props.buttonLabel}
                    />
                </div>
            </div>
        </div>
    );

}

export default TuileInfo;