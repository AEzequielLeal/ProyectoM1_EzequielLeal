# Registro de uso de Inteligencia Artificial

Durante el desarrollo del proyecto Colorfly Studio se utilizó Inteligencia Artificial como herramienta de apoyo para comprender conceptos de JavaScript, resolver dudas y mejorar algunas funcionalidades del proyecto.

La IA fue utilizada como guía durante el proceso de aprendizaje y desarrollo.

---

## Prompt 1 - Generación de colores HEX

### Prompt utilizado

Explícame de forma simple cómo generar un color HEX aleatorio con JavaScript usando Math.random() y Math.floor().

### Uso en el proyecto

Este prompt se utilizó para comprender cómo generar colores aleatorios en formato HEX.

La explicación permitió entender el uso de:

- Math.random()
- Math.floor()
- ciclos for
- acceso a caracteres mediante índices

Esto fue utilizado en la función encargada de generar los colores de cada paleta.

### Captura

`capturas/ia-01-generacion-hex.png`

---

## Prompt 2 - Uso de localStorage

### Prompt utilizado

Explícame paso a paso cómo usar localStorage para guardar una paleta de colores en JavaScript y recuperarla cuando recargo la página.

### Uso en el proyecto

Este prompt se utilizó para comprender cómo guardar información en el navegador.

Se aplicaron los siguientes conceptos:

- localStorage.setItem()
- localStorage.getItem()
- JSON.stringify()
- JSON.parse()

Esto permitió guardar las paletas generadas y mantenerlas disponibles después de recargar la página.

### Captura

`capturas/ia-02-localstorage.png`

---

## Prompt 3 - Creación dinámica de elementos

### Prompt utilizado

Explícame cómo crear elementos HTML dinámicamente con JavaScript usando createElement, appendChild y forEach para mostrar una paleta de colores.

### Uso en el proyecto

Este prompt permitió comprender cómo generar las tarjetas de colores dinámicamente desde JavaScript.

Se utilizaron conceptos como:

- document.createElement()
- appendChild()
- forEach()
- classList.add()
- style.backgroundColor

Gracias a esto, la aplicación puede mostrar automáticamente 6, 8 o 9 tarjetas dependiendo del tamaño de paleta seleccionado.

### Captura

`capturas/ia-03-dom.png`

---

## Prompt 4 - Copiar código HEX

### Prompt utilizado

¿Cómo puedo copiar un código HEX al portapapeles cuando hago clic sobre él usando JavaScript?

### Uso en el proyecto

Este prompt se utilizó para implementar la funcionalidad de copiar un color HEX al portapapeles.

Se utilizó:

- addEventListener()
- navigator.clipboard.writeText()
- .then()
- .catch()

También se agregó un mensaje visual tipo toast para indicar cuando el color fue copiado correctamente.

### Captura

`capturas/ia-04-copiar-hex.png`

---

## Resultado del uso de IA

El uso de Inteligencia Artificial permitió reforzar conceptos de JavaScript y comprender mejor el funcionamiento de distintas partes del proyecto.

Las respuestas obtenidas fueron analizadas y aplicadas al código del proyecto, principalmente en la generación de colores, manipulación del DOM, almacenamiento local y copia de códigos HEX.

Las capturas de los prompts y respuestas se encuentran en:

`Documentacion/uso-ia/capturas/`