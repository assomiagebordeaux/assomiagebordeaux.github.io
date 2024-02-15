import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/design/commun/button.css'

export function Button(props) {

    if (props.typeBouton === "interne") {
        return (
            <ButtonInterne
                color={props.color}
                label={props.label}
                link={props.link}
            />
        );
    } else if (props.typeBouton === "desactive") {
        return (
            <ButtonDesactive
                label={props.label}
            />
        );
    } else if (props.typeBouton === "info") {
        return (
            <ButtonInfo
                label={props.label}
            />
        );
    } else if (props.typeBouton === "externe") {
        return (
            <ButtonExterne
                color={props.color}
                label={props.label}
                link={props.link}
            />
        );
    } else if (props.typeBouton === "addCalendar") {
        return (
            <ButtonAddCalendar
                color={props.color}
                link={props.link}
            />
        );
    } else {
        return (null);
    }
}

export default Button

function ButtonInterne(props) {

    if (props.color === "white") {
        return (
            <Link to={props.link} style={{textDecoration: 'none'}}>
                <div class="module-button button-white">{props.label}</div>
            </Link>
        );
    } else if (props.color === "bleuAMB") {
        return (
            <Link to={props.link} style={{textDecoration: 'none'}}>
                <div class="module-button button-bleuAMB">{props.label}</div>
            </Link>
        );
    }
}

function ButtonDesactive(props) {
    return (
        <div class="module-button button-grey">{props.label}</div>
    );
}

function ButtonInfo(props) {
    return (
        <div class="module-button button-orange">{props.label}</div>
    );
}

function ButtonExterne(props) {

    const styleExternalLinkIcon = {
        width: '12px',
        marginLeft: '3px',
        marginTop: '6px'
    }

    if (props.color === "white") {
        return (
            <a target="_blank" rel="noopener noreferrer nofollow" href={props.link} style={{textDecoration: 'none'}}>
                <div class="module-button-external button-white button-external-white">
                    {props.label}
                </div>
            </a>
        );
    } else if (props.color === "bleuAMB") {
        return (
            <a target="_blank" rel="noopener noreferrer nofollow" href={props.link} style={{textDecoration: 'none'}}>
                <div class="module-button-external button-bleuAMB button-external-bleuAMB">
                    {props.label}
                </div>
            </a>
        );
    }
}

function ButtonAddCalendar(props) {
    if (props.color === "white") {
        return (
            <div class="module-button-external button-white button-external-white">
                <a target="_blank" rel="noopener noreferrer nofollow" href={props.link}>
                    Ajouter au calendrier +
                </a>
            </div>
        );
    } else if (props.color === "bleuAMB") {
        return (
            <div class="module-button-external button-bleuAMB button-external-bleuAMB">
                <a target="_blank" rel="noopener noreferrer nofollow" href={props.link}>
                    Ajouter au calendrier +
                </a>
            </div>
        );
    }
}