import React from 'react';

const data =
    {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "nom": "Antenne d'Aix-en-Provence",
                    "adresse": "14 rue Charloun Rieu, 13090 Aix-en-Provence"
                },
                "geometry": {
                    "coordinates": [
                        5.4140784457324,
                        43.52796479779042
                    ],
                    "type": "Point"
                },
                "id": 0
            },
            {
                "type": "Feature",
                "properties": {
                    "nom": "GHINS",
                    "adresse": "11 Rue Jean-Louis Vaudoyer, 13090 Aix-en-Provence"
                },
                "geometry": {
                    "coordinates": [
                        5.431541424502768,
                        43.51949852532087
                    ],
                    "type": "Point"
                },
                "id": 1
            },
            {
                "type": "Feature",
                "properties": {
                    "nom": "Antenne de Gardanne",
                    "adresse": "19 Rue Borely, 13120 Gardanne"
                },
                "geometry": {
                    "coordinates": [
                        5.472328339288083,
                        43.454904523767055
                    ],
                    "type": "Point"
                },
                "id": 2
            },
            {
                "type": "Feature",
                "properties": {
                    "nom": "Antenne de Bouc-Bel-Air",
                    "adresse": "Pole Solidarité, Rue Frédéric Chopin, 13320 Bouc-Bel-Air"
                },
                "geometry": {
                    "coordinates": [
                        5.4158633786549615,
                        43.45858510179366
                    ],
                    "type": "Point"
                },
                "id": 3
            },
            {
                "type": "Feature",
                "properties": {
                    "nom": "Antenne des Pennes-Mirabeau",
                    "adresse": "Mairie Annexe, Place Victorin Isnard, 13170 Les Pennes-Mirabeau"
                },
                "geometry": {
                    "coordinates": [
                        5.351013814434253,
                        43.38013763439437
                    ],
                    "type": "Point"
                },
                "id": 4
            },
            {
                "type": "Feature",
                "properties": {
                    "nom": "Antenne du Puy-Sainte-Réparade",
                    "adresse": "11 Avenue de l'ancienne poste, 13610 Le-Puy-Sainte-Réparade"
                },
                "geometry": {
                    "coordinates": [
                        5.432693766492321,
                        43.66363003972182
                    ],
                    "type": "Point"
                },
                "id": 5
            },
            {
                "type": "Feature",
                "properties": {
                    "nom": "Antenne de Trets",
                    "adresse": "2 Av. Mirabeau, 13530 Trets"
                },
                "geometry": {
                    "coordinates": [
                        5.6842453227700105,
                        43.44782091376126
                    ],
                    "type": "Point"
                },
                "id": 6
            }
        ]
    }

function Contact() {
    return (
        <div className="App">
            <div className="App-header">
                <iframe className="carte" src="https://www.google.com/maps/d/embed?mid=1vQ0P7Lnan0CVJI0dpVzArGJ12DtBI4U&usp=sharing"></iframe>
                <div className="contact">
                    <h3>Nous contacter</h3>
                <table className="gouv_hierarchie">
                    {data.features.map(feature => (
                        <tr key={feature.id}>
                            <td><h4 className="white">{feature.properties.nom}</h4></td>
                            <td><p className="white">{feature.properties.adresse}</p></td>
                        </tr>
                    ))}
                </table>
                </div>
            </div>
        </div>
    );
}

export default Contact;
