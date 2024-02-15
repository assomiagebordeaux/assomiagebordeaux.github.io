import React from 'react';
// import {Link} from 'react-router-dom';

import '../../assets/design/commun/tuileSmooth.css';
import '../../assets/design/commun/button.css'

import {Button} from './Button'

export function TuileSmooth(props) {

    var colorBG = '#F2F2F2';
    var colorTitres = 'black';
    var colorBoutons = 'bleuAMB';
    var marginB = '12px';
    var fontFTitre1 = 'GothamMedium';
    var fontFTitre2 = 'GothamMedium';

    if (props.backgroundColor === "black") {
        colorBG = 'black';
        colorTitres = '#F5F5F7';
        colorBoutons = 'white';
    }

    if (props.siMarginBottom === "false") {
        marginB = '0px';
    }

    const styleModule = {
        backgroundColor: colorBG,
        marginBottom: marginB
    }

    if (props.titre1FontFamily !== "") {
        fontFTitre1 = props.titre1FontFamily;
    }

    if (props.titre2FontFamily !== "") {
        fontFTitre2 = props.titre2FontFamily;
    }

    // if(props.titre1FontFamily === "StraightOuttaAMB"){
    //     fontFTitre1 = 'StraightOuttaAMB'
    // } else if(props.titre1FontFamily === "Memories"){
    //     fontFTitre1 = 'Memories'
    // } else if(props.titre1FontFamily === "Movember"){
    //     fontFTitre1 = 'Movember'
    // } else if(props.titre1FontFamily === "AmongUs"){
    //     fontFTitre1 = 'AmongUs'
    // } else if(props.titre1FontFamily === "Distingued"){
    //     fontFTitre1 = 'Distingued'
    // } else if(props.titre1FontFamily === "Summer"){
    //     fontFTitre1 = 'Summer'
    // }

    const styleTitre1 = {
        fontFamily: fontFTitre1,
        color: colorTitres
    }

    const styleTitre2 = {
        fontFamily: fontFTitre2,
        color: colorTitres
    }

    if (props.typeSmooth === "simple") {
        return (
            <div class="module-tuileSmooth" style={styleModule}>
                <div class="module-tuileSmooth-margin">
                    <div class="module-tuileSmooth-infos">
                        {props.countdown === "true" ?
                        <div id="countdown" class="module-tuileSmooth-infos-countdown">

                        </div>
                        :
                        <div></div>
                        }
                        <div class="module-tuileSmooth-infos-uptitre">
                            {props.uptitle}
                        </div>
                        <div id="titre1" class="module-tuileSmooth-infos-titre1" style={styleTitre1}>
                            {props.titre1}
                        </div>
                        <div class="module-tuileSmooth-infos-titre2" style={styleTitre2}>
                            {props.titre2}
                        </div>
                        <div class="module-tuileSmooth-infos-titre3" style={{color: colorTitres}}>
                            {props.titre3}
                        </div>
                        {props.siImage === "true" ?
                            <div class="module-tuileSmooth-infos-boutons margin-bottom-boutons">
                                {props.nombreBoutons === "" || props.nombreBoutons === "0" ?
                                    <div></div>
                                    :
                                    <div></div>
                                } 
                                {props.nombreBoutons === "1" ?
                                    <div class="module-tuileSmooth-infos-boutons-1">
                                        <Button
                                            typeBouton={props.bouton1Type}
                                            color={colorBoutons}
                                            label={props.bouton1Label}
                                            link={props.bouton1Link}
                                        />
                                    </div>
                                    :
                                    <div></div>
                                } 
                                {props.nombreBoutons === "2" ?
                                    <div class="module-tuileSmooth-infos-boutons-2">
                                        <div class="module-tuileSmooth-infos-boutons-left">
                                            <Button
                                                typeBouton={props.bouton1Type}
                                                color={colorBoutons}
                                                label={props.bouton1Label}
                                                link={props.bouton1Link}
                                            />
                                        </div>
                                        <div class="module-tuileSmooth-infos-boutons-right">
                                            <Button
                                                typeBouton={props.bouton2Type}
                                                color={colorBoutons}
                                                label={props.bouton2Label}
                                                link={props.bouton2Link}
                                            />
                                        </div>
                                    </div>
                                    :
                                    <div></div>
                                }

                            </div>
                            :
                            <div class="module-tuileSmooth-infos-boutons">
                                {props.nombreBoutons === "" || props.nombreBoutons === "0" ?
                                    <div></div>
                                    :
                                    <div></div>
                                }
                                {props.nombreBoutons === "1" ?
                                    <div class="module-tuileSmooth-infos-boutons-1">
                                        <Button
                                            typeBouton={props.bouton1Type}
                                            color={colorBoutons}
                                            label={props.bouton1Label}
                                            link={props.bouton1Link}
                                        />
                                    </div>
                                    :
                                    <div></div>
                                }
                                {props.nombreBoutons === "2" ?
                                    <div class="module-tuileSmooth-infos-boutons-2">
                                        <div class="module-tuileSmooth-infos-boutons-left">
                                            <Button
                                                typeBouton={props.bouton1Type}
                                                color={colorBoutons}
                                                label={props.bouton1Label}
                                                link={props.bouton1Link}
                                            />
                                        </div>
                                        <div class="module-tuileSmooth-infos-boutons-right">
                                            <Button
                                                typeBouton={props.bouton2Type}
                                                color={colorBoutons}
                                                label={props.bouton2Label}
                                                link={props.bouton2Link}
                                            />
                                        </div>
                                    </div>
                                    :
                                    <div></div>
                                }

                            </div>
                        }
                    </div>
                    {props.siImage === "true" ?
                        <div class="module-tuileSmooth-image">
                            <img src={props.image} alt={props.title}/>
                        </div>
                        :
                        <div></div>
                    }
                </div>
            </div>
        );
    } else if (props.typeSmooth === "double") {
        return null;
    } else {
        return null;
    }
}

export default TuileSmooth;