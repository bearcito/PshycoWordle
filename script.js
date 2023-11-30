function seleccionarPalabraAleatoria(diccionario) {
    return diccionario[Math.floor(Math.random() * diccionario.length)];
}

let intentos = 6;
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH'];
let palabra = seleccionarPalabraAleatoria(diccionario);

window.addEventListener('load', init);

const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

function init() {
    palabra = seleccionarPalabraAleatoria(diccionario);
}

function intentar() {
    const INTENTO = leerIntento();

    if (INTENTO === palabra) {
        terminar("<h1>¡GANASTE! 😃</h1>");
        return;
    }

    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';

    for (let i in palabra) {
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';

        if (INTENTO[i] === palabra[i]) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#79b851';
        } else if (palabra.includes(INTENTO[i])) {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#f3c237'; 
        } else {
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a4aec4'; 
        }

        ROW.appendChild(SPAN);
    }

    GRID.appendChild(ROW);
    actualizarIntentos();

    if (intentos === 0) {
        terminar("<h1>¡PERDISTE! 😞</h1>");
    }
}

function leerIntento() {
    let intento = document.getElementById("guess-input").value;
    intento = intento.toUpperCase();
    return intento;
}

function actualizarIntentos() {
    intentos--;
    const intentosElement = document.getElementById('guesses');
    intentosElement.innerHTML = `<p>Intentos restantes: ${intentos}</p>`;
}

function terminar(mensaje) {
    const INPUT = document.getElementById("guess-input");
    const BOTON = document.getElementById("guess-button");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
