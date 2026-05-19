// src/pages/Admin.jsx
import React, { useState } from "react";
import styles from "./Admin.module.css"; 

function Admin() {
    
    const estadoInicialFormulario = {
        nombre: '',
        precio: '',
        dimensiones: '',
        categoria: '', 
        materiales: '',
        tecnica: '',
        stock: '',
        descripcion: '',
        frase_inspiracional: '',
        imagen_escenario: null, 
        imagen_producto: null  
    };

    const [datosFormulario, setDatosFormulario] = useState(estadoInicialFormulario);
    const [mostrarExito, setMostrarExito] = useState(false);
    
    // ESTADO NUEVO: Para forzar el reseteo visual de los inputs de tipo file
    const [llaveReset, setLlaveReset] = useState(0);

    const manejarCambio = (evento) => {
        const { name, value, type, files } = evento.target;
        
        if (type === "file") {
            setDatosFormulario({
                ...datosFormulario,
                [name]: files[0] 
            });
        } else {
            setDatosFormulario({
                ...datosFormulario,
                [name]: value
            });
        }
    };  

    const manejarEnvio = (evento) => {
        evento.preventDefault(); 

        console.log('Obra capturada para Bruma:', datosFormulario);

        // 1. Limpiamos los datos del estado
        setDatosFormulario(estadoInicialFormulario);

        // 2. Cambiamos la llave para obligar a los inputs de archivo a vaciarse
        setLlaveReset(prev => prev + 1);

        // 3. Mostramos el cartel de éxito
        setMostrarExito(true);
        setTimeout(() => {
            setMostrarExito(false);
        }, 4000);
    };

    return (
        <div className={styles.contenedorAdmin}>

            <header className={styles.cabeceraAdmin}>
                <h1 className={styles.fraseInspiracional}>
                    "Curando el arte, organizando la Bruma."
                </h1>
                <p className={styles.subtituloAdmin}>Módulo de Gestión de Trastienda</p>
            </header>

            <form onSubmit={manejarEnvio} className={styles.formularioCarga}>
                
                {/* Nombre de la obra */}
                <div className={styles.grupoCampo}>
                    <label>Nombre de la Obra</label>
                    <input 
                        type="text" 
                        name="nombre" 
                        value={datosFormulario.nombre} 
                        onChange={manejarCambio} 
                        required 
                    />
                </div>

                {/* Precio y Stock */}
                <div className={styles.filaDoble}>
                    <div className={styles.grupoCampo}>
                        <label>Precio ($)</label>
                        <input 
                            type="number" 
                            name="precio" 
                            value={datosFormulario.precio} 
                            onChange={manejarCambio} 
                            required 
                        />
                    </div>
                    <div className={styles.grupoCampo}>
                        <label>Stock Disponible</label>
                        <input 
                            type="number" 
                            name="stock" 
                            value={datosFormulario.stock} 
                            onChange={manejarCambio} 
                            required 
                        />
                    </div>
                </div>

                {/* Dimensiones y Categoría */}
                <div className={styles.filaDoble}>
                    <div className={styles.grupoCampo}>
                        <label>Dimensiones (ej: 110cm x 75cm)</label>
                        <input 
                            type="text" 
                            name="dimensiones" 
                            value={datosFormulario.dimensiones} 
                            onChange={manejarCambio} 
                            required 
                        />
                    </div>
                    <div className={styles.grupoCampo}>
                        <label>Categoría</label>
                        <input 
                            type="text" 
                            name="categoria" 
                            value={datosFormulario.categoria} 
                            onChange={manejarCambio} 
                            required 
                        />
                    </div>
                </div>

                {/* Técnica */}
                <div className={styles.grupoCampo}>
                    <label>Técnica Artística</label>
                    <input 
                        type="text" 
                        name="tecnica" 
                        value={datosFormulario.tecnica} 
                        onChange={manejarCambio} 
                        required 
                    />
                </div>

                {/* Materiales */}
                <div className={styles.grupoCampo}>
                    <label>Materiales y Enmarcado</label>
                    <input 
                        type="text" 
                        name="materiales" 
                        value={datosFormulario.materiales} 
                        onChange={manejarCambio} 
                        required 
                    />
                </div>

                {/* Frase Opcional */}
                <div className={styles.grupoCampo}>
                    <label>Frase Inspiracional (Opcional)</label>
                    <input 
                        type="text" 
                        name="frase_inspiracional" 
                        value={datosFormulario.frase_inspiracional} 
                        onChange={manejarCambio} 
                    />
                </div>

                {/* Descripción */}
                <div className={styles.grupoCampo}>
                    <label>Descripción Curatorial</label>
                    <textarea 
                        name="descripcion" 
                        rows="4"
                        value={datosFormulario.descripcion} 
                        onChange={manejarCambio} 
                        required 
                    ></textarea>
                </div>

                {/* Imágenes locales con KEY DINÁMICA */}
                <div className={styles.grupoCampo}>
                    <label>Imagen Escenario (Mockup en ambiente)</label>
                    <input 
                        key={`escenario-${llaveReset}`}
                        type="file" 
                        name="imagen_escenario" 
                        accept="image/*"
                        onChange={manejarCambio} 
                        required 
                    />
                </div>

                <div className={styles.grupoCampo}>
                    <label>Imagen Producto (Solo el lienzo/cuadro)</label>
                    <input 
                        key={`producto-${llaveReset}`}
                        type="file" 
                        name="imagen_producto" 
                        accept="image/*"
                        onChange={manejarCambio} 
                        required 
                    />
                </div>

                <button type="submit" className={styles.botonEnviar}>
                    Subir a Galería
                </button>

                {mostrarExito && (
                    <div className={styles.mensajeExito}>
                        ¡Gracias por tu magia en la trastienda!
                    </div>
                )}
            </form>
        </div>
    );
}

export default Admin;