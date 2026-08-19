# Colorfly Studio

Colorfly Studio es una aplicación web estática e interactiva que permite generar paletas de colores aleatorias de forma simple, visual y dinámica.

El proyecto fue desarrollado como parte del M1 de Henry, aplicando conceptos de HTML5, CSS, JavaScript, manipulación del DOM, eventos, Git, GitHub y GitHub Pages.

## Funcionalidades

* Selección del tamaño de la paleta: 6, 8 o 9 colores.
* Generación aleatoria de colores.
* Visualización de códigos en formato HEX.
* Visualización complementaria en formato HSL.
* Render dinámico de las tarjetas mediante JavaScript.
* Microfeedback mediante mensajes tipo toast.
* Copia del código HEX al portapapeles al hacer clic.
* Guardado de paletas mediante `localStorage`.
* Persistencia de las paletas guardadas al recargar la página.
* Diseño pensado para desktop y adaptable a distintos tamaños de pantalla.
* Consideraciones básicas de accesibilidad.

## Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript
* Git
* GitHub
* GitHub Pages

## Estructura del proyecto

```text
ProyectoM1_EzequielLeal/
│
├── assets/
│   └── logoColorFly.jpg
│
├── css/
│   └── styles.css
│
├── js/
│   └── app.js
│
├── Documentacion/
│   ├── README.md
│   ├── capturas/
│   └── uso-ia/
│       ├── prompts.md
│       └── capturas/
│
├── index.html
└── README.md
```

## Cómo usar la aplicación

1. Seleccionar el tamaño de la paleta: 6, 8 o 9 colores.
2. Elegir el formato deseado entre HEX y HSL.
3. Presionar el botón **Generar paleta**.
4. Visualizar los colores generados junto con sus códigos.
5. Hacer clic sobre un código HEX para copiarlo al portapapeles.
6. Presionar **Guardar paleta** para almacenar la paleta actual.
7. Las paletas guardadas permanecerán disponibles aunque se recargue la página.

## Decisiones técnicas

La aplicación fue desarrollada utilizando JavaScript puro, sin frameworks ni librerías externas.

La generación de colores HEX se realiza mediante valores aleatorios utilizando `Math.random()` y `Math.floor()`.

Los colores son renderizados dinámicamente utilizando métodos del DOM como:

```javascript
document.getElementById()
document.querySelectorAll()
document.createElement()
appendChild()
classList
```

La selección de la cantidad de colores se gestiona mediante eventos de clic y atributos `data-size`.

Para la generación de las paletas se utilizan arrays y funciones independientes, manteniendo la lógica organizada en pequeñas responsabilidades.

Para almacenar las paletas guardadas se utiliza `localStorage`. Como este sistema almacena información en formato de texto, se utilizan:

```javascript
JSON.stringify()
JSON.parse()
```

para convertir los arrays antes de guardarlos y recuperarlos.

## Accesibilidad

Se incorporaron consideraciones básicas de accesibilidad, entre ellas:

* Uso de etiquetas HTML semánticas como `header`, `main`, `section`, `nav` y `footer`.
* Controles correctamente identificados.
* Uso de atributos ARIA como `aria-pressed` y `aria-live`.
* Foco visible para navegación mediante teclado.
* Contraste suficiente entre texto y fondo.
* Textos alternativos en imágenes.

## Extras implementados

Además de los requisitos obligatorios, se incorporaron las siguientes funcionalidades:

* Guardado de paletas con `localStorage`.
* Persistencia de datos al recargar la página.
* Copia del código HEX al portapapeles.
* Animaciones y transiciones sutiles.
* Microfeedback mediante toast.
* Mejoras visuales de interfaz.

## Control de versiones

El proyecto fue versionado utilizando Git desde las primeras etapas del desarrollo.

Se utilizaron commits descriptivos para registrar los principales avances, por ejemplo:

```text
feat: agregar estructura inicial del generador de paletas
feat: agregar generacion dinamica y microfeedback
feat: copiar codigo de color al portapapeles
feat: guardar paletas en localStorage
style: ajustar tamaño de las tarjetas
chore: organizar estructura del entregable
```

El código fuente se encuentra alojado en un repositorio público de GitHub.

## Ejecución local

Para ejecutar el proyecto de manera local:

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto.
3. Abrir el archivo `index.html` en un navegador.

También puede utilizarse una extensión como Live Server desde Visual Studio Code.

## Despliegue

La aplicación será publicada utilizando GitHub Pages.

Una vez finalizado el despliegue, el enlace público será agregado en esta sección.

## Uso de Inteligencia Artificial

Durante el desarrollo se utilizaron herramientas de Inteligencia Artificial como apoyo para:

* comprender conceptos de JavaScript;
* resolver dudas sobre DOM y eventos;
* comprender métodos como `map()`, `forEach()` y `localStorage`;
* revisar fragmentos de código;
* organizar la estructura del proyecto;
* mejorar estilos CSS;
* documentar el proceso de desarrollo.

Los prompts utilizados, junto con una explicación de cómo influyeron en el desarrollo, se encuentran documentados en:

```text
Documentacion/uso-ia/prompts.md
```

También se incluyen capturas relacionadas con el uso de IA dentro de la carpeta de documentación.

## Documentación

La carpeta `Documentacion` contiene material complementario del proyecto, incluyendo:

* capturas de funcionamiento;
* documentación del desarrollo;
* registro del uso de Inteligencia Artificial;
* prompts utilizados durante el proceso.

## Autor

**Ezequiel Leal**

Proyecto desarrollado con fines educativos y de portafolio personal.
