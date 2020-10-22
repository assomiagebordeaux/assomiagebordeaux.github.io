import React, { Component } from 'react';

import { Document,ReactPDF } from 'react-pdf';

import BreviaireV1 from '../docs/BreviaireV1.pdf';

class Breviaire extends Component {
    render() {

        let pageStyles = {
            margin: 'auto'
        }

        var dynamicWidth = 'calc(100vh - ' + 206 + 'px)';

        let pdfStyles = {
            maxWidth: '1024px',
            overflow: 'hidden',
            minHeight: dynamicWidth,
            height: '70vh',
            width: '100%'
        }

        return(
            <div class="page-breviaire">
            <object data={BreviaireV1} type="application/pdf" style={pdfStyles} scrollbar="0">
                <p>Le PDF ne s'affiche pas ? Le bréviaire est disponible sur le Drive de l'AMB !</p>
            </object>
            </div>
        );
    }
}

export default Breviaire