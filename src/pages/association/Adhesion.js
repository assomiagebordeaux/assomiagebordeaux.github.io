import React, {Component} from 'react';

import '../../assets/design/pages/association/adhesion.css'

// import {Button} from "../../modules/Button"

class Adhesion extends Component {
    render() {

        return (
            <div class="page-adhesion">
                <div class="page-adhesion-title">Adhésion 2022/2023</div>
                <div class="page-adhesion-subtitle">Pourquoi adhérer à l'AMB ?</div>
                <div class="page-paragraphe">
                    Parce que c'est le meilleur moyen d'obtenir des bons plans. L'adhésion AMB permet
                    d'avoir des réductions sur de nombreux events organisés au fil de l'année par l'AMB
                    (Afterworks, WEI, Laser-game, Bar...etc).
                </div>
                <div class="page-adhesion-subtitle">Quels avantages avec cette adhésion ?</div>
                <div class="page-paragraphe">
                    Les avantages liées à l'adhésion AMB sont nombreux :
                    <ul>
                        <li>Réduction sur l'entrée aux Afterworks organisés par l'AMB ;</li>
                        <li>Accès aux events majeurs organisés par l'AMB comme le WEI (Week-end d'Intégration) et le WES
                            (Week-end Ski) ;
                        </li>
                        <li>Accès aux établissements partenaires de l'AMB ;</li>
                        <li>Accès aux offres partenaires d'ATENA ;</li>
                        <li>Accès aux events Miage Connection organisés partout en France.</li>
                    </ul>
                    Vous permettez aussi au bureau des élèves d'organiser des events tout au long de l'année.
                </div>
                <div class="page-adhesion-subtitle">Qu'est-ce que la carte AMB ?</div>
                <div class="page-paragraphe">
                    La carte AMB permet d'avoir accès aux avantages AMB à travers les différents établissements
                    partenaires, en dehors de tout event organisé par l'AMB.
                    Celle-ci vous est remis soit physiquement (à l'Université ou en event) soit numériquement via
                    HelloAsso.
                </div>
                <div class="page-adhesion-subtitle">Combien coûte l'adhésion ?</div>
                <div class="page-paragraphe">
                    Le prix de l'adhésion a été fixée à 5€ pour l'année universiaire 2022/2023. Il permet
                    d'accéder à tous les avantages AMB. L'adhésion 2022/2023 est valable du 1er septembre 2022 au 31
                    août 2023.
                </div>
                <div class="page-adhesion-subtitle">Comment adhérer ?</div>
                <div class="page-paragraphe">
                    Tu peux adhérer de deux façons différentes à l'AMB, en présentiel ou à distance.
                </div>
                <div class="page-column page-section-final">
                    <div class="page-column-section page-column-section-margin">
                        <div class="page-column-section-title">
                            Présentiel
                        </div>
                        <div class="page-column-section-paragraphe">
                            Vous pouvez venir adhérer sur place au stand de l'AMB (détails à venir), au local
                            dans le bâtiment A21 (détails à venir) ou auprès d'un membre de l'AMB.
                        </div>
                    </div>
                    <div class="page-column-section">
                        <div class="page-column-section-title">
                            A Distance
                        </div>
                        <div class="page-column-section-paragraphe">
                            Vous pouvez adhérer en ligne à travers le portail HelloAsso via une carte bancaire.
                            Site et paiement sécurisés.
                        </div>
                        <div class="page-column-section-link">
                            <a href="https://www.helloasso.com/associations/asso-miage-bordeaux/adhesions/adhesion-asso-miage-bordeaux-2022-2023"
                               target="_blank" rel="noopener noreferrer nofollow">S'inscrire en ligne</a>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Adhesion