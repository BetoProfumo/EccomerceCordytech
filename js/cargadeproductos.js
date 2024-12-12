document.getElementById("productForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtener los productos existentes en Local Storage
  const bdProductos = JSON.parse(localStorage.getItem("bdProductos")) || [];

  // Generar un nuevo ID único (mayor al ID más alto actual)
  const nuevoId = Math.max(16, ...bdProductos.map((p) => p.id)) + 1;

  // Crear el nuevo producto con los datos del formulario
  const nuevoProducto = {
    id: nuevoId,
    nombre: document.getElementById("nombre").value,
    precio: parseFloat(document.getElementById("precio").value),
    precioAnterior: parseFloat(document.getElementById("precioAnterior").value) || null,
    descuento: document.getElementById("descuento").value || null,
    imagen: document.getElementById("imagen").value,
    estrellas: parseFloat(document.getElementById("estrellas").value),
    platform: document.getElementById("platform").value,
    format: document.getElementById("format").value,
    rating: document.getElementById("rating").value,
    releaseYear: parseInt(document.getElementById("releaseYear").value),
    developer: document.getElementById("developer").value,
    genre: document.getElementById("genre").value,
    fileSize: document.getElementById("fileSize").value,
    minRAM: document.getElementById("minRAM").value,
    onlinePlay: document.getElementById("onlinePlay").value === "true",
    description: document.getElementById("description").value,
    reciente: document.getElementById("reciente").value === "true",
    destacado: document.getElementById("destacado").value === "true",
    modohistoria: document.getElementById("modohistoria").value === "true",
    deportes: document.getElementById("deportes").value === "true",
    accion: document.getElementById("accion").value === "true",
  };

  // Agregar el nuevo producto a la base de datos
  bdProductos.push(nuevoProducto);
  localStorage.setItem("bdProductos", JSON.stringify(bdProductos));

  // Confirmación visual
  alert("Producto agregado exitosamente!");

  // Reiniciar el formulario
  event.target.reset();
});
