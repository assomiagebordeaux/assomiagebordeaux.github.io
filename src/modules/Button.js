import React from 'react';
import { Link } from 'react-router-dom';

import '../design/commun/button.css'

export function Button(props) {

    if(props.typeBouton === "interne") {
        return(
            <ButtonInterne 
            color={props.color}
            label={props.label}
            link={props.link}
            />
        );
    } else if(props.typeBouton === "desactive") {
        return(
            <ButtonDesactive 
            label={props.label}
            />
        );
    } else if(props.typeBouton === "info") {
        return(
            <ButtonInfo 
            label={props.label}
            />
        );
    } else if(props.typeBouton === "externe") {
        return(
            <ButtonExterne 
            label={props.label}
            link={props.link}
            />
        );
    } else {
        return(null);
    }

        // if(color === "white"){
        //     return(
        //         <Link to={props.link} style={{ textDecoration: 'none' }}>
        //         <div class="module-button button-white">{props.label}</div>
        //         </Link>
        //     );
        // } else if(color === "bleuAMB"){
        //     return(
        //         <div>
        //         { props.url === "" 
        //             ?
        //             <Link to={props.link} style={{ textDecoration: 'none' }}>
        //             <div class="module-button button-bleuAMB">{props.label}</div>
        //             </Link>
        //             :  
        //             <a class="module-button button-bleuAMB" url={props.url}>{props.label}</a>
        //             }
        //         </div>
        //     );            
        // } else if (color==="grey"){
        //     return(
        //         <div class="module-button button-grey">{props.label}</div>
        //     );
        // } else {
        //     return(null);
        // }
}

export default Button

function ButtonInterne(props) {

    if(props.color === "white"){
        return(
            <Link to={props.link} style={{ textDecoration: 'none' }}>
            <div class="module-button button-white">{props.label}</div>
            </Link>
        );
    } else if (props.color === "bleuAMB"){
        return(
            <Link to={props.link} style={{ textDecoration: 'none' }}>
            <div class="module-button button-bleuAMB">{props.label}</div>
            </Link>
        );            
    }
}

function ButtonDesactive(props) {
    return(
        <div class="module-button button-grey">{props.label}</div>
    );
}

function ButtonInfo(props) {
    return(
        <div class="module-button button-orange">{props.label}</div>
    );
}

function ButtonExterne(props) {
    return(
        <a class="module-button button-bleuAMB" target="_blank" rel="noopener noreferrer nofollow" href={props.url}>{props.label}</a>
    );
}