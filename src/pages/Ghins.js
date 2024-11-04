import paraine from "../Assets/Partenaire Ghins/club paraine logo.png";
import iconik from "../Assets/Partenaire Ghins/iconik.png";
import izidream from "../Assets/Partenaire Ghins/izidream-logo-texte-2.png";
import familleetprovence from "../Assets/Partenaire Ghins/logo-famille-et-provence.jpg";
import skilleo from "../Assets/Partenaire Ghins/LOGO-SKILLEO-1.png";
import mastercv from "../Assets/Partenaire Ghins/Logo_MasterCV.jpg";
import reseau from "../Assets/Partenaire Ghins/logo_reseau_de_ml_carre.jpg";
import aix from "../Assets/Partenaire Ghins/Ville d'aix en provence.png";
import illu from "../Assets/LogoGHINS/illu_png.png";
import qrcode from "../Assets/LogoGHINS/qr-code instagram.png"
import joueur from "../Assets/image.png";
import React from "react";

function Ghins() {

    return (
        <div className="App">
            <div className="App-header">
                <div className="ghins g_first bg-bleu2 white">
                    <p className="shadow white">
                        <h3 className="jaune shadow">C'est quoi ?</h3>un tiers-lieu de 100m2 au sein du quartier
                        prioritaire d’Encagnane de la ville d’Aix-en-Provence, dont l’objectif est d’allier un
                        accompagnement d’insertion professionnel pour les jeunes de 16 à 25 ans, dans un parcours
                        innovant autour du Sport et de l’E-Sport.
                    </p>
                    <img className="shadow illu" src={illu} alt="illu"></img>
                </div>
                <div className="ghins g_second">
                    <img className="joueur" src={joueur}></img>
                    <div>
                        <h3 className="rouge2">Pour qui ?</h3>
                        <p>
                            Ouvert pour les jeunes qui ne sont ni en Emploi, ni en formation et/ou scolarisé de 16 à 25
                            ans
                            ayant pour objectif de s’inscrire dans une dynamique active d’insertion professionnelle
                        </p>
                    </div>
                </div>
                <div className="ghins g_third bg-bleu2">
                    <h3 className="jaune shadow">En s'avoir plus sur le parcours ?</h3>
                    <p className="white shadow">
                        2 semaines de parcours avec des ateliers quotidiens pour identifier et valoriser ses compétences
                        avec les outils numériques, le jeux vidéo et le sport.
                        Rencontrer des professionnels issu de l’E-sport comme des joueurs·euses professionnel, des
                        coachs, des managers, des créateurs de contenus, etc …
                        D’optimiser ses outils de recherches d’emploi et de candidatures via les nouvelles technologie
                        de communications

                        En + des ateliers, des entretiens avec un·e conseiller·ère de la Mission Locale du Pays d’Aix
                        afin de travailler sur votre projet professionnel, sur les démarches administrative et vous
                        aider par rapport aux difficultés à l’atteinte de vos objectifs.

                        Ce parcours s’inscrit dans le Contrat d’Engagement Jeune, une fois les 2 semaines intensives,
                        vous serez accompagné pour une durée minimal de 6 mois pour sécuriser votre réussite de projet
                        professionnel.
                    </p>
                </div>
                <div className="ghins g_four">
                    <div>
                        <h3 className="rouge2">S’inscrire</h3>
                        <p>Contacte notre équipe au 04 42 33 09 16 afin de rencontrer un conseiller de la Mission Locale
                            afin de vérifier ton éligibilité à ce parcours</p>
                    </div>
                    <img className="qrcode" src={qrcode} alt="qrcode"></img>
                </div>
                <div className="ghins g_five bg-bleu2">
                    <div>
                        <h3 className="jaune">Nos Partenaires</h3>
                        <div className="partenaires">
                            <img className="partenairesIMG" src={paraine} alt="club paraine"/>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.iconik.com/">
                                <img className="partenairesIMG" src={iconik} alt="iconik"/>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="http://izidream.gg/">
                                <img className="partenairesIMG" src={izidream} alt="izidream"/>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.familleprovence.fr/">
                                <img className="partenairesIMG" src={familleetprovence} alt="famille et provence"/>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://skilleo.tech/">
                                <img className="partenairesIMG" src={skilleo} alt="skilleo" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://mastercv.fr/">
                                <img className="partenairesIMG" src={mastercv} alt="masterCV" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="http://www.armlsud.com/">
                                <img className="partenairesIMG" src={reseau} alt="reseau de ml carre" />
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.aixenprovence.fr/">
                                <img className="partenairesIMG" src={aix} alt="ville d'aix en provence" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ghins;