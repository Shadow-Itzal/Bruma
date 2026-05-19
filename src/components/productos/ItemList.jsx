/* Es un componente tonto o de presentacion. Recibe la lista de productos y simplemente se encarga de hacer el .map() */

// =====================
// IMPORTACIONES
// =====================

import Item from './Item'
import styles from './ItemListContainer.module.css'


// =====================
// COMPONENTE PRINCIPAL
// =====================

function ItemList({ productos }) {
    return (

        <div className={styles.grid}>
            {productos.map((Producto) => (
                <Item key={Producto.id} producto={Producto} />
            ))}
        </div>
    );
}

export default ItemList;