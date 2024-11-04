import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className={'navbar-container'}>
            <div className={'navbar'}>
                <div>
                    <Link to="/">Accueil</Link>
                </div>
                <div>
                    <Link to="/ghins">La GHINS</Link>
                </div>
                <div>
                    <Link to="/contact">Contact</Link>
                </div>
                <div>
                    <Link to="/gouvernance">Gouvernance</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
