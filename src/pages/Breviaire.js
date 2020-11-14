import React, { Component } from 'react';
import Button from '../modules/Button';

import { Page, Text, View, Document, StyleSheet } from 'react-pdf';

import '../design/pages/breviaire.css'

import BreviaireV1 from '../docs/BreviaireV1.pdf';

class Breviaire extends Component {

    render() {

        const heightDynamic = 'calc(100vh - 206px)';

        const stylePDF = {
            height: heightDynamic,
            width: '100%',
            maxWidth: '700px',
        }

        return(
            
            <div class="page-breviaire">
                <div class="page-breviaire-pdf">
                    <a href={BreviaireV1} alt="r">Lala</a>
                {/* <iframe scrolling="yes" src={BreviaireV1} style={stylePDF}></iframe> */}
                </div>
            </div>
        );
    }
}

export default Breviaire