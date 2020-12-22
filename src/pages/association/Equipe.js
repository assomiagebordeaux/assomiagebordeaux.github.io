import React, { Component } from 'react';

import '../../design/pages/association/equipe.css'

// import {Button} from "../../modules/Button"

class Equipe extends Component {
    render() {

        return(
            <div class="page-equipe">
                <div style ={{ backgroundImage: "url("+ShopIllustration+")" }}  class="page-equipe-illustration">
                    <div class="page-equipe-illustration-infos">
                        <div class="page-equipe-illustration-infos-titre">L'équipe AMB</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Adhesion