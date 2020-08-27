import React from 'react';
import './App.css';
import LogoAMB from './images/LogoAMB.png';

function App() {
  return (
    <div class="content">
      <div class="content-bloc">
        <img class="content-logo" src={LogoAMB} alt="Logo AMB"></img>
        <div class="content-bloc-description">Bientôt de retour...</div>
      </div>
    </div>
  );
}

export default App;
