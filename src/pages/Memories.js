import React, {Component} from 'react';

import {Tuile} from '../modules/Tuile';

import MemoriesIllustration from '../images/memories.jpg';

// WEI 2022
import WEI20222023_1 from '../images/memories/2022-2023-wei/WEI2022_1.png';
import WEI20222023_2 from '../images/memories/2022-2023-wei/WEI2022_2.png';
import WEI20222023_3 from '../images/memories/2022-2023-wei/WEI2022_3.png';
import WEI20222023_4 from '../images/memories/2022-2023-wei/WEI2022_4.png';
import WEI20222023_5 from '../images/memories/2022-2023-wei/WEI2022_5.png';
import WEI20222023_6 from '../images/memories/2022-2023-wei/WEI2022_6.png';

// WEI 2021
import WEI20212022_1 from '../images/memories/2021-2022-wei/WEI2021_1.jpg';
import WEI20212022_2 from '../images/memories/2021-2022-wei/WEI2021_2.jpg';
import WEI20212022_3 from '../images/memories/2021-2022-wei/WEI2021_3.jpg';
import WEI20212022_4 from '../images/memories/2021-2022-wei/WEI2021_4.jpg';
import WEI20212022_5 from '../images/memories/2021-2022-wei/WEI2021_5.jpg';
import WEI20212022_6 from '../images/memories/2021-2022-wei/WEI2021_6.png';

// AW DE RENTREE 2021/2022
import AW20212022_1 from '../images/memories/2021-2022-aw-rentree-amb-jmc/AW20212022_1.jpg';
import AW20212022_2 from '../images/memories/2021-2022-aw-rentree-amb-jmc/AW20212022_2.jpeg';
import AW20212022_3 from '../images/memories/2021-2022-aw-rentree-amb-jmc/AW20212022_3.jpeg';
import AW20212022_4 from '../images/memories/2021-2022-aw-rentree-amb-jmc/AW20212022_4.jpeg';
import AW20212022_5 from '../images/memories/2021-2022-aw-rentree-amb-jmc/AW20212022_5.jpeg';

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

        return (
            <div class="page-memories">
                <div style={{backgroundImage: "url(" + MemoriesIllustration + ")"}} class="page-memories-illustration">
                    <div class="page-memories-illustration-infos">
                        <div class="page-memories-illustration-infos-titre">Memories</div>
                        <div class="page-memories-illustration-infos-subtitle">Les souvenirs miagistes d'une décennie
                        </div>
                    </div>
                </div>
                <div class="page-memories-content">
                    <div class="page-memories-content-margin">

                        {/* <div class="page-memories-content-one-title">Nouveauté</div> */}

                        <div className="page-memories-content-one-title">2022/2023</div>
                        <section className="page-memories-content-tuiles">
                            <Tuile
                                display="true"
                                type="memories"
                                siVideo="true"
                                nombreImages="5"
                                img1={WEI20222023_1}
                                img2={WEI20222023_2}
                                img3={WEI20222023_3}
                                img4={WEI20222023_4}
                                img5={WEI20222023_5}
                                titreGauche="MIAGE WEI-LANTA"
                                titreDroite="1-2 oct."
                                description=" Si toi aussi tu es un vrai aventurier, alors arbore ton plus beau bandana et sois le dernier à rester debout dans ce WEI-LANTA !"
                                lien="https://photos.app.goo.gl/ZTiHth3f8XSvUjgv5"
                                siNouveau="true"
                                siDateDeDispo="false"
                                jourDispo="10"
                                moisDispo="octobre"
                                anneeDispo="2022"
                                siPremierListe="true"
                            />
                            <Tuile
                                display="true"
                                type="memories"
                                siVideo="true"
                                nombreImages="1"
                                img1={WEI20222023_6}
                                titreGauche="MIAGE WEI-LANTA : Aftermovie"
                                titreDroite="1-2 oct."
                                description="WEI-LANTA Aftermovie disponible maintenant !"
                                lien="https://photos.app.goo.gl/ivXVSUFXkNtAV4qt6"
                                siNouveau="true"
                                siDateDeDispo="false"
                                jourDispo="10"
                                moisDispo="octobre"
                                anneeDispo="2022"
                                siPremierListe="false"
                            />
                        </section>

                        <div class="page-memories-content-title">2021/2022</div>
                        <section class="page-memories-content-tuiles">
                            <Tuile
                                display="true"
                                type="memories"
                                nombreImages="5"
                                img1={AW20212022_1}
                                img2={AW20212022_2}
                                img3={AW20212022_3}
                                img4={AW20212022_4}
                                img5={AW20212022_5}
                                titreGauche="Afterwork de rentrée"
                                titreDroite="8 sept."
                                description="Quoi de mieux pour accueillir les nouveaux miagistes bordelais qu'une soirée de rentrée au Carnaval Café ?"
                                lien="https://photos.app.goo.gl/ZFY9KoQDHiNK9KxdA"
                                siNouveau="false"
                                siDateDeDispo="false"
                                jourDispo="15"
                                moisDispo="septembre"
                                anneeDispo="2021"
                                siPremierListe="true"
                            />
                            <Tuile
                                display="true"
                                type="memories"
                                siVideo="true"
                                nombreImages="5"
                                img1={WEI20212022_1}
                                img2={WEI20212022_2}
                                img3={WEI20212022_3}
                                img4={WEI20212022_4}
                                img5={WEI20212022_5}
                                titreGauche="MIAGE Infinity WEI"
                                titreDroite="2-3 oct."
                                description="Mettez votre armure et embarquez sur l'héliporteur pour le retour du WEI MIAGE Bordeaux."
                                lien="https://photos.app.goo.gl/6z88S7tq7t5gRhLu9"
                                siNouveau="false"
                                siDateDeDispo="false"
                                jourDispo="15"
                                moisDispo="octobre"
                                anneeDispo="2021"
                                siPremierListe="false"
                            />

                            <Tuile
                                display="true"
                                type="memories"
                                siVideo="true"
                                nombreImages="1"
                                img1={WEI20212022_6}
                                titreGauche="MIAGE Infinity WEI : Aftermovie"
                                titreDroite="2-3 oct."
                                description="Mieux qu'un Avengers !"
                                lien="https://photos.app.goo.gl/G2fuiPqFaAceNGgh7"
                                siNouveau="false"
                                siDateDeDispo="false"
                                jourDispo="15"
                                moisDispo="octobre"
                                anneeDispo="2021"
                                siPremierListe="false"
                            />
                        </section>

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
                                lien="https://photos.app.goo.gl/16uNVnuAiExH8x7L9"
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
                                lien="https://photos.app.goo.gl/55np4ZhsB6fuuHK19"
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
                                lien="https://photos.app.goo.gl/e6vHKZ4yTc8gXTx77 "
                                siNouveau="false"
                                siDateDeDispo="false"
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
                                lien="https://photos.app.goo.gl/zoatuP4ARZVPH4ko7"
                                siNouveau="false"
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
                                lien="https://photos.app.goo.gl/1Z8xusN4hfWon7JY6"
                                siNouveau="false"
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
                                lien="https://photos.app.goo.gl/DXjqLghCqJGuCxzd7"
                                siNouveau="false"
                                siDateDeDispo="false"
                                jourDispo=""
                                moisDispo="décembre"
                                anneeDispo="2020"
                                siPremierListe="false"
                            />
                        </section>

                    </div>
                    <div id="page-memories-conditions" class="page-memories-conditions">
                        Toutes les photos sont stockées sur Google Photos de manière sécurisée.
                        Vous pouvez télécharger l'application Google Photos pour <a
                        href="https://apps.apple.com/fr/app/google-photos/id962194608" target="_blank"
                        rel="noopener noreferrer nofollow">iOS</a> et <a
                        href="https://play.google.com/store/apps/details?id=com.google.android.apps.photos&hl=fr"
                        target="_blank" rel="noopener noreferrer nofollow">Android</a>.
                        Si vous souhaitez signaler une ou plusieurs photos pour qu'elle(s) soi(en)t retirée(s), veuillez
                        nous communiquer votre nom, prénom, la capture d'écran de la ou des dite(s) photo(s),
                        ainsi qu'un paragraphe explicatif. Envoyez le tout à cette adresse mail : asso@miagebordeaux.fr
                        ou en cliquant <a href="mailto:asso@miagebordeaux.fr">ici</a>.
                    </div>
                </div>
            </div>
        );
    }
}

export default Memories