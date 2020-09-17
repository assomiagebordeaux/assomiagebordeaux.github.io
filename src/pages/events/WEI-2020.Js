import React, { Component } from 'react';

import '../../design/commun/event.css'

import {Communique} from '../../modules/Communique';

class WEI2020 extends Component {

    render() {

        return(
            <Communique 
            titre="Annulation du WEI 2020"
            paragraphe1="Chers miagistes,"
            paragraphe2="Suite aux récentes mesures annoncées par la préfète de Gironde, c'est avec grand regret que l'Asso MIAGE Bordeaux vous annonce l'annulation du Week-end d'Intégration 2020 : le Wei'cingétorix, initialement prévu les 3 et 4 octobre 2020."
            paragraphe3="Jusqu’à présent, l’organisation de ce WEI suivait son cours. En effet, nous avions jugé l’évènement réalisable en tenant compte des différentes mesures sanitaires recommandées. Des ajustements avaient été planifiés que ce soit pour le transport, les activités, la soirée ou l’hébergement, tout ça, afin de limiter au maximum les risques de cluster."
            paragraphe4="Malheureusement pour nous (et pour vous), la décision est tombée ce lundi 14 septembre peu après 15 h : pour ralentir la propagation du COVID-19 dans le département, les fêtes étudiantes seront empêchées. Même si le WEI était situé dans le Lot-et-Garonne, et n’était donc pas soumis à la mesure annoncée, nous n’avons pas voulu courir de risques que ce soit pour vous ou pour nous, étant donné les enjeux."
            paragraphe5="Nous allons donc nous conformer aux mesures prises par la préfète dans l’espoir qu’elles permettent un retour à la normale le plus vite possible !"
            paragraphe6="Rassurez-vous, l’AMB est toujours là et de nombreux events auront lieu tout ce semestre dans le respect des règles sanitaires. Le premier d’entre eux sera l’event parrainage, lui aussi perturbé par les décisions de ce début de semaine. On vous donnera très bientôt des infos sur son déroulement, alors restez connectés !"
            paragraphe7="L’année 2021 sera elle aussi marquée par de gros events déjà prévus depuis cet été (on croise les doigts) qu’ils soient à portée locale ou nationale. On a hâte ! (et vous aussi on espère)."
            paragraphe8="C’est une année particulière, c’est pour cela que nous allons nous plier en quatre et redoubler d’imagination pour vous proposer des events exclusifs “COVID-friendly” à la sauce miagiste !"
            paragraphe9="La force de la MIAGE est son réseau, depuis l’intégration des nouveaux jusqu’au maintien du lien avec les anciens, en passant par les évènements inter-assos. Nous sommes solidaires des autres associations miagistes de France qui ont vu, eux aussi, leurs différents events d’intégration perturbés ou annulés depuis la rentrée. À nous de nous adapter et de rebondir !"
            paragraphe10="Prenez soin de vous, et de vos proches. Respectez les mesures sanitaires et les gestes barrières. On se retrouve très vite !"
            signature1="Miagistement votre,"
            signature2="L’AMB"
            />
        );
    }
}

export default WEI2020;