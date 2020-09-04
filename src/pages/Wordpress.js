import React, { Component } from 'react';

import '../design/pages/accueil.css'

import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import {Tuile} from '../modules/Tuile';

import MoisIntegration from '../images/moisAfterwork.jpg'
import Adhesion from '../images/adhesion.jpg'

class Wordpress extends Component {
    render() {
        return(
            <Redirect to="/" />
        );
    }
}

export default Wordpress