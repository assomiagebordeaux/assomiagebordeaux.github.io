import React, {Component} from 'react';

import '../../assets/design/pages/accueil.css'

import {Redirect} from 'react-router-dom';

class Wordpress extends Component {
    render() {
        return (
            <Redirect to="/"/>
        );
    }
}

export default Wordpress