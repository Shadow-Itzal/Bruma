// =====================
// IMPORTACIONES
// =====================

import Heroe from "../components/layout/heroe/Heroe";
import ItemListContainer from "../components/productos/ItemListContainer";


// =====================
// COMPONENTE PRINCIPAL
// =====================


function Home() {
    
    return (
        <>

            {/* heroe principal */}
            <Heroe />

            {/* Aqui le avisamos que solo me muestre 6 productos */}
            <ItemListContainer 
                mensaje="Productos Destacados"
                soloDestacados={true}
            />

        </>
    );
}

export default Home;