import React, { Component } from 'react';

import '../../design/commun/event.css'

import {Event} from '../../modules/Event';

import couvertureUrl from '../../images/lieux/CarnavalCafe.jpg';

class AWRentree2021 extends Component {

    render() {

const resume = "Bienvenue à toi jeune miagiste ! Les cours reprennent tout juste, et les événements en présentiel aussi, mais vos assos sont chaudes bouillantes pour cette année qui va être très spéciale ! C’est pourquoi nous te proposons un petit afterwork le 8 Septembre 2021 au Carnaval Café. Si tu es un ancien, viens retrouver tes copains autour d’une bière bien fraîche, si tu es un nouveau, viens nous rencontrer autour d’un verre. On te présentera la MIAGE de Bordeaux, ainsi que les deux Assos qui la composent. Tu pourras rencontrer les Masters ainsi que des anciens Miagistes, ils pourront te parler de leurs expériences et répondre à toutes tes questions.";

const deroulement1 = ["18h30","Début de l'afterwork, des adhésions et des réductions"];
const deroulement2 = ["22h","Fin des adhésions sur place (seulement sur HelloAsso après 22h)"];
const deroulement3 = ["02h","Fin de l'afterwork et des réductions"];
const deroulement4 = ["",""];
const deroulement5 = ["",""];

const reduction1 = ["Pinte de bière classique","7€00","4€20"];
const reduction2 = ["Pinte de bière spéciale","7€00","4€50"];
const reduction3 = ["qsdq","qsd","qsd"];
const reduction4 = ["","",""];
const reduction5 = ["","",""];

const planAcces = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.266923469404!2d-0.5778269844634668!3d44.8364971790985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527cf15662547%3A0x3d2128afca90a738!2sCarnaval%20Caf%C3%A9%20%26%20Boulange!5e0!3m2!1sfr!2sfr!4v1630502541352!5m2!1sfr!2sfr"        

return(
            <Event 
            couvertureUrl={couvertureUrl}
            title="Afterwork de rentrée AMB x JMC"
            resume={resume}
            calendar1="08 septembre"
            calendar2="18h30"
            calendar3=""
            lieu1="Carnaval Café"
            lieu2="Tram B (arrêt Musée d'Aquitaine)"
            lieu3=""
            prix1="Gratuit"
            prix2="Seuls les adhérents auront accès aux réductions."
            prix3=""
            siInscription="false"
            nombreDeroulements="3"
            deroulement1={deroulement1}
            deroulement2={deroulement2}
            deroulement3={deroulement3}
            deroulement4={deroulement4}
            deroulement5={deroulement5}
            nombreReductions="2"
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

export default AWRentree2021;