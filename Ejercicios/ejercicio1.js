function sumar() {
    const operador1 = parseInt(document.getElementById("operador1").value);
    let operador2 = parseInt(document.getElementById("operador2").value);

    mostrarResultados(`La suma de ${operador1} más ${operador2} es: ${operador1 + operador2}`);
}

function restar() {
    const operador1 = parseInt(document.getElementById("operador1").value);
    let operador2 = parseInt(document.getElementById("operador2").value);

    mostrarResultados(`La resta de ${operador1} y ${operador2} es: ${operador1 - operador2}`);
}

function multiplicar() {
    const operador1 = parseInt(document.getElementById("operador1").value);
    let operador2 = parseInt(document.getElementById("operador2").value);

    mostrarResultados(`La multiplicación de ${operador1} por ${operador2} es: ${operador1 * operador2}`);
}

function dividir() {
    const operador1 = parseInt(document.getElementById("operador1").value);
    let operador2 = parseInt(document.getElementById("operador2").value);

    mostrarResultados(`La división de ${operador1} partido ${operador2} es: ${operador1 / operador2}`);
}

function mostrarResultados(resultado) {
    console.log(resultado);
    alert(resultado);
    document.getElementById("resultado").innerText = resultado;
}