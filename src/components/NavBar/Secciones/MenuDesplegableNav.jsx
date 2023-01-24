import React from 'react';

const MenuDesplegableNav = () => {
    return (
        <>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorías</a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Muebles</a></li>
                <li><a className="dropdown-item" href="#">Juguetes</a></li>
                <li><a className="dropdown-item" href="#">Jardín</a></li>
                <li><a className="dropdown-item" href="#">Macetas</a></li>
                <li><a className="dropdown-item" href="#">Mesas</a></li>
            </ul>
        </li>
        </>
    );
}

export default MenuDesplegableNav;
