// =================
//  IMPORTACIONES
// =================

// Link permite navegar SIN recargar la pagina
import { Link } from 'react-router-dom'

// Navbar
import Navbar from '../navbar/Navbar'

// css module
import styles from './Header.module.css'



// ====================
//  COMPONENTE HEADER
// ====================

function Header() {

    return (

        <header className={styles.header}>

            {/* Logo / Marca */}
            <div className={styles.logoContainer}>

                <Link to='/'>

                    <img 
                        src='/images/marca/nav-marca.png'
                        alt='Logo Bruma'
                        className={styles.logo}
                    />

                </Link>
            </div>

            {/* navegacion */}
            <Navbar />

        </header>
    )
}

export default Header