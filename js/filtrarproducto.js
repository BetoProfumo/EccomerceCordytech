// Función para renderizar los productos en el contenedor HTML
function renderProductos(productos, containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`No se encontró el contenedor con el ID: ${containerId}`);
        return;
    }

    container.innerHTML = ""; // Limpiar contenido previo
    productos.forEach((producto) => {
        const productoHTML = `
        <div class="card-product">
            <div class="container-img">
                <a href="../Pages/error.html">
                    <img src="${producto.imagen}" alt="${producto.nombre}" />
                </a>
                ${producto.descuento ? `<span class="discount">${producto.descuento}</span>` : ""}
                <div class="button-group">
                    <span><i class="fa-regular fa-eye"></i></span>
                    <span><i class="fa-regular fa-heart"></i></span>
                    <span><i class="fa-solid fa-code-compare"></i></span>
                </div>
            </div>
            <div class="content-card-product">
                <div class="stars">
                    ${Array.from({ length: 5 }, (_, i) =>
                        i < producto.estrellas
                            ? '<i class="fa-solid fa-star"></i>'
                            : '<i class="fa-regular fa-star"></i>'
                    ).join("")}
                </div>
                <h3>${producto.nombre}</h3>
                <span class="add-cart"><i class="fa-solid fa-basket-shopping"></i></span>
                <p class="price">
                    $${producto.precio} ${producto.precioAnterior ? `<span>$${producto.precioAnterior}</span>` : ""}
                </p>
            </div>
        </div>`;
        container.innerHTML += productoHTML;
    });
}

// Función principal para filtrar productos por categoría
function filtrarProductosPorCategoria() {
    const categorias = {
        accion: "productosAccion",
        modohistoria: "productosModoHistoria",
        deportes: "productosDeportes",
    };

    // Detectar la categoría desde el atributo `data-categoria` en el <body>
    const categoria = document.body.dataset.categoria;
    if (!categoria || !categorias[categoria]) {
        console.error("Categoría no válida o no especificada.");
        return;
    }

    const productosFiltrados = bdproductos.filter((producto) => producto[categoria]);
    renderProductos(productosFiltrados, categorias[categoria]);
}

// Ejecutar la función al cargar la página
filtrarProductosPorCategoria();
