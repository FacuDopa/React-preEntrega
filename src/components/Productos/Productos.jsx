import React from 'react';
import { ItemCount } from '../itemCount/itemCount';

const Productos = () => {
    return (
        <>
        <h1>Lista de Productos </h1> 
        <h2>Producto1</h2> <ItemCount valInicial={1} Stock={40}/>
        <h2>Producto2</h2> <ItemCount valInicial={1} Stock={40}/>
        <h2>Producto3</h2> <ItemCount valInicial={1} Stock={40}/>
        <h2>Producto4</h2> <ItemCount valInicial={1} Stock={40}/>
        </>
    );
}

export default Productos;
