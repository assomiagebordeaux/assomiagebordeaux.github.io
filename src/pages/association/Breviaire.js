import React, {Component} from 'react';
import Button from '../../modules/utilitaires/Button';

import '../../assets/design/pages/breviaire.css'

import BreviairePDF from '../../assets/docs/BreviaireV1.1.pdf';

import Illustration from '../../assets/images/Breviaire-Illustration.jpg';

class Breviaire extends Component {

    render() {

        return (

            <div class="page-breviaire">
                <div style={{backgroundImage: "url(" + Illustration + ")"}} class="page-breviaire-illustration">
                    <div class="page-breviaire-illustration-infos">
                        <div class="page-breviaire-illustration-infos-titre">Bréviaire</div>
                        <div class="page-breviaire-illustration-infos-subtitle">Allez ! On se choppe par le cou et on se
                            balance !
                        </div>
                    </div>
                </div>
                <div class="page-breviaire-content">
                    <div class="page-breviaire-content-margin">
                        <div class="page-brevaire-content-infos">
                            Voici le bréviaire de l'AMB ! A utiliser sans modération !
                        </div>
                        <div class="page-breviaire-content-new">
                            NOUVELLE VERSION DISPONIBLE avec "La ronde" et "Les mois de l'année" !
                        </div>
                        <div class="page-brevaire-content-link">
                            <Button
                                typeBouton="externe"
                                color="bleuAMB"
                                label="Accéder au bréviaire"
                                link={BreviairePDF}
                            />
                        </div>
                        <div class="page-brevaire-content-astuce">
                            Cette page n'est pas publique. Pour retrouver plus facilement le bréviaire, enregistrez
                            cette page dans vos favoris !
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Breviaire