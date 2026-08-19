/* ========================================
   ELEMENTOS DEL DOM
======================================== */

const btnGenerar = document.getElementById("btn-generate");
const contenedorPaleta = document.getElementById("palette-container");
const botonesTamanio = document.querySelectorAll(".size-btn");
const formatoActivo = document.getElementById("active-format");
const toast = document.getElementById("toast-notification");

const btnGuardar = document.getElementById("btn-save");
const barraGuardar = document.getElementById("save-bar");

const seccionGuardadas = document.getElementById("saved-section");
const contenedorGuardadas = document.getElementById("saved-container");

const mensajeUso = document.getElementById("usage-hint");


/* ========================================
   VARIABLES
======================================== */

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

            botonActual.setAttribute(
                "aria-pressed",
                "false"
            );
        });

        boton.classList.add("active");

        boton.setAttribute(
            "aria-pressed",
            "true"
        );
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
   CONVERTIR HEX A HSL
======================================== */

function convertirHexAHsl(hex) {

    let r = parseInt(hex.substring(1, 3), 16) / 255;
    let g = parseInt(hex.substring(3, 5), 16) / 255;
    let b = parseInt(hex.substring(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    let h = 0;
    let s = 0;
    let l = (max + min) / 2;

    const diferencia = max - min;

    if (diferencia !== 0) {

        if (l > 0.5) {
            s = diferencia / (2 - max - min);
        } else {
            s = diferencia / (max + min);
        }

        if (max === r) {

            h =
                (g - b) / diferencia +
                (g < b ? 6 : 0);

        } else if (max === g) {

            h =
                (b - r) / diferencia + 2;

        } else {

            h =
                (r - g) / diferencia + 4;
        }

        h = h / 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return `hsl(${h}, ${s}%, ${l}%)`;
}


/* ========================================
   GENERAR PALETA
======================================== */

function generarPaleta() {

    const colores = [];

    const formatoSeleccionado =
        document.querySelector(
            'input[name="format"]:checked'
        ).value;

    formatoActivo.textContent =
        "Formato actual: " +
        formatoSeleccionado.toUpperCase();

    for (
        let i = 0;
        i < tamanioSeleccionado;
        i++
    ) {

        const nuevoHex = generarColorHex();

        const nuevoHsl =
            convertirHexAHsl(nuevoHex);

        const nuevoColor = {
            hex: nuevoHex,
            hsl: nuevoHsl
        };

        colores.push(nuevoColor);
    }

    paletaActual = colores;

    mostrarPaleta(
        colores,
        formatoSeleccionado
    );

    barraGuardar.classList.remove("hidden");

    mensajeUso.classList.remove("hidden");

    mostrarToast(
        "Paleta generada correctamente"
    );
}


/* ========================================
   MOSTRAR PALETA EN EL HTML
======================================== */

function mostrarPaleta(
    colores,
    formatoSeleccionado
) {

    contenedorPaleta.innerHTML = "";

    colores.forEach(function(color) {

        /* TARJETA */

        const tarjeta =
            document.createElement("div");

        tarjeta.classList.add("color-card");


        /* VISTA DEL COLOR */

        const vistaColor =
            document.createElement("div");

        vistaColor.classList.add(
            "color-preview"
        );

        vistaColor.style.backgroundColor =
            color.hex;


        /* INFORMACIÓN */

        const infoColor =
            document.createElement("div");

        infoColor.classList.add(
            "color-info"
        );


        /* CÓDIGO HEX */

        const codigoHex =
            document.createElement("p");

        codigoHex.classList.add(
            "color-code"
        );

        codigoHex.textContent =
            color.hex;


        /* COPIAR HEX */

        codigoHex.addEventListener(
            "click",
            function() {

                navigator.clipboard
                    .writeText(color.hex)

                    .then(function() {

                        mostrarToast(
                            "Color copiado: " +
                            color.hex
                        );
                    })

                    .catch(function() {

                        mostrarToast(
                            "No se pudo copiar el color"
                        );
                    });
            }
        );


        /* AGREGAR HEX */

        infoColor.appendChild(
            codigoHex
        );


        /* SI ELIGIÓ HSL, MOSTRAMOS TAMBIÉN HSL */

        if (
            formatoSeleccionado === "hsl"
        ) {

            const codigoHsl =
                document.createElement("p");

            codigoHsl.classList.add(
                "color-hsl"
            );

            codigoHsl.textContent =
                color.hsl;

            infoColor.appendChild(
                codigoHsl
            );
        }


        /* ARMAMOS LA TARJETA */

        tarjeta.appendChild(
            vistaColor
        );

        tarjeta.appendChild(
            infoColor
        );

        contenedorPaleta.appendChild(
            tarjeta
        );
    });
}


/* ========================================
   TOAST
======================================== */

function mostrarToast(mensaje) {

    toast.textContent = mensaje;

    toast.classList.add("show");

    setTimeout(function() {

        toast.classList.remove("show");

    }, 2000);
}


/* ========================================
   MOSTRAR PALETAS GUARDADAS
======================================== */

function mostrarPaletasGuardadas() {

    const paletasGuardadas =
        JSON.parse(
            localStorage.getItem("paletas")
        ) || [];

    contenedorGuardadas.innerHTML = "";

    if (
        paletasGuardadas.length === 0
    ) {

        seccionGuardadas.classList.add(
            "hidden"
        );

        return;
    }

    seccionGuardadas.classList.remove(
        "hidden"
    );

    paletasGuardadas.forEach(
        function(paleta) {

            const paletaGuardada =
                document.createElement(
                    "div"
                );

            paletaGuardada.classList.add(
                "saved-palette"
            );

            paleta.forEach(
                function(color) {

                    const bloqueColor =
                        document.createElement(
                            "div"
                        );

                    bloqueColor.classList.add(
                        "saved-color"
                    );


                    /*
                    Compatibilidad con paletas
                    guardadas anteriormente
                    */

                    if (
                        typeof color ===
                        "string"
                    ) {

                        bloqueColor.style
                            .backgroundColor =
                            color;

                        bloqueColor.title =
                            color;

                    } else {

                        bloqueColor.style
                            .backgroundColor =
                            color.hex;

                        bloqueColor.title =
                            color.hex;
                    }

                    paletaGuardada
                        .appendChild(
                            bloqueColor
                        );
                }
            );

            contenedorGuardadas
                .appendChild(
                    paletaGuardada
                );
        }
    );
}


/* ========================================
   BOTÓN GENERAR
======================================== */

btnGenerar.addEventListener(
    "click",
    function() {

        generarPaleta();
    }
);


/* ========================================
   BOTÓN GUARDAR PALETA
======================================== */

btnGuardar.addEventListener(
    "click",
    function() {

        if (
            paletaActual.length === 0
        ) {

            mostrarToast(
                "Primero generá una paleta"
            );

            return;
        }

        const paletasGuardadas =
            JSON.parse(
                localStorage.getItem(
                    "paletas"
                )
            ) || [];

        paletasGuardadas.push(
            paletaActual
        );

        localStorage.setItem(
            "paletas",
            JSON.stringify(
                paletasGuardadas
            )
        );

        mostrarPaletasGuardadas();

        mostrarToast(
            "Paleta guardada correctamente"
        );
    }
);


/* ========================================
   CARGAR PALETAS GUARDADAS
======================================== */

mostrarPaletasGuardadas();