# 🌌 Bruma Galería — E-commerce de Arte Premium

Bienvenido/a al repositorio oficial de **Bruma Galería**.  
Este proyecto consiste en una tienda online de arte gráfico desarrollada como una **Single Page Application (SPA)** en React, con una estética minimalista, editorial y sofisticada.

La propuesta visual busca transmitir:

- calma
- elegancia
- diseño interior premium
- accesibilidad artística
- experiencia de galería moderna

---

# ✨ Concepto del Proyecto

Bruma Galería es un e-commerce especializado en la exhibición y venta de obras artísticas impresas de alta calidad.

El proyecto fue diseñado priorizando:

- Arquitectura limpia y modular
- Componentes reutilizables
- Navegación fluida sin recargas
- Diseño minimalista
- Mucho espacio negativo
- Animaciones suaves
- Experiencia visual elegante

---

# 🎨 Identidad Visual

## Paleta de colores

| Color | Hex |
|---|---|
| Azul Medianoche | `#141430` |
| Verde Salvia | `#99AC8B` |
| Fondo Claro | `#F7F7F7` |
| Blanco Puro | `#ffffff` |

---

## Tipografías sugeridas

- **Inter**
- **Montserrat**
- **Playfair Display**

---

# 🚀 Tecnologías Utilizadas

- **React 18**
- **Vite**
- **React Router DOM v6**
- **CSS Modules**
- **Context API**
- **Fetch API**
- **ImgBB API** (para subida de imágenes)

---

# 📂 Estructura del Proyecto

```text
bruma/
│
├── public/
│   └── data/
│       ├── productos.json
│       └── equipo.json
│
├── images/
│   ├── equipo
│   ├── marca
│   └── productos
│
├── favicon.png
│
├── src/
│   ├── assets/
│   │   └── hero.png
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header/
│   │   │   │   ├── Header.jsx
│   │   │   │   └── Header.module.css
│   │   │   │
│   │   │   ├── footer/
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Footer.module.css
│   │   │   │
│   │   │   ├── heroe/
│   │   │   │   ├── Heroe.jsx
│   │   │   │   └── Heroe.module.css
│   │   │   │
│   │   │   ├── navbar/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Navbar.module.css
│   │   │   │
│   │   │   ├── Layout.jsx
│   │   │   └── Layout.module.css
│   │   │
│   │   ├── productos/
│   │   │   ├── Item.jsx
│   │   │   ├── Item.module.css
│   │   │   ├── ItemDetail.jsx
│   │   │   ├── ItemDetail.module.css
│   │   │   ├── ItemDetailContainer.jsx
│   │   │   ├── ItemList.jsx
│   │   │   ├── ItemListContainer.jsx
│   │   │   └── ItemListContainer.module.css
│   │   │
│   │   └── comunes
│   │           ├── Contador.jsx
│   │           └── Contador.module.css
│   │
│   ├── context/
│   │   └── CartContext.jsx
│   │
│   ├── pages/
│   │   ├── Admin.jsx
│   │   ├── Admin.module.css
│   │   ├── Carrito.jsx
│   │   ├── Carrito.module.css
│   │   ├── Detalle.jsx
│   │   ├── Detalle.module.css
│   │   ├── Home.jsx
│   │   ├── Nosotros.jsx
│   │   ├── Nosotros.module.css
│   │   └── Productos.jsx
│   │
│   ├── App.jsx
│   ├── App.css   
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── .env
├── .gitignore
├── package.json
└── vite.config.js
```

---

# 📖 Explicación del Flujo de la Aplicación

## 🧭 Sistema de Ruteo

La navegación se maneja mediante **React Router DOM**.

Las rutas principales del proyecto son:

| Ruta | Descripción |
|---|---|
| `/` | Página principal |
| `/productos` | Catálogo completo |
| `/producto/:id` | Detalle de una obra |
| `/nosotros` | Información del equipo |
| `/carrito` | Carrito de compras |
| `/admin` | Panel de administración |

---

## 🧥 Layout Global

El componente `Layout.jsx` funciona como la estructura principal de la aplicación.

Contiene:

- Header
- Main
- Footer

Gracias al componente `<Outlet />`, las páginas cambian dinámicamente sin recargar el navegador.

---

## 📦 Consumo de Datos

Los productos y miembros del equipo se obtienen desde archivos JSON locales usando:

- `useEffect`
- `fetch`

Esto simula el comportamiento de una API real.

---

## 🛒 Carrito de Compras

El carrito utiliza **Context API** para manejar el estado global.

Esto permite:

- Agregar productos
- Eliminar productos
- Vaciar carrito
- Compartir datos entre componentes

Sin necesidad de pasar props manualmente entre múltiples niveles.

---

## 🖼️ Panel Admin y Subida de Imágenes

La sección `/admin` permite cargar nuevas obras.

El formulario utiliza:

- `useState`
- Inputs controlados
- Peticiones `POST`

Las imágenes se suben a **ImgBB**, que devuelve una URL pública para almacenar la obra correctamente.

---

# 🧠 Conceptos de React Aplicados

El proyecto utiliza conceptos vistos durante las clases:

- Componentes reutilizables
- Props
- Destructuring
- `.map()`
- Hooks (`useState`, `useEffect`, `useContext`)
- React Router
- Context API
- CSS Modules
- Fetch API
- Layouts
- Componentes contenedores y presentacionales

---

# 🛠️ Instalación del Proyecto

## 1️⃣ Clonar repositorio

```bash
git clone https://github.com/Shadow-Itzal/Bruma.git
```

---

## 2️⃣ Entrar a la carpeta

```bash
cd Bruma
```

---

## 3️⃣ Instalar dependencias

```bash
npm install
```

---

## 4️⃣ Crear archivo `.env`

En la raíz del proyecto crear:

```env
VITE_IMGBB_API_KEY=tu_api_key
```

---

## 5️⃣ Ejecutar proyecto

```bash
npm run dev
```

---

## 6️⃣ Abrir en navegador

```text
http://localhost:5173
```

---

# 🏛️ Estado del Proyecto

## ✅ Funcionalidades Implementadas

- [x] Layout con Header y Footer
- [x] Navegación con React Router
- [x] Catálogo dinámico desde JSON
- [x] Componentes reutilizables
- [x] Vista detalle de productos
- [x] Diseño responsive básico
- [x] Formulario Admin
- [x] Integración con ImgBB
- [x] Context API para carrito
- [x] CSS Modules

---

# 👥 Equipo Bruma

El proyecto incluye una sección dedicada al equipo curador de Bruma.

Integrantes actuales:

- Lucía Rossi — Curadora de Arte
- Mateo Aranda — Especialista en Impresión
- Julián Paz — Director de Experiencia

---

# 🖼️ Catálogo de Obras

El catálogo utiliza un archivo `productos.json` con información detallada de cada obra:

- nombre
- precio
- dimensiones
- materiales
- técnica
- categoría
- stock
- descripción
- imágenes

---

# 📚 Referencias Académicas

Este proyecto fue desarrollado siguiendo contenidos vistos en clases:

- Componentización
- Layouts
- Props
- Hooks
- Fetch
- React Router
- Context API
- CSS Modules

---

# ✨ Filosofía de Diseño

Bruma no busca solamente vender cuadros.

Busca crear una experiencia visual tranquila, elegante y emocional, donde cada obra tenga espacio para respirar y transmitir sensaciones.

---

# 👩‍💻 Desarrollado con React + Vite

Proyecto académico realizado para práctica de desarrollo frontend moderno con React.

---

# 🌫️ Bruma Galería

> “El arte no solo decora espacios.  
> También construye atmósferas.”
