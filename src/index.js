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
import Events from './pages/Events';
import Page404 from './pages/Page404';
import Contact from './pages/Contact';
import Adhesion from './pages/association/Adhesion';

// Routing du site
const routing = (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Accueil} />
      <Redirect from="/wordpress" to="/" />
      <Route exact path="/events" component={Events} />
      {/* <Route exact path="/contact" component={Contact} /> */}
      <Route exact path="/association/adhesion" component={Adhesion} /> 
      <Route component={Page404} />
    </Switch>
    <Footer />
  </Router>
)

// Rendu des elements dans la page index.html
ReactDOM.render(
  routing,
  document.getElementById('root')
);
