import React, {Component} from 'react';

import {Tuile} from '../../modules/utilitaires/Tuile';

import MemoriesIllustration from '../../assets/images/memories.jpg';

// WEI 2022
import WEI20222023_1 from '../../assets/images/memories/2022-2023-wei/WEI2022_1.png';

import '../../assets/design/pages/memories.css'

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