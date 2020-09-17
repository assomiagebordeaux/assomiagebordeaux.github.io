/*
Page index.js
S'occupe de la gestion des differents urls du site web
*/

// Liste des packages necessaires
import React from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// Liste des feuilles css necessaires
import './design/root.css';

// Liste des modules/pages necessaires
import Accueil from './pages/Accueil';
import Navbar from './modules/Navbar';
import Footer from './modules/Footer';
import Page404 from './pages/Page404';

import Events from './pages/Events';
import WEI from './pages/events/WEI-2020';
import Wordpress from './pages/Wordpress'
import ScrollToTop from './pages/ScrollToTop'

// import Contact from './pages/Contact';
import Adhesion from './pages/association/Adhesion';

// Routing du site
const routing = (
  <Router>
    <ScrollToTop>
    <Navbar />
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={Accueil} />
      <Route exact path={process.env.PUBLIC_URL + '/events'} component={Events} />
      <Route exact path="/wordpress" component={Wordpress} />      {/* <Route exact path={process.env.PUBLIC_URL + '/events/aw-amc-jmc'} component={AWAMCJMC} /> */}
      <Route exact path={process.env.PUBLIC_URL + '/communiques/weicingetorix'} component={WEI} />
      {/* <Route exact path="/contact" component={Contact} /> */}
      <Route exact path="/association/adhesion" component={Adhesion} /> 
      <Route component={Page404} />
    </Switch>
    <Footer />
    </ScrollToTop>
  </Router>
)

// Rendu des elements dans la page index.html
ReactDOM.render(
  routing,
  document.getElementById('root')
);
