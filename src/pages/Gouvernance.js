import maire from "../Assets/03_12354_joissains-4e3e1-21c7d.jpg";
import adjoint from "../Assets/14_12315_chevalier.jpg";
import carte from '../Assets/CARTE_PERMANENCEv2_-02.png';

function Gouvernance() {
    return (
        <div className="App">
            <div className="App-header">
                <div className="gouvernance gouv_first">
                    <h3 className="white shadow">
                        L'association Mission Locale du Pays d'Aix a pour objet de favoriser l'insertion sociale et
                        professionnelle des jeunes de 16 à 25 ans révolus des communes du territoire de Pays
                        d'Aix-en-Provence, dans le cadre d'une
                        mission de service public de proximité et des textes légaux et réglementaires en vigueur
                        (articles
                        L5314-1 et suivants du Code du Travail et leurs décrets d'application).
                    </h3>
                </div>
                <div className="gouvernance gouv_second">
                    <h3>
                        L'activité de la Mission Locale d'Aix-en-Provence se définit par les financeurs à travers la
                        transmission d'éléments probants et factuels retraçant l'accomplissement d'indicateurs,
                        d'objectifs et d'obligations
                    </h3>
                    <table className="gouv_table">
                        <tr>
                            <td>
                                <p>la Convention Pluriannuelle d'Objectifs (CPO) pour l'État</p>
                            </td>
                            <td>
                                <p>le Plan Annuel d'Objectifs (PAO) pour la région</p>
                            </td>
                            <td>
                                <p>le Plan d'Action Ville (PAV) pour la Ville</p>
                            </td>
                            <td>
                                <p>
                                Autres intermédiaires selon le type de projet en cours : Fonds Social Européen - Fonds
                                de
                                solidarités - Mécénats - etc
                                </p>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="gouvernance gouv_third bg-violet white">
                    <h3>Les Ressources de l'association comprennent</h3>
                    <table className="gouv_table">
                        <tr>
                            <td>
                                <p className="white">
                                    les subventions accordées par l'État, les Collectivités Territoriales, le Conseil
                                    des
                                    territoires du Pays d'Aix (Ville d'Aix-en-Provence), la métropole Aix-Marseille,
                                    l'Union
                                    Européene, le Conseil Régional,
                                    le Conseil départementale ou tout autre organisme, personnes morales de droit privé
                                    ou
                                    public
                                </p>
                            </td>
                            <td>
                                <p className="white">la participation des communes adhérentes</p>
                            </td>
                            <td>
                                <p className="white">les intérêts et revenue des biens et valeurs appartenant à l'association</p>
                            </td>
                            <td>
                                <p className="white">les contributions diverses qu'elle pourrait obtenir</p>
                            </td>
                            <td>
                                <p className="white">les dons et legs qui lui seraient faits</p>
                            </td>
                            <td>
                                <p className="white">les produits autorisés de l'activité de l'association</p>
                            </td>
                            <td>
                                <p className="white">toutes ressources autorisées par la loi</p>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="gouvernance gouv_four">
                    <h3>
                        Véritable levier et actrice de premier ordre du développement local, la Mission Locale du Pays
                        d'Aix contribue à l'élaboration et à la mise en œuvre de politiques d'insertion professionnelle
                        et sociale.
                    </h3>
                    <h3>
                        Pour cela elle mobilise les moyens des diverses administrations et institutions concernées et,
                        plus généralment, de l'ensemble de ses partenaires et ce sur l'ensemble du territoire
                        d'intervention
                    </h3>
                    <table className="gouv_table">
                        <tr>
                            <td>
                                <p>Permanences et Antennes sur 34 Communes du Pays d'Aix actuellement</p>
                            </td>
                        </tr>
                    </table>
                    <img className="gouv_carte" src={carte}></img>
                </div>
                <div className="gouvernance gouv_five bg-bleu2 white">
                    <h3>L'association se compose de</h3>
                    <table className="gouv_table">
                        <th>
                            <h4>Toute les communes du Pays d'Aix adhérentes et des membres des quatre collèges du
                                Conseil
                                d'administration</h4>
                        </th>
                        <tr>
                            <td>
                                <p className="white">Le collège des Collectivités Territoriales, groupement de Collectivités Territoriales
                                    …</p>
                            </td>
                            <td>
                                <p className="white">Le collège des Services de l'État et des Organismes Publics</p>
                            </td>
                            <td>
                                <p className="white">Le collège des Partenaires Économiques et Sociaux</p>
                            </td>
                            <td>
                                <p className="white">Le collège des Associations</p>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="gouvernance gouv_six">
                    <h3>Présidence</h3>
                    <table className="gouv_hierarchie">
                        <tr>
                            <td>
                                <img src={maire}></img>
                                <h4>Madame JOISSAINS-MASINI Sophie</h4>
                                <h5>Maire d'Aix-en-Provence</h5>
                                <p>
                                    Est président de droit de la Mission Locale du Pays d'Aix, il peut déléguer cette
                                    présidence à une personnalité de son choix, qu'il aura désignée parmi les membres du
                                    Conseil d'Administration.
                                    La délégation en cours nomme Monsieur CHEVALIER Éric - Président délégué de la
                                    Mission
                                    Locale du Pays d'Aix.
                                </p>
                            </td>
                            <td>
                                <img src={adjoint}></img>
                                <h4>Monsieur CHEVALIER Éric</h4>
                                <h5>13e adjoint au Maire et à la Ville d'Aix-en-Provence</h5>
                                <p>
                                    Occupe les fonctions d'Élu en tant que 13ème adjoint au Maire et la ville
                                    d'Aix-en-Provence : délégué aux quartiers du Pont de l'Arc et du Val Saint-André-
                                    Arc-
                                    La Torse
                                </p>
                            </td>
                        </tr>
                    </table>
                </div>
                    <table className="gouv_table">
                        <tr>
                            <td>
                                <h4>Le Président délégué</h4>
                            </td>
                            <td>
                                <h4>Le Vice Président</h4>
                                <p>fonction occupé actuellement par Madame MELKONIAN Angèle</p>
                            </td>
                            <td>
                                <h4>Le Secrétaire</h4>
                                <p>fonction occupé actuellement par Madame VINCENTI Monique</p>
                            </td>
                            <td>
                                <h4>Le Secrétaire Adjoint</h4>
                                <p>fonction occupé actuellement par Monsieur MAZEL Philippe</p>
                            </td>
                            <td>
                                <h4>Le Trésorier</h4>
                                <p>fonction occupé actuellement par Monsieur PANSARD Patrick</p>
                            </td>
                            <td>
                                <h4>Le Trésorier Adjoint</h4>
                                <p>fonction occupé actuellement par Monsieur De Saintdo Philippe</p>
                            </td>
                            <td>
                                <h4>Les quatre collèges du Conseil d'administration</h4>
                                <table className="college bg-vert white">
                                    <tr>
                                        <td><h4>Le collège des Collectivités Territoriales, groupement de Collectivités
                                            Territoriales</h4></td>
                                        <td><p className="white">Six représentants·es de la Ville d'Aix-en-Provence</p></td>
                                        <td><p className="white">Six représentants·es des Communes Adhérentes</p></td>
                                        <td><p className="white">Deux représentants·es de la Métropole Aix-Marseille</p></td>
                                        <td><p className="white">Un·e représentant·e du Conseil Départemental</p></td>
                                        <td><p className="white">Un·e représentant·e de la Région Sud</p></td>
                                    </tr>
                                </table>
                                <table className="college bg-bleu white">
                                    <tr>
                                        <td><h4>Le collège des Services de l'État et des Organismes Publics </h4></td>
                                        <td><p className="white">Monsieur le Sous-Préfet ou son·sa représentant·e</p></td>
                                        <td><p className="white">un·e représentant·e de la délégation départementale de Pôle Emploi</p>
                                        </td>
                                        <td>
                                            <p className="white">un·e représentant·e de la DPJJ- Direction de la Protection Judiciaire de
                                                la
                                                Jeunesse</p>
                                        </td>
                                        <td>
                                            <p className="white">Deux représentants·es de la DREETS- Direction Régionale de l'Emploi, de
                                                l'Économie du Travail et des Solidarités</p>
                                        </td>
                                        <td><p className="white">un·e représentant·e de l'inspection Académique - Éducation Nationale</p>
                                        </td>
                                    </tr>
                                </table>
                                <table className="college bg-orange white">
                                    <tr>
                                        <td><h4>Le collège des Partenaires Économiques et Sociaux</h4></td>
                                        <td><p className="white">École ESG Aix-en-Provence</p></td>
                                        <td><p className="white">Vice Présidence CCIFA</p></td>
                                        <td><p className="white">Société MGB</p></td>
                                        <td><p className="white">Proxidom Services</p></td>
                                    </tr>
                                </table>
                                <table className="college bg-rouge white">
                                    <tr>
                                        <td><h4>Le collège des Associations</h4></td>
                                        <td><p className="white">DUNES Association de Prévention et de médiation</p></td>
                                        <td><p className="white">ACCES Multimedia</p></td>
                                        <td><p className="white">AMS Environnement</p></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>
        </div>
);
}
export default Gouvernance;
