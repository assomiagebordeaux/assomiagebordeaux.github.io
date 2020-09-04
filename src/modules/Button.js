import React from 'react';
import { Link } from 'react-router-dom';

import '../design/commun/button.css'

export function Button(props) {

        const color = props.color;

        if(color === "white"){
            return(
                <Link to={props.link} style={{ textDecoration: 'none' }}>
                <div class="module-button button-white">{props.label}</div>
                </Link>
            );
        } else if(color === "bleuAMB"){
            return(
                <Link to={props.link} style={{ textDecoration: 'none' }}>
                    <div class="module-button button-bleuAMB">{props.label}</div>
                </Link>
            );            
        } else if (color==="grey"){
            return(
                <div class="module-button button-grey">{props.label}</div>
            );
        } else {
            return(null);
        }
}

export default Button