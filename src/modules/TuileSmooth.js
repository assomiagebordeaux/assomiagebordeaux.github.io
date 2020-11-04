import React from 'react';
import { Link } from 'react-router-dom';

import '../design/commun/tuileSmooth.css';
import '../design/commun/button.css'

import {Button} from './Button'

export function TuileSmooth(props) {

    var colorBG = '#F2F2F2';
    var colorTitres = 'black';
    var colorBoutons = 'bleuAMB';
    var marginB = '12px';
    var fontFTitre1 = 'GothamMedium';

    if(props.backgroundColor === "black") {
        colorBG = 'black';
        colorTitres = '#F5F5F7';
        colorBoutons = 'white';
    }

    if(props.siMarginBottom === "false"){
        marginB = '0px';
    }

    const styleModule = {
        backgroundColor: colorBG,
        marginBottom: marginB
    }

    if(props.titre1FontFamily === "StraightOuttaAMB"){
        fontFTitre1 = 'StraightOuttaAMB'
    } else if(props.titre1FontFamily === "Memories"){
        fontFTitre1 = 'Memories'
    } else if(props.titre1FontFamily === "Movember"){
        fontFTitre1 = 'Movember'
    } 

    const styleTitre1 = {
        fontFamily: fontFTitre1,
        color: colorTitres
    }

    // Set the date we're counting down to
var countDownDate = new Date("Nov 9, 2020 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var labelDay = " "+days+"J";
  var labelHour = " "+hours+"H";
  var labelMinute = " "+minutes+"M";
  var labelSecond = " "+seconds+"S";

  if(days == 0){
      labelDay = "";
  }

  if(hours == 0) {
      labelHour = "";
  }

  if(minutes == 0) {
      labelMinute = "";
  }

  if(seconds == 0){
    labelSecond = "";
}

  // Display the result in the element with id="demo"
//   document.getElementById("countdown").innerHTML = "Fin dans "+days + "J " + hours + "H "
//   + minutes + "M " + seconds + "S ";

  document.getElementById("countdown").innerHTML = "Fin dans"+labelDay+labelHour+labelMinute+labelSecond;

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

    if(props.typeSmooth === "simple") {
        return (
            <div class="module-tuileSmooth" style ={styleModule}>
                <div class="module-tuileSmooth-margin">
                    <div class="module-tuileSmooth-infos">
                        { props.countdown === "true" ?
                        <div id="countdown" class="module-tuileSmooth-infos-countdown">

                        </div>
                        :
                        <div></div>
                        }
                        <div id ="titre1" class="module-tuileSmooth-infos-titre1" style ={styleTitre1}>
                            {props.titre1}
                        </div>
                        <div class="module-tuileSmooth-infos-titre2" style ={{ color: colorTitres}}>
                            {props.titre2}
                        </div>
                        <div class="module-tuileSmooth-infos-titre3" style ={{ color: colorTitres}}>
                            {props.titre3}
                        </div>
                        { props.siImage === "true" ? 
                        <div class="module-tuileSmooth-infos-boutons margin-bottom-boutons">
                            { props.nombreBoutons === "" || props.nombreBoutons === "0" ?
                            <div></div> 
                            :
                            <div></div>
                            }
                            { props.nombreBoutons === "1" ?
                            <div class="module-tuileSmooth-infos-boutons-1">
                            <Button
                            typeBouton={props.bouton1Type}
                            color={colorBoutons}
                            label={props.bouton1Label}
                            link={props.bouton1Link}
                            />
                            </div>
                            :
                            <div></div>
                            }
                            {props.nombreBoutons === "2" ?
                            <div class="module-tuileSmooth-infos-boutons-2">
                                <div class="module-tuileSmooth-infos-boutons-left">
                                <Button
                                typeBouton={props.bouton1Type}
                                color={colorBoutons}
                                label={props.bouton1Label}
                                link={props.bouton1Link}
                                />
                                </div>
                                <div class="module-tuileSmooth-infos-boutons-right">
                                <Button
                                typeBouton={props.bouton2Type}
                                color={colorBoutons}
                                label={props.bouton2Label}
                                link={props.bouton2Link}
                                />
                                </div>
                            </div>
                            :
                            <div></div>
                            }
                            
                        </div>
                        :
                        <div class="module-tuileSmooth-infos-boutons">
                            { props.nombreBoutons === "" || props.nombreBoutons === "0" ?
                            <div></div> 
                            :
                            <div></div>
                            }
                            { props.nombreBoutons === "1" ?
                            <div class="module-tuileSmooth-infos-boutons-1">
                            <Button
                            typeBouton={props.bouton1Type}
                            color={colorBoutons}
                            label={props.bouton1Label}
                            link={props.bouton1Link}
                            />
                            </div>
                            :
                            <div></div>
                            }
                            {props.nombreBoutons === "2" ?
                            <div class="module-tuileSmooth-infos-boutons-2">
                                <div class="module-tuileSmooth-infos-boutons-left">
                                <Button
                                typeBouton={props.bouton1Type}
                                color={colorBoutons}
                                label={props.bouton1Label}
                                link={props.bouton1Link}
                                />
                                </div>
                                <div class="module-tuileSmooth-infos-boutons-right">
                                <Button
                                typeBouton={props.bouton2Type}
                                color={colorBoutons}
                                label={props.bouton2Label}
                                link={props.bouton2Link}
                                />
                                </div>
                            </div>
                            :
                            <div></div>
                            }
                            
                        </div>
                        }
                    </div>
                    { props.siImage === "true" ? 
                    <div class="module-tuileSmooth-image">
                        <img src={props.image} alt={props.title} />
                    </div>
                    :
                    <div></div>
                    }
                </div>
            </div>
        );
    } else if(props.typeSmooth === "double") {
        return null;
    } else {
        return null;
    }
}

export default TuileSmooth;