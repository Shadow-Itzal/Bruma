/* Aquí es donde mostramos la obra en todo su esplendor. */

// =====================
// IMPORTACIONES
// =====================

import Contador from "../comunes/Contador";
import { usarCarrito } from "../../context/CarritoContext";
import styles from "./ItemDetail.module.css";

// =====================
// COMPONENTE PRINCIPAL
// =====================

function ItemDetail({ producto }) {

    const { agregarCarrito } = usarCarrito();

    /* funcion de respuesta (callback). Es como decir: "Cuando pase tal cosa, hace esto" */
    const onAdd = (cantidadElegida) => {
        agregarCarrito(producto, cantidadElegida);
        alert(`¡Agregaste ${cantidadElegida} unidades de ${producto.nombre} al carrito!`);
    };

    return (

        <article className={styles.detalleContainer}>

            {/* Columna de la Imagen */}
            <div className={styles.colImagen}>
                <img
                    src={producto.imagen_producto}
                    alt={producto.nombre}
                    className={styles.imagenDetalle}
                />

                {/* La frase como un "badge" o pie de foto elegante */}
                <p className={styles.frase}>"{producto.frase_inspiracional}"</p>
            </div>

            {/* Columna de Información */}
            <div className={styles.colInfo}>
                <span className={styles.categoria}>{producto.categoria}</span>
                <h1 className={styles.titulo}>{producto.nombre}</h1>
                <p className={styles.tecnica}>{producto.tecnica}</p>

                <p className={styles.precio}>
                    $ {producto.precio.toLocaleString("es-AR")} {/* agrega el punto decimal, al detectar el pais */}
                </p>

                <div className={styles.bloqueInfo}>
                    <h4>Descripción</h4>
                    <p>{producto.descripcion}</p>
                </div>

                <div className={styles.especificaciones}>
                    <p>
                        <strong>Dimensiones:</strong> {producto.dimensiones}
                    </p>
                    <p>
                        <strong>Materiales:</strong> {producto.materiales}
                    </p>

                    {/* Logica de stock: se aplica la clase 'pocoStock' si el valor es <= 2 */}
                    <p
                        className={`${styles.stock} ${producto.stock <= 2 ? styles.pocoStock : ""}`}
                    >
                        <strong>Stock disponible:</strong> {producto.stock}{" "}
                        unidades{" "}
                        {producto.stock <= 2 && " - ¡Últimas unidades!"}
                    </p>
                </div>

                {/* <button className={styles.botonCompra}>
                    Añadir al Carrito
                </button> */}

                <Contador
                    stock={producto.stock}
                    inicial={1}
                    alAgregar={onAdd}
                />

            </div>
        </article>
    );
}

export default ItemDetail;
