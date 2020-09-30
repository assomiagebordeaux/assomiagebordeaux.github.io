import React, { Component } from 'react';

import '../../design/commun/event.css'

import {Event} from '../../modules/Event';

import couvertureUrl from '../../images/lieux/campus.jpg';

class Parrainage extends Component {

    render() {

const resume = "Salut les miagistes ! Nous revoilà après 1 mois de dur labeur, l'AMB revient pour la soirée Parrainage ! Cette soirée réservée aux L3 et aux M1 sera l'occasion de rencontrer ton parrain ou ta marraine. Cet étudiant sera là pour toi tout au long de tes années miagistes, pour t'aider dans tes démarches, répondre à tes questions concernant la MIAGE, ou même qui sait, t'aider à trouver un stage ou une alternance. Ensuite, après avoir trouvé ton parrain ou ta marraine, l'AMB va avoir besoin de toi ! En effet, l'ancien président a été retrouvé mort sur le parking de l'université. On compte sur tes compétences, ainsi que celles de ton parrain ou de ta marraine pour que ce crime ne reste pas impuni. A mercredi jeune enquêteur !";

const deroulement1 = ["18h30","Trouve ton parrain"];
const deroulement2 = ["19h","L'enquête des parrains"];
const deroulement3 = ["20h","Fin de l'enquête"];
const deroulement4 = ["",""];
const deroulement5 = ["",""];

const reduction1 = ["A venir...","",""];
const reduction2 = ["dqsdqsd","sdqsd","qsd"];
const reduction3 = ["qsdq","qsd","qsd"];
const reduction4 = ["","",""];
const reduction5 = ["","",""];

const planAcces = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.7001289088944!2d-0.6017367847612914!3d44.807299579098725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd55277e87e163f9%3A0xde16b92df36e73e7!2sA22%2C%2033400%20Talence!5e0!3m2!1sfr!2sfr!4v1600871439164!5m2!1sfr!2sfr";

        return(
            <Event 
            couvertureUrl={couvertureUrl}
            title="L'enquête des parrains"
            resume={resume}
            calendar1="7 octobre"
            calendar2="18h30"
            calendar3=""
            lieu1="Bât. A22"
            lieu2="Amphi Darwin"
            lieu3="Tram B (arrêt Béthanie)"
            prix1="Gratuit"
            prix2="Evènement réservé aux L3 et parrains"
            prix3=""
            siInscription="false"
            nombreDeroulements="3"
            deroulement1={deroulement1}
            deroulement2={deroulement2}
            deroulement3={deroulement3}
            deroulement4={deroulement4}
            deroulement5={deroulement5}
            nombreReductions="0"
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

export default Parrainage;