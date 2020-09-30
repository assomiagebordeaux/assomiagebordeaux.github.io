import React from 'react';
import { Link } from 'react-router-dom';

import '../design/commun/tuileMixLarge.css';
import '../design/commun/button.css'

import {Button} from './Button'

export function TuileMixLarge(props) {

    const status = props.status;
    var marginbottom = "0%";
    if(props.last==="false"){
        marginbottom = "2%";
    }

    if(status==="online") {
        return (
        // <Link to={props.linkGlobal} style={{ textDecoration: 'none' }}>
            <div style ={{ backgroundImage: "url("+props.imgurl+")" }} class="module-tuileMixLarge">
                    <div class="module-tuileMixLarge-bloc-infos">
                        <div class="module-tuileMixLarge-bloc-infos-margin">
                            <div class="module-tuileMixLarge-bloc-infos-titre">
                                {props.title}
                            </div>
                            <div class="module-tuileMixLarge-bloc-infos-description">
                                {props.description}
                            </div>
                            <div class="module-tuileMixLarge-bloc-infos-date">
                                {props.date}
                            </div>
                            <div class="module-tuileMixLarge-bloc-infos-buttons">
                                <div class="module-tuileMixLarge-bloc-infos-button1">
                                    <Button
                                    typeBouton={props.typeBouton} 
                                    color={props.buttonColor}
                                    link={props.buttonLink}
                                    label={props.buttonLabel}
                                    />
                                    {/* <div class="module-button" to={props.button1Link} style={{ textDecoration: 'none' }}>{props.button1Label}</div> */}
                                </div>
                            </div>
                        </div>              
                    </div>
            </div>
        // </Link>
        );
    } else if(status==="new") {

    } else if(status==="soon") {
        return(
            <div style ={{ backgroundImage: "url("+props.imgurl+")",marginBottom:marginbottom }} class="module-tuileMixLarge">
                    <div class="module-tuileMixLarge-bloc-infos">
                        <div class="module-tuileMixLarge-bloc-infos-titre">
                            {props.title}
                        </div>
                        <div class="module-tuileMixLarge-bloc-infos-description">
                            {props.description}
                        </div>
                        <div class="module-tuileMixLarge-bloc-infos-date">
                            {props.date}
                        </div>
                        <div class="module-tuileMixLarge-bloc-infos-buttons">
                            <div class="module-tuileMixLarge-bloc-infos-button1-soon">
                                Infos à venir
                            </div>
                        </div>
                    </div>
            </div>
        );
    } else if(status==="offline") {

    } else {
        return(null);
    }
}

export default TuileMixLarge;