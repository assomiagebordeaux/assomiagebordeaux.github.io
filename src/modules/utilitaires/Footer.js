import React, {Component} from 'react';

import '../../assets/design/commun/footer.css'

import Facebook from '../../assets/icons/facebook.png';
import Instagram from '../../assets/icons/instagram.png';
import Linkedin from '../../assets/icons/linkedin.png';
import Messenger from '../../assets/icons/messenger.png';
import Discord from '../../assets/icons/discord.png';
import Mail from '../../assets/icons/mail.png';
import LogoMiage from '../../assets/images/LOGO_MIAGE.png';

class Footer extends Component {
    render() {
        return (
            <div class="module-footer">

                <div class="module-footer-network">
                    <a target="_blank" rel="noopener noreferrer nofollow"
                       href="https://www.facebook.com/assomiagebordeaux">
                        <img class="module-footer-network-icon" src={Facebook} alt="Facebook"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer nofollow"
                       href="https://www.instagram.com/assomiagebordeaux/">
                        <img class="module-footer-network-icon secondMore" src={Instagram} alt="Instagram"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer nofollow"
                       href="https://linkedin.com/company/amb-asso-miage-bordeaux">
                        <img class="module-footer-network-icon secondMore" src={Linkedin} alt="Linkedin"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer nofollow" href="https://m.me/assomiagebordeaux">
                        <img class="module-footer-network-icon secondMore" src={Messenger} alt="Messenger"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer nofollow" href="https://discord.gg/Ky9JU2mWpK">
                        <img class="module-footer-network-icon secondMore" src={Discord} alt="Discord"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer nofollow" href="mailto:asso@miagebordeaux.fr">
                        <img class="module-footer-network-icon secondMore" src={Mail} alt="Mail"/>
                    </a>
                </div>

                <div class="module-footer-mentions">
                    Copyright © 2022 Asso MIAGE Bordeaux. Tous droits réservés.
                </div>

                <a target="_blank" rel="noopener noreferrer nofollow" href="https://miage.emi.u-bordeaux.fr">
                    <img class="module-footer-miage" src={LogoMiage} alt="Facebook"/>
                </a>

            </div>
        );
    };
}

export default Footer