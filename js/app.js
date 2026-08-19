const btnGenerar = document.getElementById("btn-generate");
const contenedorPaleta = document.getElementById("palette-container");
const botonesTamanio = document.querySelectorAll(".size-btn");
const formatoActivo = document.getElementById("active-format");
const toast = document.getElementById("toast-notification");
const btnGuardar = document.getElementById("btn-save");
const barraGuardar = document.getElementById("save-bar");
const seccionGuardadas = document.getElementById("saved-section");
const contenedorGuardadas = document.getElementById("saved-container");

let tamanioSeleccionado = 6;
let paletaActual = [];

/* ========================================
   SELECCIÓN DEL TAMAÑO
======================================== */

botonesTamanio.forEach(function(boton) {
    boton.addEventListener("click", function() {

        tamanioSeleccionado = Number(boton.dataset.size);

        botonesTamanio.forEach(function(botonActual) {
            botonActual.classList.remove("active");
            botonActual.setAttribute("aria-pressed", "false");
        });

        boton.classList.add("active");
        boton.setAttribute("aria-pressed", "true");
    });
});


/* ========================================
   GENERAR COLOR HEX
======================================== */

function generarColorHex() {
    const caracteres = "0123456789ABCDEF";

    let color = "#";

    for (let i = 0; i < 6; i++) {
        const indiceAleatorio = Math.floor(
            Math.random() * caracteres.length
        );

        color = color + caracteres[indiceAleatorio];
    }

    return color;
}


/* ========================================
   GENERAR COLOR HSL
======================================== */

function generarColorHsl() {
    const tono = Math.floor(Math.random() * 360);

    const saturacion =
        Math.floor(Math.random() * 51) + 50;

    const luminosidad =
        Math.floor(Math.random() * 31) + 35;

    return `hsl(${tono}, ${saturacion}%, ${luminosidad}%)`;
}


/* ========================================
   GENERAR PALETA
======================================== */

function generarPaleta() {
    const colores = [];

    const formatoSeleccionado = document.querySelector(
        'input[name="format"]:checked'
    ).value;

    formatoActivo.textContent =
        "Formato actual: " + formatoSeleccionado.toUpperCase();

    for (let i = 0; i < tamanioSeleccionado; i++) {

        let nuevoColor;

        if (formatoSeleccionado === "hex") {
            nuevoColor = generarColorHex();
        } else {
            nuevoColor = generarColorHsl();
        }

        colores.push(nuevoColor);
    }

    paletaActual = colores;

    mostrarPaleta(colores);

    barraGuardar.classList.remove("hidden");

    mostrarToast("Paleta generada correctamente");
}


/* ========================================
   MOSTRAR PALETA EN EL HTML
======================================== */

function mostrarPaleta(colores) {

    contenedorPaleta.innerHTML = "";

    colores.forEach(function(color) {

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("color-card");

        const vistaColor = document.createElement("div");
        vistaColor.classList.add("color-preview");

        vistaColor.style.backgroundColor = color;

        const infoColor = document.createElement("div");
        infoColor.classList.add("color-info");

        const codigoColor = document.createElement("p");
        codigoColor.classList.add("color-code");

        codigoColor.textContent = color;

        /* COPIAR COLOR AL PORTAPAPELES */
        codigoColor.addEventListener("click", function() {

            navigator.clipboard.writeText(color);

            mostrarToast("Color copiado: " + color);
        });

        infoColor.appendChild(codigoColor);

        tarjeta.appendChild(vistaColor);
        tarjeta.appendChild(infoColor);

        contenedorPaleta.appendChild(tarjeta);
    });
}


/* ========================================
   FUNCIÓN DEL TOAST
======================================== */

function mostrarToast(mensaje) {
    toast.textContent = mensaje;

    toast.classList.add("show");

    setTimeout(function() {
        toast.classList.remove("show");
    }, 2000);
}


/* ========================================
   BOTÓN GENERAR
======================================== */

btnGenerar.addEventListener("click", function() {
    generarPaleta();
});