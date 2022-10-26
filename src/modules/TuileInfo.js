import React from 'react';

import '../design/commun/tuileInfo.css';

import {Button} from './Button'

export function TuileInfo(props) {

    if (props.typeInfo === "alerte") {
        return (
            <div class="module-tuileInfo module-tuileInfo-alerte">
                <div class="module-tuileInfo-contenu">
                    <div class="module-tuileInfo-texte">
                        {props.texte}
                    </div>
                    {props.siBouton === "true"
                        ?
                        <div class="module-tuileInfo-button">
                            <Button
                                typeBouton={props.typeBouton}
                                color={props.buttonColor}
                                link={props.buttonLink}
                                label={props.buttonLabel}
                            />
                        </div>
                        :
                        <div></div>
                    }
                </div>
            </div>
        );
    } else if (props.typeInfo === "info") {
        return (
            <div class="module-tuileInfo module-tuileInfo-info">
                <div class="module-tuileInfo-contenu">
                    <div class="module-tuileInfo-texte">
                        {props.texte}
                    </div>
                    {props.siBouton === "true"
                        ?
                        <div class="module-tuileInfo-button">
                            <Button
                                typeBouton={props.typeBouton}
                                color={props.buttonColor}
                                link={props.buttonLink}
                                label={props.buttonLabel}
                            />
                        </div>
                        :
                        <div></div>
                    }
                </div>
            </div>
        );
    } else {

    }

}

export default TuileInfo;