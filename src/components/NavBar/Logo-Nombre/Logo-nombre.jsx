import React from 'react';
import logo from '../../img/logo.png';


const LogoNombre = () => {
    return (
        <>
        <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="30" className="d-inline-block align-text-top" /> Carpenteria J&R
        </a>
        </>
    );
}

export default LogoNombre;
