import { useState } from "react";
import CarritoNav from "../NavBar/Carrito/CarritoNav";

export const ItemCount = ({valInicial, Stock}) => {

    const [contador, CantidadCarrito] = useState(valInicial)

    const sumar = () => (contador < Stock) && CantidadCarrito(contador + 1)
    const restar = () => (contador > valInicial) && CantidadCarrito(contador - 1)

    CarritoNav(contador)
    
    return (
        <>
            <button className='btn btn-dark' onClick={() => restar()}>-</button>
            {contador}
            <button className='btn btn-dark' onClick={() => sumar()}>+</button>
        </>
    );
}