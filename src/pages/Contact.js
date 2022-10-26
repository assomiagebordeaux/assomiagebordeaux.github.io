import React, {Component} from 'react';

import {Tuile} from '../modules/Tuile';

import '../design/pages/contact.css'

class Contact extends Component {
    render() {

        const contacts = {
            presidentMail: "president@asso.miagebordeaux.fr",
            nameFirst: "L'ASSO", linkFirst: "/association",
            nameSecond: "ESCALADE", linkSecond: "/escalade",
            nameThird: "RANDONNEE", linkThird: "/randonnee",
            nameFourth: "PHOTO", linkFourth: "/photo",
            nameFifth: "CONTACT", linkFifth: "/contact"
        };

        return (
            <div class="page-contact">
                <div class="page-contact-title">Contact</div>
                <div class="page-contact-subtitle">Président</div>
                <a class="page-contact-mailto" href="mailto:president@asso.miagebordeaux.fr">Envoyer un mail</a>
                <div class="page-contact-subtitle">Trésorier</div>
                <div class="page-contact-subtitle">Secrétaire</div>
                <div class="page-contact-subtitle">Vice-Président</div>
                <div class="page-contact-subtitle">Pôle event</div>
                <div class="page-contact-subtitle">Pôle com'</div>
                <div class="page-contact-subtitle">Pôle réseau</div>
                <div class="page-contact-subtitle">Pôle alumnis</div>
            </div>
        );
    }
}

export default Contact