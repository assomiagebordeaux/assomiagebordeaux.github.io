import React, { Component } from 'react';

import {Tuile} from '../../modules/Tuile';

import ShopIllustration from '../../images/shop.jpg';
import Sweat2021 from '../../images/shop/sweat2021.png';
import FlasqueAMB from '../../images/shop/flasqueAMB.png'

import '../../design/pages/shop.css';

class Shop extends Component {
    
    render() {

        return(
            <div class="page-shop">
                <div style ={{ backgroundImage: "url("+ShopIllustration+")" }}  class="page-shop-illustration">
                    <div class="page-shop-illustration-infos">
                        <div class="page-shop-illustration-infos-titre">Shop AMB</div>
                        <div class="page-shop-illustration-infos-subtitle">La panoplie complète du bon miagiste</div>
                    </div>
                </div>
                <div class="page-shop-content">
                    <div class="page-shop-articles">
                        <Tuile 
                        display="true"
                        type="shop"
                        imageProduit={Sweat2021}
                        nomProduit="Sweat Straight Outta Miage Bordeaux 2021"
                        siNouveauProduit="true"
                        siPrixExact="false"
                        prix="35,00 €"
                        etatProduit="Indisponible"
                        lien="/shop/sweat2021"
                        />
                        <Tuile 
                        display="true"
                        type="shop"
                        imageProduit={FlasqueAMB}
                        nomProduit="Flasque AMB"
                        siNouveauProduit="false"
                        siPrixExact="true"
                        prix="8,00 €"
                        etatProduit="En stock"
                        lien=""
                        />
                    </div> 
                    <div id ="page-shop-conditions" class="page-shop-conditions">
                        Le shop AMB ne s'occupe que des goodies et vêtements vendus par l'Asso MIAGE Bordeaux, 
                        pour les réservations d'évènements (WEI, WES...etc), dirigez vous vers la page "Events".
                        La commande en ligne n'est en réalité qu'un paiement en ligne. Ce paiement s'effectue via
                        HelloAsso, une solution de gestion de billeterie destinée aux associations. Il s'agit d'un
                        site sécurisé, les différents moyens de paiement acceptés sont notés sur chaque page produit.
                        Les conditions de retrait sont expliqués sur chaque page produit. Généralement, les produits
                        commandés sont à récupérer au local de l'AMB.
                    </div>  
                </div>
            </div>
        );
    }
}

export default Shop