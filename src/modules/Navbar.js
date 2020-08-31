import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../design/commun/navbar.css'

import logo from '../images/LogoAMB.png';

class Navbar extends Component {
    render() {
        const data = {
            linkLogo: "/",
            nameFirst: "Accueil",linkFirst: "/",
            nameSecond: "Events",linkSecond: "/events"
        };
        function displayMenu() {
            var x = document.getElementById("module-navbar-column-menu");
            if (x.style.display === "none") {
                x.style.display = "flex";
            } else {
                x.style.display = "none";
            }
        };
        function hideMenu() {
            var x = document.getElementById("module-navbar-column-menu");
            if (x.style.display === "flex") {
                x.style.display = "none";
            } else {
                x.style.display = "none";
            }
        }
        return(
            <div class="module-navbar">

                <div class="module-navbar-row">
                    <div class="module-navbar-row-logo">
                    <Link class="module-navbar-row-logo-img" to={data.linkLogo}><img src={logo} alt="Logo"/></Link>
                    </div>
                    <div class="module-navbar-row-menu">
                        <div class="module-navbar-row-menu-lien">
                            <Link to={data.linkFirst}>{data.nameFirst}</Link>  
                        </div>
                        <div class="module-navbar-row-menu-lien module-navbar-row-menu-lien-margin-left">
                            <Link to={data.linkSecond}>{data.nameSecond}</Link>
                        </div>
                    </div>
                </div>

                <div class="module-navbar-column">
                    <div class="module-navbar-column-first-row">
                        <div class="module-navbabr-column-first-row-logo">
                            <Link class="module-navbabr-column-first-row-logo-img" to={data.linkLogo} onClick={hideMenu}><img src={logo} alt="Logo"/></Link>
                        </div>
                        <div className="module-navbabr-column-first-row-icon" onClick={displayMenu}>
                            <i class="fa fa-bars"></i>
                        </div>
                    </div>
                    <div id="module-navbar-column-menu" class="module-navbar-column-menu">
                        <div class="module-navbar-column-menu-lien">
                            <Link to={data.linkFirst} onClick={hideMenu}>{data.nameFirst}</Link>  
                        </div>
                        <div class="module-navbar-column-menu-lien module-navbar-column-menu-lien-marginTop">
                            <Link to={data.linkSecond} onClick={hideMenu}>{data.nameSecond}</Link>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Navbar