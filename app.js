let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

// Esta funcion toma los valores html que le pases como parametros
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Genera el numero secreto
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p","Ya se sortearon todos los numeros posibles.")
    } else {
    // Si el numero esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        // Recursividad para generar un numero que no hay salido
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

// Funcion que limpia el imput
function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";

}

// Toma el valo ingresado en el imputo y luego los compara para proceder con el juego
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el numero secreto en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`);
        // habilita el boton de nuevo juego
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p","El numero secreto es menor");
        } else {
            asignarTextoElemento("p","El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

// Setea todo los valores a como es al principio del juego
function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Escribe un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

// Reinicia el juego
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //Iniciar el numero de intentos
    //generar el numero aleatorio
    condicionesIniciales();
    numeroSecreto = generarNumeroSecreto();
    //Deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();

