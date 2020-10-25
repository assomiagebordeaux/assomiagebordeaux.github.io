import React, { Component } from 'react';

import {Tuile} from '../../modules/Tuile';

import ShopIllustration from '../../images/shop.jpg';
import Sweat2021Black from '../../images/shop/Pull_Black.png';
import Sweat2021Blue from '../../images/shop/Pull_Blue.png';

import '../../design/pages/shop.css';

class Shop extends Component {
    
    render() {

    const titreInfoSweats = "Profitez d'un tarif avantageux sur le sweat de promo en étant adhérent : à partir de 27€ au lieu de 29€ ! Vous n'êtes pas adhérent ? Venez adhérer au local lors de votre commande ou choisissez le tarif avec Adhésion 2020/2021 sur HelloAsso pour gagner du temps !";
    const lienSweats = "https://www.helloasso.com/associations/asso-miage-bordeaux/evenements/pull-de-promo-de-la-miage-de-bordeaux-edition-2020-2021";
        return(
            <div class="page-shop">
                <div style ={{ backgroundImage: "url("+ShopIllustration+")" }}  class="page-shop-illustration">
                    <div class="page-shop-illustration-infos">
                        <div class="page-shop-illustration-infos-titre">Shop AMB</div>
                        <div class="page-shop-illustration-infos-subtitle">La panoplie complète du bon miagiste</div>
                    </div>
                </div>
                <Tuile
                display="true"
                type="info"
                texte={titreInfoSweats}
                typeInfo="info"
                siBouton="false"
                typeBouton="interne"
                buttonColor="white"
                buttonLink="/association/adhesion"
                buttonLabel="J'adhère"
                />
                <div class="page-shop-content">
                    <div class="page-shop-articles">
                        <Tuile 
                        display="true"
                        type="shop"
                        imageProduit={Sweat2021Black}
                        nomProduit="Sweat Straight Outta Miage Bordeaux 2020/2021 - Noir"
                        siNouveauProduit="true"
                        siPrixExact="false"
                        prix="27,00 €"
                        etatProduit="Disponible"
                        lien={lienSweats}
                        />
                        <Tuile 
                        display="true"
                        type="shop"
                        imageProduit={Sweat2021Blue}
                        nomProduit="Sweat Straight Outta Miage Bordeaux 2020/2021 - Bleu Marine"
                        siNouveauProduit="true"
                        siPrixExact="false"
                        prix="27,00 €"
                        etatProduit="Disponible"
                        lien={lienSweats}
                        />
                    </div> 
                    <div id ="page-shop-conditions" class="page-shop-conditions">
                        Le shop AMB ne s'occupe que des goodies et vêtements vendus par l'Asso MIAGE Bordeaux, 
                        pour les réservations d'évènements (WEI, WES...etc), dirigez vous vers la page "Events".
                        La commande en ligne n'est en réalité qu'un paiement en ligne. Ce paiement s'effectue via
                        HelloAsso, une solution de gestion de billeterie destinée aux associations. Il s'agit d'un
                        site sécurisé, les différents moyens de paiement acceptés sont : Carte bancaire. Il est 
                        possible de venir commander au local de l'Asso MIAGE Bordeaux. Les produits commandés sont 
                        à récupérer au local de l'AMB.
                    </div>  
                </div>
            </div>
        );
    }
}

export default Shop