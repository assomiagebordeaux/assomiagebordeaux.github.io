import React from 'react';
import { Link } from 'react-router-dom';

import '../design/commun/tuileSmooth.css';
import '../design/commun/button.css'

import {Button} from './Button'

export function TuileSmooth(props) {

    var colorBG = '#F2F2F2';
    var colorTitres = 'black';
    var colorBoutons = 'bleuAMB';
    var marginB = '12px';
    var fontFTitre1 = 'GothamMedium';

    if(props.backgroundColor === "black") {
        colorBG = 'black';
        colorTitres = '#F5F5F7';
        colorBoutons = 'white';
    }

    if(props.siMarginBottom === "false"){
        marginB = '0px';
    }

    const styleModule = {
        backgroundColor: colorBG,
        marginBottom: marginB
    }

    if(props.titre1FontFamily === "StraightOuttaAMB"){
        fontFTitre1 = 'StraightOuttaAMB'
    } else if(props.titre1FontFamily === "Memories"){
        fontFTitre1 = 'Memories'
    }

    const styleTitre1 = {
        fontFamily: fontFTitre1,
        color: colorTitres
    }

        return (
            <div class="module-tuileSmooth" style ={styleModule}>
                <div class="module-tuileSmooth-margin">
                    <div class="module-tuileSmooth-infos">
                        <div id ="titre1" class="module-tuileSmooth-infos-titre1" style ={styleTitre1}>
                            {props.titre1}
                        </div>
                        <div class="module-tuileSmooth-infos-titre2" style ={{ color: colorTitres}}>
                            {props.titre2}
                        </div>
                        <div class="module-tuileSmooth-infos-titre3" style ={{ color: colorTitres}}>
                            {props.titre3}
                        </div>
                        { props.siImage === "true" ? 
                        <div class="module-tuileSmooth-infos-boutons margin-bottom-boutons">
                            <Button
                            typeBouton="interne"
                            color={colorBoutons}
                            label={props.bouton1Label}
                            link={props.bouton1Link}
                            />
                        </div>
                        :
                        <div class="module-tuileSmooth-infos-boutons">
                            <Button
                            typeBouton="interne"
                            color={colorBoutons}
                            label={props.bouton1Label}
                            link={props.bouton1Link}
                            />
                        </div>
                        }
                    </div>
                    { props.siImage === "true" ? 
                    <div class="module-tuileSmooth-image">
                        <img src={props.image} alt={props.title} />
                    </div>
                    :
                    <div></div>
                    }
                </div>
            </div>
        );
}

export default TuileSmooth;