import React from 'react';

import {TuileMix} from './TuileMix';
import {TuileEvent} from './TuileEvent';
import {TuileInfo} from './TuileInfo';
import {TuileMemories} from './TuileMemories';
import {TuileShop} from './TuileShop';

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
                typeInfo={props.typeInfo}
                siBouton={props.siBouton}
                typeBouton={props.typeBouton}
                buttonColor={props.buttonColor}
                buttonLink={props.buttonLink}
                buttonLabel={props.buttonLabel}
                />
            );
        } else if(type === "memories") {
            return (
                <TuileMemories
                img1={props.img1}
                titreGauche={props.titreGauche}
                titreDroite={props.titreDroite}
                description={props.description}
                lien={props.lien}
                siNouveau={props.siNouveau}
                siDateDeDispo={props.siDateDeDispo}
                jourDispo={props.jourDispo}
                moisDispo={props.moisDispo}
                anneeDispo={props.anneeDispo}
                />
            );
        } else if(type === "shop") {
            return (
                <TuileShop
                imageProduit={props.imageProduit}
                nomProduit={props.nomProduit}
                siNouveauProduit={props.siNouveauProduit}
                siPrixExact={props.siPrixExact}
                prix={props.prix}
                etatProduit={props.etatProduit}
                lien={props.lien}
                />
            );
        } 
        else {
            return (null);
        }
    }
}