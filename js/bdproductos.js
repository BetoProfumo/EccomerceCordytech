//Base de datos de trabajo
const bdproductos = JSON.parse(localStorage.getItem("bdProductos")) ||  [
    {
                    id:1,
                    nombre: "The Last of Us Part II",
                    precio: 40,
                    precioAnterior: 50,
                    descuento: "-20%",
                    imagen: "/Assets/The Last of Us 2.png",
                    estrellas: 5,
                    platform: "PS4",
                    format: "Digital",
                    rating: "Mature 17+",
                    releaseYear: 2020,
                    developer: "Naughty Dog",
                    genre: "Acción, Aventura",
                    fileSize: "90 GB",
                    minRAM: "8 GB",
                    onlinePlay: false,
                    description: "Una emotiva historia de venganza ambientada en un mundo postapocalíptico.",
                    reciente: false,
                    destacado:true,
                    modohistoria:true,
                    deportes: false,
                    accion:true
                },
                {
                    id: 2,
                    nombre: "NBA 2K24",
                    precio: 60,
                    precioAnterior: 70,
                    descuento: "-15%",
                    imagen: "/Assets/NBA2k24.png",
                    estrellas: 4.2,
                    platform: "PS5",
                    format: "Digital",
                    rating: "Everyone",
                    releaseYear: 2023,
                    developer: "2K Sports",
                    genre: "Deportes",
                    fileSize: "90 GB",
                    minRAM: "8 GB",
                    onlinePlay: true,
                    description: "El baloncesto cobra vida con gráficos de última generación y modos innovadores.",
                    reciente: false,
                    destacado: false,
                    modohistoria:false,
                    deportes: true,
                    accion:false
                },
                {
                    id:3,
                    nombre: "God of War Ragnarok",
                    precio: 60,
                    imagen: "/Assets/God of War Ragnarok.png",
                    estrellas: 4,
                    platform: "PS5",
                    format: "Físico",
                    rating: "Mature 17+",
                    releaseYear: 2022,
                    developer: "Santa Monica Studio",
                    genre: "Acción, Aventura",
                    fileSize: "120 GB",
                    minRAM: "16 GB",
                    onlinePlay: true,
                    description: "Acompaña a Kratos y Atreus en una épica travesía mitológica.",
                    reciente: false,
                    destacado:true,
                    modohistoria:true,
                    deportes: false,
                    accion:true
                },
                {
                    id: 4,
                    nombre: "Tony Hawk Pro Skater 1+2",
                    precio: 40,
                    precioAnterior: 50,
                    descuento: "-20%",
                    imagen: "/Assets/TonyHawk.png",
                    estrellas: 4.7,
                    platform: "PS4, PS5",
                    format: "Digital",
                    rating: "Teen",
                    releaseYear: 2020,
                    developer: "Vicarious Visions",
                    genre: "Deportes, Skate",
                    fileSize: "25 GB",
                    minRAM: "8 GB",
                    onlinePlay: false,
                    description: "La remasterización definitiva de los icónicos juegos de skateboarding.",
                    reciente: false,
                    destacado: false,
                    modohistoria:false,
                    deportes: true,
                    accion:false
                },
                {
                    id: 5,
                    nombre: "Dead by Daylight",
                    precio: 20,
                    precioAnterior: 30,
                    descuento: "-33%",
                    imagen: "/Assets/Dead by Daylight.png",
                    estrellas: 4.5,
                    platform: "PS4, PS5, Xbox, PC, Nintendo Switch",
                    format: "Digital y Físico",
                    rating: "Mature 17+",
                    releaseYear: 2016,
                    developer: "Behaviour Interactive",
                    genre: "Horror, Supervivencia Multijugador",
                    fileSize: "50 GB",
                    minRAM: "8 GB",
                    onlinePlay: true,
                    description: "Un juego de horror multijugador en el que cuatro sobrevivientes deben escapar de un asesino enloquecido en mapas generados aleatoriamente. Coopera o traiciona, pero intenta sobrevivir.",
                    reciente:false,
                    destacado:true,
                    modohistoria:false,
                    deportes: false,
                    accion:false
                },
                {
                    id: 6,
                    nombre: "Madden NFL 24",
                    precio: 50,
                    precioAnterior: 70,
                    descuento: "-28%",
                    imagen: "/Assets/MaddenNFL.png",
                    estrellas: 3.8,
                    platform: "PS5",
                    format: "Digital",
                    rating: "Everyone",
                    releaseYear: 2023,
                    developer: "EA Sports",
                    genre: "Deportes",
                    fileSize: "60 GB",
                    minRAM: "8 GB",
                    onlinePlay: true,
                    description: "Domina el emparrillado con jugabilidad realista y características innovadoras.",
                    reciente: false,
                    destacado: false,
                    modohistoria:false,
                    deportes: true,
                    accion:false
                },
                {
                    id:7,
                    nombre: "Resident Evil 4",
                    precio: 60,
                    precioAnterior: 70,
                    descuento: "-14%",
                    imagen: "/Assets/Resident Evil.png",
                    estrellas: 5,
                    platform: "PS4, PS5, Xbox Series X|S, PC",
                    format: "Digital y Físico",
                    rating: "Mature 17+",
                    releaseYear: 2023,
                    developer: "Capcom",
                    genre: "Acción, Survival Horror",
                    fileSize: "67 GB",
                    minRAM: "16 GB",
                    onlinePlay: false,
                    description: "Un emocionante remake del clásico survival horror que redefine la experiencia con gráficos modernos y jugabilidad mejorada. Acompaña a Leon S. Kennedy en su misión para rescatar a la hija del presidente mientras enfrenta horrores inimaginables.",
                    reciente: false,
                    destacado:true,
                    modohistoria:true,
                    deportes: false,
                    accion:true
                    },
                    {
                    id:8,
                    nombre: "Black Myth: Wukong",
                    precio: 60,
                    precioAnterior: 70,
                    descuento: "-15%",
                    imagen: "/Assets/Black-Myth-Wukong-PS5.png",
                    estrellas: 4,
                    platform: "PC, PS5, Xbox Series X|S",
                    format: "Digital",
                    rating: "Teen",
                    releaseYear: 2024,
                    developer: "Game Science",
                    genre: "Acción, RPG",
                    fileSize: "100 GB",
                    minRAM: "16 GB",
                    onlinePlay: true,
                    description: "Un espectacular RPG de acción inspirado en la mitología china y el Viaje al Oeste, con combate dinámico y gráficos impresionantes.",
                    reciente: true,
                    destacado:false,
                    modohistoria:true,
                    deportes: false,
                    accion:true
                },
                {
                    id:9,
                    nombre: "Dragon Ball Sparking Zero",
                    precio: 54,
                    precioAnterior: 70,
                    descuento: "-22%",
                    imagen: "/Assets/DRAGON-BALL-Sparking-ZERO-PS5.png",
                    estrellas: 3,
                    platform: "PS5, PC, Xbox Series X|S",
                    format: "Digital",
                    rating: "Teen",
                    releaseYear: 2023,
                    developer: "Bandai Namco Entertainment",
                    genre: "Lucha, Acción",
                    fileSize: "45 GB",
                    minRAM: "8 GB",
                    onlinePlay: true,
                    description: "Una intensa experiencia de lucha que reúne a los héroes y villanos más icónicos de la saga Dragon Ball, con gráficos mejorados y combates llenos de energía.",
                    reciente: true,
                    destacado:false,
                    modohistoria:true,
                    deportes: false,
                    accion:true
                },
                {
                    id:10,
                    nombre: "Suicide Squad: Kill the Justice League",
                    precio: 70,
                    precioAnterior: 85,
                    descuento: "-18%",
                    imagen: "/Assets/SQ.jpg",
                    estrellas: 5,
                    platform: "PS5, Xbox Series X|S, PC",
                    format: "Digital",
                    rating: "Mature 17+",
                    releaseYear: 2024,
                    developer: "Rocksteady Studios",
                    genre: "Acción, Aventura, Shooter",
                    fileSize: "65 GB",
                    minRAM: "16 GB",
                    onlinePlay: true,
                    description: "Forma un equipo con los villanos más peligrosos de DC en una misión épica para derrotar a la Liga de la Justicia, que ha caído bajo el control de Brainiac.",
                    reciente: true,
                    destacado:false,
                    modohistoria:true,
                    deportes: false,
                    accion:true
                },
                {
                    id:11,
                    nombre: "Spiderman 2",
                    precio: 70,
                    precioAnterior: 85,
                    descuento: "-18%",
                    imagen: "/Assets/spiderman.pngASDASD.png",
                    estrellas: 5,
                    platform: "PS5",
                    format: "Digital",
                    rating: "Teen",
                    releaseYear: 2024,
                    developer: "Insomniac Games",
                    genre: "Acción, Aventura",
                    fileSize: "65 GB",
                    minRAM: "16 GB",
                    onlinePlay: false,
                    description: "Únete a Peter Parker y Miles Morales en su lucha para proteger Nueva York contra nuevas amenazas en esta emocionante secuela llena de acción y superpoderes.",
                    reciente: true,
                    destacado:false,
                    modohistoria:true,
                    deportes: false,
                    accion:true
                },
                {
                    id: 12,
                    nombre: "Assassins Creed Mirage",
                    precio: 50,
                    precioAnterior: 60,
                    descuento: "-17%",
                    imagen: "/Assets/AssassinsCreedMirage.png",
                    estrellas: 4,
                    platform: "PS5",
                    format: "Digital",
                    rating: "Mature 17+",
                    releaseYear: 2023,
                    developer: "Ubisoft",
                    genre: "Acción, Aventura",
                    fileSize: "45 GB",
                    minRAM: "8 GB",
                    onlinePlay: false,
                    description: "Explora los orígenes de los Asesinos en una experiencia más íntima y narrativa.",
                    reciente: false,
                    destacado: false,
                    modohistoria:true,
                    deportes: false,
                    accion:true
                },
                {
                    id:13,
                    nombre: "Mortal Kombat 1",
                    precio: 30,
                    precioAnterior: 50,
                    descuento: "-40%",
                    imagen: "/Assets/Mortal Kombat portada.png",
                    estrellas: 4.5,
                    platform: "PS4, PS5",
                    format: "Digital",
                    rating: "Mature 17+",
                    releaseYear: 2024,
                    developer: "NetherRealm Studios",
                    genre: "Lucha",
                    fileSize: "50 GB",
                    minRAM: "8 GB",
                    onlinePlay: true,
                    description: "El combate más brutal regresa con gráficos impresionantes y una historia épica.",
                    reciente: false,
                    destacado: false,
                    modohistoria:true,
                    deportes: false,
                    accion:true
                },
                {
                    id:14,
                    nombre: "EA FC 24",
                    precio: 70,
                    precioAnterior: null,
                    descuento: null,
                    imagen: "/Assets/EAFC24.png",
                    estrellas: 4,
                    platform: "PS5",
                    format: "Digital",
                    rating: "Everyone",
                    releaseYear: 2023,
                    developer: "EA Sports",
                    genre: "Deportes",
                    fileSize: "80 GB",
                    minRAM: "8 GB",
                    onlinePlay: true,
                    description: "Vive la pasión del fútbol con el nuevo estándar de simulación deportiva.",
                    reciente: false,
                    destacado: false,
                    modohistoria:false,
                    deportes: true,
                    accion:false
                },
                {
                    id:15,
                    nombre: "Cyberpunk 2077",
                    precio: 40,
                    precioAnterior: 60,
                    descuento: "-33%",
                    imagen: "/Assets/Cyberpunk2077.png",
                    estrellas: 4.3,
                    platform: "PS5",
                    format: "Digital",
                    rating: "Mature 17+",
                    releaseYear: 2020,
                    developer: "CD Projekt Red",
                    genre: "RPG, Aventura",
                    fileSize: "70 GB",
                    minRAM: "8 GB",
                    onlinePlay: false,
                    description: "Explora un futuro distópico en esta épica narrativa de rol y acción.",
                    reciente: false,
                    destacado: false,
                    modohistoria:true,
                    deportes: false,
                    accion:false
                },
                {
                    id:16,
                    nombre: "Lego Marvel Avengers",
                    precio: 30,
                    precioAnterior: 40,
                    descuento: "-25%",
                    imagen: "/Assets/LegoAvengers.png",
                    estrellas: 4.8,
                    platform: "PS4",
                    format: "Digital",
                    rating: "Mature 17+",
                    releaseYear: 2016,
                    developer: "TT Games",
                    genre: "Acción, Aventura, Construccion",
                    fileSize: "20 GB",
                    minRAM: "4 GB",
                    onlinePlay: false,
                    description: "La aventura de los Vengadores pero en version Lego",
                    reciente: false,
                    destacado: false,
                    modohistoria:true,
                    deportes: false,
                    accion:true
                }
]

localStorage.setItem("bdProductos", JSON.stringify(bdproductos))

// Seleccionar contenedores del DOM
const destacadosContainer = document.getElementById("productosDestacados");
const recientesContainer = document.getElementById("productosRecientes");

// Función para renderizar productos
function renderProductos(container, productos) {
  container.innerHTML = ""; // Limpia el contenedor antes de agregar nuevos productos
productos.forEach((producto) => {
    const productoHTML = `
    <div class="card-product">
        <div class="container-img">
        <a href="Pages/product-details.html?pid=${producto.id}"  class="product-link">
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
        <p class="price">
            $${producto.precio} 
            ${producto.precioAnterior ? `<span>$${producto.precioAnterior}</span>` : ""}
        </p>
        </div>
    </div>
    `;
    container.innerHTML += productoHTML;
});
}
function dataSave(){
    localStorage.setItem("hola")
}
// Filtrar productos destacados y recientes
const destacados = bdproductos.filter((producto) => producto.destacado);
const recientes = bdproductos.filter((producto) => producto.reciente);

// Mostrar productos en las secciones correspondientes
renderProductos(destacadosContainer, destacados);
renderProductos(recientesContainer, recientes);
