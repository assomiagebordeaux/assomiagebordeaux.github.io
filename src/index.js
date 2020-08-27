import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './index.css';

import Accueil from './pages/Accueil';
import Navbar from './modules/Navbar';

const routing = (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Accueil} />
      <Route exact path="/wordpress" component={Accueil} />
      {/* <Route component={Notfound} /> */}
    </Switch>
    {/* <Footer /> */}
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
