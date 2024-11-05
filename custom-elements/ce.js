console.log('Inicio del ejemplo de Custom Elments')

const template = `<template>
        <h1>Hola Mundo</h1>
        <li id="li">
            <ul>Template</ul>
            <ul>ShadowDOM</ul>
            <ul>Custom Elements</ul>
            <ul>Lit Element</ul>
        </li>
    </template>`

// Paso 1
// definir el web-componente hola-mundo
// que pinte la plantilla en el shadow root
// Paso 2
// cuando se inserte en el dom que acceda al atributo título
// que escuche cambios en el atributo step y en función de eso que pinte o no los elementos del menú
// funciona la detección de cambios mediante JS
// Probar ES Module
