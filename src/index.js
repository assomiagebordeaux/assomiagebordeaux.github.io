/*
Page index.js
S'occupe de la gestion des differents urls du site web
*/

// Liste des packages necessaires
import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

// Liste des feuilles css necessaires
import './assets/design/root.css';

// Liste des modules/pages necessaires
import Accueil from './pages/Accueil';
import Navbar from './modules/utilitaires/Navbar';
import Footer from './modules/utilitaires/Footer';
import Page404 from './pages/erreur/Page404';
import Memories from './pages/memories/Memories';
import Shop from './pages/shop/Shop';

import Events from './pages/events/Events';
import Wordpress from './pages/utilitaires/Wordpress';
import ScrollToTop from './pages/utilitaires/ScrollToTop';
import Breviaire from './pages/association/Breviaire';

// import Contact from './pages/Contact';
import Adhesion from './pages/association/Adhesion';

// Routing du site
const routing = (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
        <ScrollToTop>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Accueil}/>
                <Route exact path='/events' component={Events}/>
                <Route exact path='/memories' component={Memories}/>
                <Route exact path='/shop' component={Shop}/>
                <Route exact path='/breviaire' component={Breviaire}/>
                <Route exact path='/association/adhesion' component={Adhesion}/>

                <Route exact path='/wordpress' component={Wordpress}/>
                <Route component={Page404}/>
            </Switch>
            <Footer/>
        </ScrollToTop>
    </Router>
)

// Rendu des elements dans la page index.html
ReactDOM.render(
    routing,
    document.getElementById('root')
);
