import React from 'react';

import '../../design/commun/event.css';

import {Button} from '../utilitaires/Button';
import Euro from '../../icons/euro.svg';
import Location from '../../icons/location.svg';
import Calendar from '../../icons/calendar.svg';

export function Event(props) {

    return (
        <div class="module-event">
            <div class="module-event-couverture" style={{backgroundImage: "url(" + props.couvertureUrl + ")"}}>
                <div class="module-event-couverture-titre">{props.title}</div>
            </div>
            <div class="module-event-blocInfos">
                <div class="module-event-blocInfos-pass">
                    PASS SANITAIRE OBLIGATOIRE
                </div>
                <div class="module-event-blocInfos-resume">
                    {props.resume}
                </div>
                <div class="module-event-blocInfos-express">
                    <div class="module-event-blocInfos-express-prix module-event-blocInfos-express-prix-MARGIN">
                        <div class="module-event-blocInfos-express-prix-icon">
                            <img src={Calendar} alt="euro"/>
                        </div>
                        <div class="module-event-blocInfos-express-prix-infos">
                            <div class="module-event-blocInfos-express-prix-infos-principal">
                                {props.calendar1}
                            </div>
                            <div class="module-event-blocInfos-express-prix-infos-secondaire">
                                {props.calendar2}
                            </div>
                            <div class="module-event-blocInfos-express-prix-infos-secondaire">
                                {props.calendar3}
                            </div>
                        </div>
                    </div>
                    <div class="module-event-blocInfos-express-prix module-event-blocInfos-express-prix-MARGIN">
                        <div class="module-event-blocInfos-express-prix-icon">
                            <img src={Location} alt="euro"/>
                        </div>
                        <div class="module-event-blocInfos-express-prix-infos">
                            <div class="module-event-blocInfos-express-prix-infos-principal">
                                {props.lieu1}
                            </div>
                            <div class="module-event-blocInfos-express-prix-infos-secondaire">
                                {props.lieu2}
                            </div>
                            <div class="module-event-blocInfos-express-prix-infos-secondaire">
                                {props.lieu3}
                            </div>
                        </div>
                    </div>
                    <div class="module-event-blocInfos-express-prix">
                        <div class="module-event-blocInfos-express-prix-icon">
                            <img src={Euro} alt="euro"/>
                        </div>
                        <div class="module-event-blocInfos-express-prix-infos">
                            <div class="module-event-blocInfos-express-prix-infos-principal">
                                {props.prix1}
                            </div>
                            <div class="module-event-blocInfos-express-prix-infos-secondaire">
                                {props.prix2}
                            </div>
                            <div class="module-event-blocInfos-express-prix-infos-secondaire">
                                {props.prix3}
                            </div>
                        </div>
                    </div>
                </div>
                {props.siInscription === "true" ?
                    <div class="module-event-blocInfos-inscription">
                        <Button
                            typeBouton="externe"
                            color="bleuAMB"
                            link={props.linkInscription}
                            label="S'inscrire"
                        />
                    </div>
                    :
                    <div></div>
                }
                {props.siInscriptionMiagiste === "true" ?
                    <div class="module-event-blocInfos-inscription">
                        <Button
                            typeBouton="info"
                            color="bleuAMB"
                            link=""
                            label="Inscription réservée aux miagistes pour l'instant"
                        />
                    </div>
                    :
                    <div></div>
                }
                <Deroulements
                    nombreDeroulements={props.nombreDeroulements}
                    deroulement1={props.deroulement1}
                    deroulement2={props.deroulement2}
                    deroulement3={props.deroulement3}
                    deroulement4={props.deroulement4}
                    deroulement5={props.deroulement5}
                />
                <Reductions
                    nombreReductions={props.nombreReductions}
                    reduction1={props.reduction1}
                    reduction2={props.reduction2}
                    reduction3={props.reduction3}
                    reduction4={props.reduction4}
                    reduction5={props.reduction5}
                />
                <div class="module-event-blocInfos-section">
                    <div class="module-event-blocInfos-titre">Plan d'accès</div>
                    <iframe
                        src={props.planAcces}
                        width="100%"
                        height="400px"
                        frameborder="0"
                        allowfullscreen=""
                        aria-hidden="false"
                        tabindex="0"></iframe>
                </div>
                {/* <div class="module-event-blocInfos-section">
                    <div class="module-event-blocInfos-titre">Modalités</div>
                </div> */}
            </div>
        </div>
    );

}

export default Event;

function Reductions(props) {

    if (props.nombreReductions === "1") {
        return (
            <div class="module-event-blocInfos-section">
                <div class="module-event-blocInfos-titre">Réduction</div>
                <Reduction
                    reduction={props.reduction1}
                />
            </div>
        );
    } else if (props.nombreReductions === "2") {
        return (
            <div class="module-event-blocInfos-section">
                <div class="module-event-blocInfos-titre">Réductions</div>
                <Reduction
                    reduction={props.reduction1}
                />
                <Reduction
                    reduction={props.reduction2}
                />
            </div>
        );
    } else if (props.nombreReductions === "3") {
        return (
            <div class="module-event-blocInfos-section">
                <div class="module-event-blocInfos-titre">Réductions</div>
                <Reduction
                    reduction={props.reduction1}
                />
                <Reduction
                    reduction={props.reduction2}
                />
                <Reduction
                    reduction={props.reduction3}
                />
            </div>
        );
    } else if (props.nombreReductions === "4") {
        return (
            <div class="module-event-blocInfos-section">
                <div class="module-event-blocInfos-titre">Réductions</div>
                <Reduction
                    reduction={props.reduction1}
                />
                <Reduction
                    reduction={props.reduction2}
                />
                <Reduction
                    reduction={props.reduction3}
                />
                <Reduction
                    reduction={props.reduction4}
                />
            </div>
        );
    } else if (props.nombreReductions === "5") {
        return (
            <div class="module-event-blocInfos-section">
                <div class="module-event-blocInfos-titre">Réductions</div>
                <Reduction
                    reduction={props.reduction1}
                />
                <Reduction
                    reduction={props.reduction2}
                />
                <Reduction
                    reduction={props.reduction3}
                />
                <Reduction
                    reduction={props.reduction4}
                />
                <Reduction
                    reduction={props.reduction5}
                />
            </div>
        );
    } else {
        return (null);
    }
}

function Reduction(props) {
    return (
        <div class="module-event-blocInfos-reduction">
            <div class="module-event-blocInfos-reduction-nom">
                {props.reduction[0]}
            </div>
            <div class="module-event-blocInfos-reduction-prixNormal">
                {props.reduction[1]}
            </div>
            <div class="module-event-blocInfos-reduction-prixReduction">
                {props.reduction[2]}
            </div>
        </div>
    );
}

function Deroulements(props) {

    if (props.nombreDeroulements === "1") {
        return (
            <div class="module-event-blocInfos-section">
                <div class="module-event-blocInfos-titre">Déroulement</div>
                <Deroulement
                    deroulement={props.deroulement1}
                />
            </div>
        );
    } else if (props.nombreDeroulements === "2") {
        return (
            <div class="module-event-blocInfos-section">
                <div class="module-event-blocInfos-titre">Déroulement</div>
                <Deroulement
                    deroulement={props.deroulement1}
                />
                <Deroulement
                    deroulement={props.deroulement2}
                />
            </div>
        );
    } else if (props.nombreDeroulements === "3") {
        return (
            <div class="module-event-blocInfos-section">
                <div class="module-event-blocInfos-titre">Déroulement</div>
                <Deroulement
                    deroulement={props.deroulement1}
                />
                <Deroulement
                    deroulement={props.deroulement2}
                />
                <Deroulement
                    deroulement={props.deroulement3}
                />
            </div>
        );
    } else if (props.nombreDeroulements === "4") {
        return (
            <div class="module-event-blocInfos-section">
                <div class="module-event-blocInfos-titre">Déroulement</div>
                <Deroulement
                    deroulement={props.deroulement1}
                />
                <Deroulement
                    deroulement={props.deroulement2}
                />
                <Deroulement
                    deroulement={props.deroulement3}
                />
                <Deroulement
                    deroulement={props.deroulement4}
                />
            </div>
        );
    } else if (props.nombreDeroulements === "5") {
        return (
            <div class="module-event-blocInfos-section">
                <div class="module-event-blocInfos-titre">Déroulement</div>
                <Deroulement
                    deroulement={props.deroulement1}
                />
                <Deroulement
                    deroulement={props.deroulement2}
                />
                <Deroulement
                    deroulement={props.deroulement3}
                />
                <Deroulement
                    deroulement={props.deroulement4}
                />
                <Deroulement
                    deroulement={props.deroulement5}
                />
            </div>
        );
    } else {
        return (null);
    }

}

function Deroulement(props) {
    return (
        <div class="module-event-blocInfos-deroulement">
            <div class="module-event-blocInfos-deroulement-horaire">
                {props.deroulement[0]}
            </div>
            <div class="module-event-blocInfos-deroulement-descriptif">
                {props.deroulement[1]}
            </div>
        </div>
    );
}