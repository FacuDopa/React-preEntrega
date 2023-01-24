import React from 'react';

const ItemsNav = () => {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
            </li>        
            <li className="nav-item">
                <a className="nav-link" href="#">Ubicacion</a>
            </li>        
        </>
    );
}

export default ItemsNav;
