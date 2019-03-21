import React from 'react';
import './header.css'

function Header (props) {
    
        return (
            <div>
            <nav className="nav-extended">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo left title">Banigualdapp</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"></a>
                    <ul id="nav-mobile" className="right">
                        <li><a href=""><i className="material-icons right">search</i></a></li>
                    </ul>
                </div>
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><a className="categories" href="#test1">Tienda</a></li>
                        <li className="tab"><a className="categories" href="#test2">Emprendedor</a></li>
                        <li className="tab"><a className="categories" href="#test3">Calendario</a></li>
                        <li className="tab"><a className="categories" href="#test4">Mi Perfil</a></li>
                    </ul>
                </div>
            </nav>
            </div>
        ) 
}

export default Header;