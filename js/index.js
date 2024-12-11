// Cargar productos dinámicamente
bdproductos.forEach((producto, index) => {
  const productoHTML = `
    <div class="card-product">
      <div class="container-img">
        <a href="" class="product-link" data-index="${index}">
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

  // Agregar el producto al contenedor correcto
  if (producto.destacado) {
    document.getElementById("productosDestacados").innerHTML += productoHTML;
  }
  if (producto.reciente) {
    document.getElementById("productosRecientes").innerHTML += productoHTML;
  }
});

// Agregar eventos de clic a los enlaces de productos
document.querySelectorAll(".product-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Evitar recarga de la página

    const productIndex = link.getAttribute("data-index"); // Obtener índice del producto
    const selectedProduct = bdproductos[productIndex]; // Obtener el producto correspondiente

    if (selectedProduct) {
      // Guardar el producto en localStorage
      localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));

      // Redirigir a la página de detalles
      window.location.href = "Pages/product-details.html"; // Asegúrate de que la ruta sea correcta
    } else {
      console.error("Producto no encontrado.");
    }
  });
});


