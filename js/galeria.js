const contenedor = document.getElementById("galeria-productos");

function cargarProductos() {

    bdproductos.forEach((producto,) => {
        const productoHTML = `
            <div class="card-product">
                <div class="container-img">
                    <a href="../Pages/error.html" class="product-link" data-product='${JSON.stringify(producto)}'>
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
            </div>
        `;

        contenedor.insertAdjacentHTML("beforeend", productoHTML);
    });
    }
    
    cargarProductos()