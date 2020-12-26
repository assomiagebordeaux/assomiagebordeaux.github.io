import React, { Component } from 'react';

import {Tuile} from '../modules/Tuile';

import MemoriesIllustration from '../images/memories.jpg';

// Christmas Part 2019/2020
import CP20192020_1 from '../images/memories/2019-2020-christmas-party/CP20192020_1.jpg';
import CP20192020_2 from '../images/memories/2019-2020-christmas-party/CP20192020_2.jpg';
import CP20192020_3 from '../images/memories/2019-2020-christmas-party/CP20192020_3.jpg';
import CP20192020_4 from '../images/memories/2019-2020-christmas-party/CP20192020_4.jpg';
import CP20192020_5 from '../images/memories/2019-2020-christmas-party/CP20192020_5.jpg';

// WEI 2019/2020
import WEI20192020_1 from '../images/memories/2019-2020-wei/WEI20192020_1.jpg';
import WEI20192020_2 from '../images/memories/2019-2020-wei/WEI20192020_2.jpg';
import WEI20192020_3 from '../images/memories/2019-2020-wei/WEI20192020_3.jpg';
import WEI20192020_4 from '../images/memories/2019-2020-wei/WEI20192020_4.jpg';
import WEI20192020_5 from '../images/memories/2019-2020-wei/WEI20192020_5.jpg';

// SI 2019/2020
import SI20192020_1 from '../images/memories/2019-2020-soiree-integration/SI20192020_1.jpg';
import SI20192020_2 from '../images/memories/2019-2020-soiree-integration/SI20192020_2.jpg';
import SI20192020_3 from '../images/memories/2019-2020-soiree-integration/SI20192020_3.jpg';
import SI20192020_4 from '../images/memories/2019-2020-soiree-integration/SI20192020_4.jpg';
import SI20192020_5 from '../images/memories/2019-2020-soiree-integration/SI20192020_5.jpg';

//WES 2019/2020
import WES20192020_1 from '../images/memories/2019-2020-wes/WES20192020_1.jpg';

//GALA 2018/2019
import GALA20182019_1 from '../images/memories/2018-2019-gala/GALA20182019_1.jpg';
import GALA20182019_2 from '../images/memories/2018-2019-gala/GALA20182019_2.jpg';
import GALA20182019_3 from '../images/memories/2018-2019-gala/GALA20182019_3.jpg';
import GALA20182019_4 from '../images/memories/2018-2019-gala/GALA20182019_4.jpg';
import GALA20182019_5 from '../images/memories/2018-2019-gala/GALA20182019_5.jpg';

//WEI 2018/2019
import WEI20182019_1 from '../images/memories/2018-2019-wei/WEI20182019_1.jpg';
import WEI20182019_2 from '../images/memories/2018-2019-wei/WEI20182019_2.jpg';
import WEI20182019_3 from '../images/memories/2018-2019-wei/WEI20182019_3.jpg';
import WEI20182019_4 from '../images/memories/2018-2019-wei/WEI20182019_4.jpg';
import WEI20182019_5 from '../images/memories/2018-2019-wei/WEI20182019_5.jpg';

//SI 2018/2019
import SI20182019_1 from '../images/memories/2018-2019-soiree-integration/SI20182019_1.jpg';
import SI20182019_2 from '../images/memories/2018-2019-soiree-integration/SI20182019_2.jpg';
import SI20182019_3 from '../images/memories/2018-2019-soiree-integration/SI20182019_3.jpg';
import SI20182019_4 from '../images/memories/2018-2019-soiree-integration/SI20182019_4.jpg';
import SI20182019_5 from '../images/memories/2018-2019-soiree-integration/SI20182019_5.jpg';

import '../design/pages/memories.css'

class Memories extends Component {
    
    render() {

        return(
            <div class="page-memories">
                <div style ={{ backgroundImage: "url("+MemoriesIllustration+")" }}  class="page-memories-illustration">
                    <div class="page-memories-illustration-infos">
                        <div class="page-memories-illustration-infos-titre">Memories</div>
                        <div class="page-memories-illustration-infos-subtitle">Les souvenirs miagistes d'une décennie</div>
                    </div>
                </div>
                <div class="page-memories-content">
                    <div class="page-memories-content-margin">



                        <div class="page-memories-content-title">2019/2020</div>
                        <section class="page-memories-content-tuiles">
                            <Tuile
                            display="true" 
                            type="memories"
                            nombreImages="5"
                            img1={SI20192020_1}
                            img2={SI20192020_2}
                            img3={SI20192020_3}
                            img4={SI20192020_4}
                            img5={SI20192020_5}
                            titreGauche="Soirée d'intégration"
                            titreDroite="11 sept."
                            description="C'était l'ÉVÈNEMENT de la rentrée 2019 ! Venez (re)vivre la dernière soirée de l'été et l'intégration des nouveaux miagistes !"
                            lien="https://photos.app.goo.gl/Df1jHHHX5gF6mYqJ7"
                            siNouveau="false"
                            siDateDeDispo="false"
                            jourDispo="15"
                            moisDispo="novembre"
                            anneeDispo="2020"
                            siPremierListe="true"
                            />
                            <Tuile
                            display="true" 
                            type="memories"
                            nombreImages="5"
                            img1={WEI20192020_1}
                            img2={WEI20192020_2}
                            img3={WEI20192020_3}
                            img4={WEI20192020_4}
                            img5={WEI20192020_5}
                            titreGauche="Captain Croch'WEI"
                            titreDroite="5-6 oct."
                            description="Embarquez moussaillons, fiers z'et hardis, avec le Captain Croch'WEI pour un week-end explosif !"
                            lien="https://photos.app.goo.gl/c7NTEZ9FSbMVmkke6"
                            siNouveau="false"
                            siDateDeDispo="false"
                            jourDispo="3"
                            moisDispo="octobre"
                            anneeDispo="2020"
                            siPremierListe="false"
                            />
                            <Tuile
                            display="true" 
                            type="memories"
                            nombreImages="5"
                            img1={CP20192020_1}
                            img2={CP20192020_2}
                            img3={CP20192020_3}
                            img4={CP20192020_4}
                            img5={CP20192020_5}
                            titreGauche="Christmas Party"
                            titreDroite="20 dec."
                            description="Sortez vos plus beaux pulls de Noël pour la soirée de fin d'année concoctée par vos cinq assos préférées !"
                            lien="https://photos.app.goo.gl/3Zj3xeYxbhALt5ep6"
                            siNouveau="true"
                            siDateDeDispo="false"
                            jourDispo=""
                            moisDispo="décembre"
                            anneeDispo="2020"
                            siPremierListe="false"
                            />
                            <Tuile
                            display="false" 
                            type="memories"
                            nombreImages="1"
                            img1={WES20192020_1}
                            img2=""
                            img3=""
                            img4=""
                            img5=""
                            titreGauche="MIAGE on Snow"
                            titreDroite="8-9 fev."
                            description="Un WES miagiste c'est forcément : des bières en terrasse, une tartiflette, du vin rouge, une soirée, ABBA et ... du ski !"
                            lien=""
                            siNouveau="false"
                            siDateDeDispo="true"
                            jourDispo=""
                            moisDispo="décembre"
                            anneeDispo="2020"
                            siPremierListe="false"
                            />
                        </section>

                        <div class="page-memories-content-title">2018/2019</div>
                        <section class="page-memories-content-tuiles">
                        <Tuile
                            display="true" 
                            type="memories"
                            nombreImages="5"
                            img1={SI20182019_1}
                            img2={SI20182019_2}
                            img3={SI20182019_3}
                            img4={SI20182019_4}
                            img5={SI20182019_5}
                            titreGauche="Soirée d'intégration"
                            titreDroite="12 sept."
                            description="Redécouvrez l'évènement de cette fin d'été : la soirée d'intégration des nouveaux miagistes très très 'chillance' (ou pas) !"
                            lien="https://photos.app.goo.gl/TB6oPE5htS9ezJqE8"
                            siNouveau="true"
                            siDateDeDispo="false"
                            jourDispo=""
                            moisDispo="décembre"
                            anneeDispo="2020"
                            siPremierListe="true"
                            />
                        <Tuile
                            display="true" 
                            type="memories"
                            nombreImages="5"
                            img1={WEI20182019_1}
                            img2={WEI20182019_2}
                            img3={WEI20182019_3}
                            img4={WEI20182019_4}
                            img5={WEI20182019_5}
                            titreGauche="FarWEI'st"
                            titreDroite="6-7 oct."
                            description="Chevauchez vers le Grand Ouest, passez par le saloon (sans en repartir) ou le feu de camp (sans vous brûler) et proftez du FarWEI'st !"
                            lien="https://photos.app.goo.gl/mpCBVsd1HADCDS7x7"
                            siNouveau="true"
                            siDateDeDispo="false"
                            jourDispo=""
                            moisDispo="décembre"
                            anneeDispo="2020"
                            siPremierListe="false"
                            />
                        <Tuile
                            display="true" 
                            type="memories"
                            nombreImages="5"
                            img1={GALA20182019_1}
                            img2={GALA20182019_2}
                            img3={GALA20182019_3}
                            img4={GALA20182019_4}
                            img5={GALA20182019_5}
                            titreGauche="Gala MIAGE"
                            titreDroite="5 avr."
                            description="Revivez la soirée de cette 11ème édition du Gala MIAGE placée sous le signe des contes traditionnels ! "
                            lien="https://photos.app.goo.gl/2vvDXGXhtvcYpExS8"
                            siNouveau="true"
                            siDateDeDispo="false"
                            jourDispo=""
                            moisDispo="décembre"
                            anneeDispo="2020"
                            siPremierListe="false"
                            />
                        </section>

                    </div> 
                    <div id ="page-memories-conditions" class="page-memories-conditions">
                        Toutes les photos sont stockées sur Google Photos de manière sécurisée. 
                        Vous pouvez télécharger l'application Google Photos pour <a href="https://apps.apple.com/fr/app/google-photos/id962194608" target="_blank" rel="noopener noreferrer nofollow">iOS</a> et <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.photos&hl=fr" target="_blank" rel="noopener noreferrer nofollow">Android</a>. 
                        Si vous souhaitez signaler une ou plusieurs photos pour qu'elle(s) soi(en)t retirée(s), veuillez nous communiquer votre nom, prénom, la capture d'écran de la ou des dite(s) photo(s), 
                        ainsi qu'un paragraphe explicatif. Envoyez le tout à cette adresse mail : asso@miagebordeaux.fr 
                        ou en cliquant <a href="mailto:asso@miagebordeaux.fr">ici</a>.
                    </div>  
                </div>
            </div>
        );
    }
}

export default Memories