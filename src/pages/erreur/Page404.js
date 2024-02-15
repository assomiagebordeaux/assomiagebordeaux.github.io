import React, {Component} from 'react';

import '../../assets/design/pages/page404.css'

import {Button} from '../../modules/utilitaires/Button'

class Page404 extends Component {
    render() {
        return (
            <div class="page-404">
                <div class="page-404-bloc">
                    <div class="page-404-bloc-titre">Page non trouvée</div>
                    <div class="page-404-bloc-description">Cette page n'existe pas ou n'existe plus.</div>
                    <div class="page-404-bloc-buttons">
                        <Button
                            color="bleuAMB"
                            label="Revenir à l'accueil"
                            link="/"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Page404