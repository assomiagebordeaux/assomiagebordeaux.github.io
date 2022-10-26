import React from 'react';
import {Link} from 'react-router-dom';

import '../design/commun/communique.css';

import {Button} from './Button';

export function Communique(props) {

    return (
        <div class="page-communique">
            <div class="page-communique-titre">
                {props.titre}
            </div>
            <div class="page-communique-paragraphe">
                {props.paragraphe1}
            </div>
            <div class="page-communique-paragraphe">
                {props.paragraphe2}
            </div>
            <div class="page-communique-paragraphe">
                {props.paragraphe3}
            </div>
            <div class="page-communique-paragraphe">
                {props.paragraphe4}
            </div>
            <div class="page-communique-paragraphe">
                {props.paragraphe5}
            </div>
            <div class="page-communique-paragraphe">
                {props.paragraphe6}
            </div>
            <div class="page-communique-paragraphe">
                {props.paragraphe7}
            </div>
            <div class="page-communique-paragraphe">
                {props.paragraphe8}
            </div>
            <div class="page-communique-paragraphe">
                {props.paragraphe9}
            </div>
            <div class="page-communique-paragraphe">
                {props.paragraphe10}
            </div>
            <div class="page-communique-signatures">
                <div class="page-communique-signature">
                    {props.signature1}
                </div>
                <div class="page-communique-signature">
                    {props.signature2}
                </div>
            </div>
        </div>
    );

}

export default Communique