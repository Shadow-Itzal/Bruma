// =====================
// IMPORTACIONES
// =====================

import { createContext, useState, useContext } from "react";


// =====================
// COMPONENTE PRINCIPAL
// =====================

const CarritoContext = createContext();
export const usarCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
    const [listaCarrito, setListaCarrito] = useState([]);

    const agregarCarrito = (producto, cantidad) => {
        const existe = listaCarrito.find(item => item.id === producto.id);
        if (existe) {
            setListaCarrito(listaCarrito.map(item => item.id === producto.id 
                ? { ...item, cantidad: item.cantidad + cantidad } 
                : item));
        } else {
            setListaCarrito([...listaCarrito, { ...producto, cantidad }]);
        }
    };

    const eliminarDelCarrito = (id) => {
        setListaCarrito(listaCarrito.filter(item => item.id !== id));
    };

    const sumarUnidad = (id) => {
        setListaCarrito(listaCarrito.map(item => item.id === id 
            ? { ...item, cantidad: item.cantidad + 1 } 
            : item));
    };

    const restarUnidad = (id) => {
        setListaCarrito(listaCarrito.map(item => item.id === id && item.cantidad > 1
            ? { ...item, cantidad: item.cantidad - 1 } 
            : item));
    };

    const obtenerTotal = () => {
        return listaCarrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    };

    const vaciarCarrito = () => {
        setListaCarrito([]);
    };

    const obtenerCantidadTotal = () => {
        return listaCarrito.reduce((total, item) => total + item.cantidad, 0);
    }


    return (
        <CarritoContext.Provider value={{ listaCarrito, agregarCarrito, eliminarDelCarrito, sumarUnidad, restarUnidad, obtenerTotal, vaciarCarrito, obtenerCantidadTotal }}>
            {children}
        </CarritoContext.Provider>
    );

};