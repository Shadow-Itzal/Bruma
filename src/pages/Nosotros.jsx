// Página para presentar al equipo de Bruma


// =====================
// IMPORTACIONES
// =====================

import { useState, useEffect } from 'react';
import styles from './Nosotros.module.css';


// =====================
// COMPONENTE PRINCIPAL
// =====================


function Nosotros() {
    const [equipo, setEquipo] = useState([]);

    useEffect(() => {
        fetch('/data/equipo.json')
            .then(res => res.json())
            .then(data => setEquipo(data.equipo_bruma))
            .catch(err => console.error("Error cargando el equipo:", err));
    }, []);

    return (
        <div className={styles.nosotrosContainer}>
            {/* Sección de Historia */}
            <section className={styles.historia}>
                <h1>Nuestra Historia</h1>
                <p>
                    Bruma nació de la necesidad de capturar lo efímero. En un mundo que corre, 
                    nosotros elegimos detenernos. No somos solo una galería; somos un laboratorio 
                    de impresión fina donde la tecnología de vanguardia se encuentra con la 
                    sensibilidad del ojo humano.
                </p>
                <p>
                    Creemos que las paredes de un hogar no deben estar llenas de objetos, 
                    sino de ventanas a otros mundos, a otros climas, a otros silencios.
                </p>
            </section>

            <hr className={styles.divisor} />

            {/* Sección del Equipo */}
            <section className={styles.equipoSeccion}>
                <h2>El Alma de Bruma</h2>
                <div className={styles.gridEquipo}>
                    {equipo.map((miembro, index) => (
                        <div key={miembro.id} className={`${styles.cardMiembro} ${styles[`foto${index}`]}`}>
                            <div className={styles.contenedorFoto}>
                                <img src={miembro.foto_url} alt={miembro.nombre} />
                            </div>
                            <div className={styles.infoMiembro}>
                                <h3>{miembro.nombre}</h3>
                                <span className={styles.cargo}>{miembro.cargo}</span>
                                <p className={styles.frase}>"{miembro.frase}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Nosotros;