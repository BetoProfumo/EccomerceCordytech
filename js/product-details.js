// product-details.js

document.addEventListener('DOMContentLoaded', () => {
    //recupero el id desde url
    const querystring = window.location.search
    const params = new URLSearchParams(querystring)
    const pid = params.get("pid")
    //obtener base de datos
    const basededatostemp = JSON.parse(localStorage.getItem("bdProductos"))
    // Recuperar el producto seleccionado desde DB

    const producto= basededatostemp.find( (producto)=> producto.id == pid) 
    console.log(producto);
    if (producto) {
        // Insertar datos en los elementos HTML
        document.getElementById('product-image').src = producto.imagen;
        document.getElementById('product-image').alt = producto.name;
        document.getElementById('product-name').textContent = producto.nombre;
        document.getElementById('product-platform').textContent = `Plataforma: ${producto.platform}`;
        document.getElementById('product-rating').textContent = producto.rating;
        document.getElementById('product-price').textContent = `$${producto.precio}`;

        document.getElementById('product-details').innerHTML = `
            <li>Formato: ${producto.format}</li>
            <li>Plataforma: ${producto.platform}</li>
            <li>Clasificación: ${producto.rating}</li>
            <li>Año de lanzamiento: ${producto.releaseYear}</li>
            <li>Desarrollado por: ${producto.developer}</li>
            <li>Género: ${producto.genre}</li>
            <li>Tamaño del archivo: ${producto.fileSize}</li>
            <li>RAM mínima necesaria: ${producto.minRAM}</li>
            <li>Disponible para jugar online: ${producto.onlinePlay ? 'Sí' : 'No'}</li>
            <li>Descripción: ${producto.description}</li>
        `;
    } else {
        // Mostrar un mensaje si no se encontró el producto
        document.querySelector('.product-container').innerHTML = '<p>Producto no encontrado.</p>';
    }
});
