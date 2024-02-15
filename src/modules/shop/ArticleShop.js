import React from 'react';

import '../../design/commun/articleShop.css';

import IllustrationTop from '../../images/shop.jpg';

export function ArticleShop(props) {

    return (
        <div class="module-articleShop">
            <div class="module-articleShop-illustrationTop" style={{backgroundImage: "url(" + IllustrationTop + ")"}}>
                <div class="module-articleShop-illustrationTop-title">
                    Shop AMB
                </div>
            </div>
            <div class="module-articleShop-margin">
                <div class="module-articleShop-content">
                    <div class="module-articleShop-content-infos">
                        <div class="module-articleShop-content-infos-siNouveau">
                            Nouveau
                        </div>
                        <div class="module-articleShop-content-infos-nomArticle">
                            Sweat x
                        </div>
                        <div class="module-articleShop-content-infos-prix">

                        </div>
                        <div class="module-articleShop-content-infos-disponibilite">

                        </div>
                        <div class="module-articleShop-content-infos-coloris">

                        </div>
                        <div class="module-articleShop-content-infos-tailles">

                        </div>
                        <div class="module-articleShop-content-infos-detailsCommande">

                        </div>
                        <div class="module-articleShop-content-infos-retraitCommande">

                        </div>
                        <div class="module-articleShop-content-infos-infosProduit">

                        </div>
                        <div class="module-articleShop-content-infos-commander">

                        </div>
                    </div>
                    <div class="module-articleShop-content-gallery">

                    </div>
                </div>
            </div>
        </div>
    );

}

export default ArticleShop;