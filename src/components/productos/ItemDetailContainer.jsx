/* esto se encarga de la logica: busca en el json el producto que coincida con el id de la url */

// =====================
// IMPORTACIONES
// =====================

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


// =====================
// COMPONENTE PRINCIPAL
// =====================


function ItemDetailContainer() {
    const [producto, setProducto] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        // Fetch al JSON de productos
        fetch('/data/productos.json')
            .then(res => res.json())
            .then(data => {
                // Buscamos el ID (convertido a número)
                const encontrado = data.find(item => item.id === parseInt(id));
                setProducto(encontrado);
            })
            .catch(err => console.error("Error cargando detalle:", err));
    }, [id]);

    return (
        <>
            {producto 
            ? (<ItemDetail producto={producto} />) 
            : (<p style={{ textAlign: 'center' }}>Cargando detalles de la obra...</p>
            )}
        </>
    );
}

export default ItemDetailContainer;