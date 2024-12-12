// Seleccionar elementos
const form = document.getElementById("loginForm");
const message = document.getElementById("message");

// Verificar si ya está logueado
if (localStorage.getItem("loggedIn") === "true") {
    alert("Ya has iniciado sesión.");
    window.location.href = "../Index.html"; // Redirigir al index si ya está logueado
}

// Manejar el evento de envío del formulario
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Valentino" && password === "Profumo") {
        localStorage.setItem("loggedIn", "true"); // Guardar sesión en localStorage
        alert("Inicio de sesión exitoso. Redirigiendo...");
        window.location.href = "../Index.html"; // Redirigir al index
    } else {
        message.textContent = "Usuario o contraseña incorrectos.";
    }
});