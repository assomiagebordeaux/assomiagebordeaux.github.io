import React, {Component} from 'react';

import {Tuile} from '../../modules/utilitaires/Tuile';

import ShopIllustration from '../../assets/images/shop.jpg';
import FlasqueAMB from '../../assets/images/shop/flasque-amb.png';

import '../../assets/design/pages/shop.css';

class Shop extends Component {

    render() {

        const titreInfoSweats = "La vente du sweat de promo est prolongée jusqu'au 09/11 à 18h ! Toujours à partir de 27€ pour les adhérents (29€ sinon). Pas encore adhérent(e) ? Choisis le tarif avec Adhésion 2020/2021 sur HelloAsso pour gagner du temps !";
        const lienFlasque = "https://www.helloasso.com/associations/asso-miage-bordeaux/evenements/flasque-by-amb";
        return (
            <div class="page-shop">
                <div style={{backgroundImage: "url(" + ShopIllustration + ")"}} class="page-shop-illustration">
                    <div class="page-shop-illustration-infos">
                        <div class="page-shop-illustration-infos-titre">Shop AMB</div>
                        <div class="page-shop-illustration-infos-subtitle">La panoplie complète du bon miagiste</div>
                    </div>
                </div>
                {/* <div class="page-shop-closed">
                    Le shop revient en janvier 2021 !
                </div> */}
                <div class="page-shop-content">
                    <div class="page-shop-articles">
                        <Tuile
                            display="true"
                            type="shop"
                            imageProduit={FlasqueAMB}
                            nomProduit="La Flasque AMB"
                            // siNouveauProduit="false" // dégage
                            siPrixExact="true" // Dégage | Restera toujours à true
                            prix="8,60 €" 
                            etatProduit="Indisponible" // boolean
                            //lien={lienFlasque} rholeczy 19/10/22 : "Il faut vérifier le nombre de flasques"
                        />
                    </div>
                    <div id="page-shop-conditions" class="page-shop-conditions">
                        Le shop AMB ne s'occupe que des goodies et vêtements vendus par l'Asso MIAGE Bordeaux,
                        pour les réservations d'évènements (WEI, WES...etc), dirigez vous vers la page "Events".
                        La commande en ligne n'est en réalité qu'un paiement en ligne. Ce paiement s'effectue via
                        HelloAsso, une solution de gestion de billeterie destinée aux associations. Il s'agit d'un
                        site sécurisé, les différents moyens de paiement acceptés sont : Carte bancaire. Il n'est
                        possible actuellement de venir commander au local de l'Asso MIAGE Bordeaux. Les produits
                        commandés sont
                        à récupérer après d'un membre de l'Asso MIAGE Bordeaux.
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop