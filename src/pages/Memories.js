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
                                // siVideo="true" // dégage
                                // nombreImages="1" // dégage
                                img1={WEI20222023_1} // dégage
                                // img2={WEI20222023_2} // dégage
                                // img3={WEI20222023_3} // dégage
                                // img4={WEI20222023_4} // dégage
                                // img5={WEI20222023_5} // dégage
                                titreGauche="MIAGE WEI-LANTA" // Titre principal 
                                dateMemories="1-2 oct." // date (+ année) | En fonction de l'année -> Trie
                                description=" Si toi aussi tu es un vrai aventurier, alors arbore ton plus beau bandana et sois le dernier à rester debout dans ce WEI-LANTA !"
                                lien="https://photos.app.goo.gl/ZTiHth3f8XSvUjgv5"
                                siNouveau="true"
                                // siDateDeDispo="false" // dégage
                                // jourDispo="10" // dégage
                                // moisDispo="octobre" // dégage
                                // anneeDispo="2022" // dégage
                                // siPremierListe="true" // En fonction de la date (pas pertinent)
                            />
                        </section>

                        <div class="page-memories-content-title">2021/2022</div>
                        <section class="page-memories-content-tuiles">
                        </section>

                        <div class="page-memories-content-title">2019/2020</div>
                        <section class="page-memories-content-tuiles">
                        </section>

                        <div class="page-memories-content-title">2018/2019</div>
                        <section class="page-memories-content-tuiles">
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