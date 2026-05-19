
// =====================
// IMPORTACIONES
// =====================

import React, { useState } from "react";
import styles from "./Admin.module.css"; 

function Admin() {

    // =========================
    // ESTADOS Y CONFIGURACION
    // =========================
    
    // molde base para limpiar el formulario
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
    const [mostrarExito, setMostrarExito] = useState(false); // booleano sobre mensaje de exito
    const [loading, setLoading] = useState(false); // Estado de carga (Loading), evita que el usuario envíe el formulario dos
    const [llaveReset, setLlaveReset] = useState(0); // Llave de reseteo para forzar a React a destruir y recrear los inputs de tipo file

    // Leer la API Key de forma segura desde las variables de entorno de Vite (.env)
    const API_KEY_IMGBB = import.meta.env.VITE_IMGBB_API_KEY;


    // =========================
    // MANEJADORES DE EVENTOS
    // =========================

    // Función unificada para capturar los cambios en tiempo real del formulario (Evento onChange)
    const manejarCambio = (evento) => {
        const { name, value, type, files } = evento.target;
        
        // Evaluamos si el input es de tipo archivo (file)
        if (type === "file") {
            setDatosFormulario({
                ...datosFormulario,
                [name]: files[0] 
            });
        } else {
            // Si es un input de texto, número o textarea común
            setDatosFormulario({
                ...datosFormulario,
                [name]: value
            });
        }
    };  

    // Función auxiliar asíncrona para subir una imagen individual a ImgBB
    const subirImagenAImgBB = async (archivo) => {
        if (!archivo) return null; // Si por alguna razón el campo opcional u obligatorio no posee un archivo, frena la ejecución

        const formData = new FormData();
        formData.append("image", archivo);

        try {
            // Petición POST a la API de ImgBB usando la API Key por parámetro de URL
            const respuesta = await fetch(`https://api.imgbb.com/1/upload?key=${API_KEY_IMGBB}`, {
                method: "POST",
                body: formData
            });

            if (!respuesta.ok) {
                throw new Error("Error al subir la imagen a ImgBB");
            }

            const resultadoJson = await respuesta.json();
            // Retornamos la URL limpia y directa que nos provee el servicio externo
            return resultadoJson.data.url;
        } catch (error) {
            console.error("Error en la carga de archivos:", error);
            throw error;
        }
    };


    // manejador del envio definitivo del formulario
    const manejarEnvio = async (evento) => {
        evento.preventDefault(); 
        setLoading(true); // Activamos estado de carga para congelar el botón y dar feedback

        try {
            // 1. Subimos ambas imágenes en paralelo o secuencial a ImgBB
            console.log("Subiendo imágenes a la nube de ImgBB...");
            const urlEscenario = await subirImagenAImgBB(datosFormulario.imagen_escenario);
            const urlProducto = await subirImagenAImgBB(datosFormulario.imagen_producto);

            // 2. Construimos el objeto final con las URLs reales listas para tu productos.json ficticio o estado global
            const nuevaObraDeArte = {
                ...datosFormulario,
                precio: Number(datosFormulario.precio),
                stock: Number(datosFormulario.stock),
                imagen_escenario: urlEscenario, // Ahora es un string http://...
                imagen_producto: urlProducto    // Ahora es un string http://...
            };

            // Replicamos el console.log original mostrando el éxito sofisticado
            console.log('Obra capturada con URLs reales para Bruma:', nuevaObraDeArte);

            // 3. Limpiamos los datos del estado e inputs
            setDatosFormulario(estadoInicialFormulario); // Blanqueamos los estados de texto y número
            setLlaveReset(prev => prev + 1); // Incrementamos la key para forzar el vaciado de los inputs file

            // 4. Mostramos el cartel de éxito
            setMostrarExito(true);
            setTimeout(() => {
                setMostrarExito(false);
            }, 4000);

        } catch (error) {
            alert("Hubo un problema al guardar la obra. Por favor, intenta de nuevo.");
        } finally {
            setLoading(false); // Apagamos el cargador pase lo que pase
        }
    };


    // =============================
    // RENDERIZADO DEL COMPONENTE
    // =============================

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
                        disabled={loading} // Se congela si está cargando
                        placeholder="ej: Bruma Matinal"
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
                            disabled={loading}
                            placeholder="2500"
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
                            disabled={loading}
                            placeholder="4"
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
                            disabled={loading}
                            placeholder="ej: 110cm x 75cm"
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
                            disabled={loading}
                            placeholder="ej: Pintura Contemporánea"
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
                        disabled={loading}
                        placeholder="ej: Fotografia artistica"
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
                        disabled={loading}
                        placeholder="ej: Impresión Giclée sobre papel Fine Art..."
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
                        disabled={loading}
                        onChange={manejarCambio} 
                        placeholder="ej: El silencio que antecede al color."
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
                        disabled={loading}
                        placeholder="Escribe aquí el análisis de la obra, trazos y contexto emocional..."
                        required 
                    ></textarea>
                </div>

                {/* Imágenes locales con KEY DINÁMICA */}
                <div className={styles.grupoCampo}>
                    <label>Imagen Escenario {loading && "— Subiendo..."}</label>
                    <input 
                        key={`escenario-${llaveReset}`}
                        type="file" 
                        name="imagen_escenario" 
                        accept="image/*"
                        onChange={manejarCambio} 
                        disabled={loading}
                        required 
                    />
                </div>

                <div className={styles.grupoCampo}>
                    <label>Imagen Producto {loading && "— Subiendo..."}</label>
                    <input 
                        key={`producto-${llaveReset}`}
                        type="file" 
                        name="imagen_producto" 
                        accept="image/*"
                        onChange={manejarCambio} 
                        disabled={loading}
                        required 
                    />
                </div>

                <button type="submit" className={styles.botonEnviar} disabled={loading}>
                    {loading ? "Procesando Obra..." : "Subir a Galería"}
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
