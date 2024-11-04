import React from 'react';
import MLPA from "../Assets/Logo-MLPA.png";

function Home() {
    return (
        <div>
            <div className="App">
                <div className="App-header">
                    <div className="home h_first">
                        <img className="shadow MLPA" src={MLPA} alt="MLPA"></img>
                        <div className="shadow">
                            <h1 className="rouge">Bienvenue à la Mission Locale du Pays d'Aix !</h1>
                            <h2 className="orange">Votre passerelle vers l'emploi et l'autonomie</h2>
                        </div>
                    </div>
                    <div className="home h_second">
                        <p>
                            Vous êtes un jeune résidant dans le Pays d'Aix à la recherche de votre voie professionnelle
                            ? La Mission Locale est là pour vous accompagner dans votre parcours vers l'emploi et
                            l'autonomie. Nous sommes une organisation dédiée à la réussite des jeunes en les soutenant
                            dans leur transition vers la vie active.
                        </p>
                    </div>
                    <div className="home h_third bg-bleu">
                        <h3 className="vert">Qui sommes-nous ?</h3>
                        <p className="white">
                            La Mission Locale du Pays d'Aix est une structure spécialisée dans l'insertion
                            professionnelle des jeunes âgés de 16 à 25 ans. Notre équipe d'experts qualifiés est là pour
                            vous écouter, vous conseiller et vous guider tout au long de votre parcours. Que vous soyez
                            en quête d'un premier emploi, d'une formation, d'un apprentissage ou simplement en besoin
                            d'informations sur votre recherche d’autonomie, nous sommes là pour vous aider.
                        </p>
                    </div>
                    <div className="home h_four">
                        <h3 className="vert">Nos services</h3>
                        <div className="dispositif">
                            <div className="dispo">
                                <h3 className="bleu">Orientation professionnelle personnalisée</h3>
                                <p>
                                    Notre équipe de conseillers professionnels vous accompagnera dans l'exploration des
                                    métiers, la découverte de vos aptitudes et la définition de vos objectifs
                                    professionnels. Nous vous aiderons à trouver la voie qui correspond le mieux à vos
                                    intérêts et compétences.
                                </p>
                            </div>
                            <div className="dispo">
                                <h3 className="bleu">Accès aux formations</h3>
                                <p>
                                    Nous vous donnerons accès à une liste complète de formations professionnelles
                                    adaptées à vos besoins et à vos ambitions. Nous vous aiderons également à préparer
                                    votre candidature et à trouver les financements nécessaires pour vous former.
                                </p>
                            </div>
                            <div className="dispo">
                                <h3 className="bleu">Mise en relation avec les employeurs</h3>
                                <p>
                                    Nous avons établi un réseau solide de partenaires professionnels locaux. Nous
                                    faciliterons votre mise en relation avec les entreprises qui recrutent et nous vous
                                    soutiendrons tout au long du processus de recherche d'emploi.
                                </p>
                            </div>
                            <div className="dispo">
                                <h3 className="bleu">Soutien social et administratif</h3>
                                <p>
                                    Nous comprenons que les difficultés personnelles peuvent parfois entraver votre
                                    progression. C'est pourquoi nous vous offrons un soutien social et administratif
                                    pour résoudre les problèmes liés au logement, à la santé, à la mobilité, aux
                                    prestations sociales, etc.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="home h_five">
                            <h3 className="vert shadow">Contactez-nous dès aujourd'hui !</h3>
                        <p className="white shadow">
                            Si vous êtes prêt à démarrer votre parcours vers l'emploi et l'autonomie, n'attendez
                            plus ! Contactez-nous dès maintenant pour prendre rendez-vous avec l'un de nos
                            conseillers. Ensemble, nous élaborerons un plan d'action personnalisé pour vous aider à
                            atteindre vos objectifs professionnels. Rejoignez la Mission Locale du Pays d'Aix et
                            ouvrez-vous de nouvelles opportunités pour un avenir radieux.
                        </p>
                        <p className="orange">04 42 33 09 16</p>
                    </div>
                    <div className="home h_six">
                            <h3 className="vert">Les dispositifs et programme d’accompagnements</h3>
                        <div className="dispositif">
                            <div className="dispo d_first">
                                <h3 className="bleu">Le contrat d'engagement jeune</h3>
                                <p>
                                    Le contrat d'engagement jeune est un dispositif qui permet aux jeunes de bénéficier
                                    d'un
                                    accompagnement renforcé dans leur parcours vers l'emploi. Ce contrat est établi
                                    entre le
                                    jeune, la Mission Locale et éventuellement d'autres partenaires (employeurs,
                                    organismes
                                    de formation, etc.). Il fixe des objectifs précis et les actions à mettre en œuvre
                                    pour
                                    les atteindre. Le contrat d'engagement jeune offre un suivi individualisé, des
                                    actions
                                    de formation adaptées, un soutien dans la recherche d'emploi et des mesures
                                    d'accompagnement spécifiques pour faciliter l'insertion professionnelle du jeune.
                                </p>
                                <h4>
                                    D’une durée de 6 à 12 mois, pouvant être rémunéré jusqu’à 520€ par mois
                                </h4>
                                <a target="_blank" rel="noopener noreferrer" className="violet" href={'https://www.1jeune1solution.gouv.fr/contrat-engagement-jeune'}>En savoir
                                    plus</a>
                            </div>
                            <div className="dispo d_second">
                                <h3 className="bleu">La GHINS</h3>
                                <p>
                                    La Gaming House de l’Insertion, c’est un parcours innovant sur Aix-en-Provence, qui
                                    allie insertion professionnel, sport, e-sport et nutrition. D’une durée 2 semaines,
                                    il s’agit d’un parcours intensif en petit groupe d’accélérer sa recherche d’emploi,
                                    de formation ou de projet professionnel autour d’ateliers innovant.
                                </p>
                                <a target="_blank" rel="noopener noreferrer" className="violet" href={'/ghins'}>En savoir plus</a>
                            </div>
                            <div className="dispo d_third">
                                <h3 className="bleu">Le parrainage</h3>
                                <p>
                                    Le parrainage à la Mission Locale consiste à mettre en relation un jeune avec un
                                    professionnel expérimenté, appelé parrain ou marraine. Le parrainage a pour objectif
                                    d'offrir un accompagnement personnalisé au jeune, en lui permettant de bénéficier du
                                    soutien, des conseils et du réseau professionnel du parrain/marraine. Le
                                    parrain/marraine partage son expérience, apporte des conseils sur la recherche
                                    d'emploi, l'orientation professionnelle et la gestion de carrière. Il peut également
                                    aider le jeune à établir des contacts professionnels et à développer son réseau. Le
                                    parrainage favorise la confiance, la motivation et l'autonomie du jeune dans son
                                    parcours d'insertion professionnelle.
                                </p>
                            </div>
                            <div className="dispo d_four">
                                <h3 className="bleu">Le Service Civique</h3>
                                <p>
                                    Le Service Civique est bien plus qu'un simple programme de volontariat. C'est une
                                    expérience unique qui vous permet de faire une réelle différence dans votre
                                    communauté et de développer vos compétences tout en contribuant au bien-être de la
                                    société. Ouvert de 16 à 25 ans, il offre une opportunité unique de s'impliquer dans
                                    des projets variés et passionnants, qu'il s'agisse de l'environnement, de
                                    l'éducation, de la santé, de l'inclusion sociale ou de la culture.
                                </p>
                                <h4>D’une durée de 6 à 12 mois, rémunéré à hauteur de 601€ par mois</h4>
                                <a target="_blank" rel="noopener noreferrer" className="violet" href={'https://www.service-civique.gouv.fr/'}>Découvrir les missions disponible</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
