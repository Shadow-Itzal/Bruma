// =================================
//  IMPORTACIONES
// ================================

// Link permite navegar SIN recargar la pagina
import { Link } from 'react-router-dom'

import { usarCarrito } from '../../../context/CarritoContext';

import styles from './Navbar.module.css'


// ================================
//  COMPONENTE NAVBAR
// ================================

function Navbar() {

    const { obtenerCantidadTotal } = usarCarrito();

    return (

        <nav>

            <ul className={styles.listaNavegacion}>

                <li>
                    <Link to="/">
                        Inicio
                    </Link>
                </li>

                <li>
                    <Link to="/productos">
                        Productos
                    </Link>
                </li>

                <li>
                    <Link to="/nosotros">
                        Nosotros
                    </Link>
                </li>

                <li>
                    <Link to="/carrito">
                        🛒 Carrito 
                        {obtenerCantidadTotal() > 0 && <span>({obtenerCantidadTotal()})</span>}
                    </Link>
                </li>

                <li>
                    <Link to="/admin">
                        Administración 
                    </Link>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;