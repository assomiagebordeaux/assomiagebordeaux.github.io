import React, {Component} from 'react';

import '../../design/commun/event.css'

import {Communique} from '../../modules/Communique';

class WES2021 extends Component {

    render() {

        return (
            <Communique
                titre="Annulation du WES 2021"
                paragraphe1="Chers miagistes,"
                paragraphe2="Les dernières annonces du gouvernement ne nous laissent pas d’autres choix, et c'est avec le cœur lourd que nous vous écrivons ce type de communiqué pour la deuxième fois cette année. C’est avec grand regret que l’Asso MIAGE Bordeaux vous annonce l’annulation du Week-end Ski 2021, initialement prévu les 6 et 7 février 2021."
                paragraphe3="Même avec cette échéance de seulement un mois, de nombreux aménagements avaient été programmés en coulisses depuis plusieurs semaines pour permettre la bonne tenue de cet évènement, comme la diminution du nombre de places ou encore l’annulation de la soirée du samedi soir."
                paragraphe4="Malheureusement le flou autour de la réouverture des remontées mécaniques (initialement prévue aujourd’hui…) sans date précise, aura eu raison de ce WES, qui, comme on le sait, était très attendu par vous tous et par nous-mêmes. Attendre une date de réouverture ultérieure et hypothétique (autour du 20 janvier) n’était pas possible d’un point de vue logistique ou contractuel, que ce soit pour nous ou pour vous."
                paragraphe5="Néanmoins, cette annulation avait été envisagée, et l’Asso MIAGE Bordeaux a encore quelques tours dans sa manche pour les prochains mois !"
                paragraphe6="De nombreux évènements sont prévus dès la semaine prochaine sous différents formats, de nouveaux goodies exclusifs vont être lancés dont un avant la fin du mois, et enfin, les sweats 2021 pourront être retirés d’ici 15 jours (le dispositif de distribution sera précisé ultérieurement)."
                paragraphe7="Prenez soin de vous, et de vos proches. Respectez les mesures sanitaires et les gestes barrières. On se retrouve très vite !"
                signature1="Miagistement votre,"
                signature2="L’AMB"
            />
        );
    }
}

export default WES2021;