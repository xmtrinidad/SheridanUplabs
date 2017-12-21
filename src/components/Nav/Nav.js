import React from 'react';
import './Nav.css';

const nav = (props) => {
    let activeClass = null;
    if (props.menu) {
        activeClass = 'mobile-active';
    }
    return (
    <nav className="Nav">
        <div className="mobile">
            <div onClick={props.click} className="mobile__menu">
                <i className="fas fa-bars fa-2x"></i>
            </div>
            <h3 className="title">Sheridan</h3>
        </div>
        <ul className={`mobile-sidenav ${activeClass}`}>
            <li className="item"><a href="#">Bedroom</a></li>
            <li className="item"><a href="#">Bath & Beach</a></li>
            <li className="item"><a href="#">Homewares</a></li>
            <li className="item"><a href="#">Loungewear</a></li>
            <li className="item"><a href="#">Gifts</a></li>
            <li className="item"><a href="#">Baby & Kids</a></li>
            <li className="item"><a href="#">Sale</a></li>
        </ul>
        <ul className="items">
            <li className="item"><a href="#">Bedroom</a></li>
            <li className="item"><a href="#">Bath & Beach</a></li>
            <li className="item"><a href="#">Homewares</a></li>
            <li className="item"><a href="#">Loungewear</a></li>
            <li className="item"><a href="#">Gifts</a></li>
            <li className="item"><a href="#">Baby & Kids</a></li>
            <li className="item"><a href="#">Sale</a></li>
        </ul>
    </nav>
    );
};

export default nav;