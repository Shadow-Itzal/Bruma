// =====================
// IMPORTACIONES
// =====================

import { usarCarrito } from "../context/CarritoContext";
import { Link } from "react-router-dom";
import styles from "./Carrito.module.css";


// =====================
// COMPONENTE PRINCIPAL
// =====================

function Carrito() {

    const { listaCarrito, eliminarDelCarrito, sumarUnidad, restarUnidad, obtenerTotal, vaciarCarrito } = usarCarrito(); /* Obtenemos el carrito y sus funciones */

    // Si el carrito está vacío, mostramos un mensaje y un botón para volver
    if (listaCarrito.length === 0) {
        return (
            <div className={styles.vacioContainer}>
                <h2>Tu carrito de Bruma está vacío</h2>
                <p>Parece que aún no has seleccionado ninguna obra para tu colección.</p>
                <Link to="/productos" className={styles.btnVolver}>
                    Ver Catálogo
                </Link>
            </div>
        );
    }

    const manejarFinalizar = () => {
        alert("¡Muchas gracias por tu compra en Bruma! Pronto nos pondremos en contanto para coordinar en envio de tus obras.");
        vaciarCarrito(); // el carrito se vacia al finalizar compra
    };

    // Si tiene productos, mostramos la lista
    return (
        <div className={styles.carritoPage}>
            <h2>Obras Seleccionadas</h2>

            <div className={styles.itemsContenedor}>
                {listaCarrito.map(item => (
                    <div key={item.id} className={styles.itemCard}>

                        <img src={item.imagen_producto} alt={item.nombre} />

                        <div className={styles.itemInfo}>
                            <h3>{item.nombre}</h3>
                            {/* precio por unidad */}
                            <p className={styles.precioUnitario}>Ref: $ {item.precio.toLocaleString("es-AR")} c/u</p>
                        </div>

                        <div className={styles.cantidadControles}>
                            <button onClick={() => { console.log("Restando", item.id); restarUnidad(item.id); }}>-</button>
                            <span>{item.cantidad}</span>
                            <button onClick={() => { console.log("Sumando", item.id); sumarUnidad(item.id); }}>+</button>
                        </div>

                        {/* subtotal del cuadro (precio x cantidad) */}
                        <p className={styles.subtotal}>
                            $ {(item.precio * item.cantidad).toLocaleString("es-AR")}
                        </p>

                        <button onClick={() => eliminarDelCarrito(item.id)} className={styles.btnEliminar}>
                            ✕
                        </button>

                    </div>
                ))}
            </div>

            <div className={styles.resumen}>

                <h3>Total: $ {obtenerTotal().toLocaleString("es-AR")}</h3>

                <div className={styles.acciones}>

                    <Link to="/productos" className={styles.btnSeguir}>
                        Seguir Comprando
                    </Link>

                    <button onClick={vaciarCarrito} className={styles.btnVaciar}>
                        Vaciar Carrito
                    </button>

                    <button onClick={manejarFinalizar} className={styles.btnFinalizar}>
                        Finalizar Compra
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Carrito;


