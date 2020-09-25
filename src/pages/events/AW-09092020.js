import React, { Component } from 'react';

import '../../design/commun/event.css'

import {Event} from '../../modules/Event';

import CarnavalCafe from '../../images/lieux/CarnavalCafe.jpg';

class AW09092020 extends Component {

    render() {

const resume = "Pour le premier afterwork de cette rentrée 2020, vos deux associations miagistes préférées vous proposent de se retrouver pour découvrir leurs activités respectives. D'un côté, l'AMB (Asso MIAGE Bordeaux) le BDE de la formation, chargé des soirées, des évènements d'intégration et du lien avec les anciens. De l'autre JMC (Junior Miage Concept), la Junior-Entreprise miagiste bordelaise. Elle réalise des audits et du pilotage de projets pour le compte de leurs clients. L'une est orientée \"vie étudiante\", tandis que l'autre est plutôt axée \"professionnelle\". Et si l'envie vous vient d'adhérer à l'une d'entre elles, ou même de les rejoindre, il suffit de demander. A mercredi !";

const deroulement1 = ["19h","Début de l'afterwork"];
const deroulement2 = ["02h","Fin de l'afterwork"];
const deroulement3 = ["",""];
const deroulement4 = ["",""];
const deroulement5 = ["",""];

const reduction1 = ["A venir...","",""];
const reduction2 = ["dqsdqsd","sdqsd","qsd"];
const reduction3 = ["qsdq","qsd","qsd"];
const reduction4 = ["","",""];
const reduction5 = ["","",""];

const planAcces = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.266923469402!2d-0.5778269849585184!3d44.836497179098544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527cf15662547%3A0x3d2128afca90a738!2sCarnaval%20Caf%C3%A9%20%26%20Boulange!5e0!3m2!1sfr!2sfr!4v1599061067374!5m2!1sfr!2sfr"

        return(
            <Event 
            couvertureUrl={CarnavalCafe}
            title="Afterwork AMB x JMC"
            resume={resume}
            calendar1="9 septembre"
            calendar2="A partir de 19h, jusqu'à la fermeture du bar"
            calendar3="Modalités à venir..."
            lieu1="Carnaval Café"
            lieu2="14 rue Duffour Dubergier, 33000 Bordeaux"
            lieu3="Tram B (arrêt Musée d'Aquitaine)"
            prix1="Gratuit"
            prix2="Gratuit pour les adhérents AMB, les L3, M1, M2 et anciens miagistes bordelais."
            prix3=""
            siInscription="false"
            nombreDeroulements="2"
            deroulement1={deroulement1}
            deroulement2={deroulement2}
            deroulement3={deroulement3}
            deroulement4={deroulement4}
            deroulement5={deroulement5}
            nombreReductions="1"
            reduction1={reduction1}
            reduction2={reduction2}
            reduction3={reduction1}
            reduction4={reduction2}
            reduction5={reduction1}
            planAcces={planAcces}
            />
        );
    }
}

export default AW09092020;