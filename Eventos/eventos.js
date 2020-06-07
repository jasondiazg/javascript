function mostrarAlerta() {
    alert('Hola mundo!');
}

function resaltar(elemento) {
    switch (elemento.style.backgroundColor) {
        case 'red':
        case '#c0c0c0':
            elemento.style.backgroundColor = 'black';
            break;
        case 'black':
        case '#ff0000':
            elemento.style.backgroundColor = 'red';
            break;
    }
}

document.getElementById("semantico").onclick = () => { alert("Hola mundo!"); };

function ocultarTabla() {
    document.getElementById("tabla").style.visibility = 'hidden';
    document.getElementById("ocultar-tabla").style.visibility = 'hidden';
    document.getElementById("mostrar-tabla").style.visibility = 'visible';
}

function mostrarTabla() {
    document.getElementById("tabla").style.visibility = 'visible';
    document.getElementById("ocultar-tabla").style.visibility = 'visible';
    document.getElementById("mostrar-tabla").style.visibility = 'hidden';
}

function eliminarTablaDOM() {
    document.getElementById("tabla").style.display = 'none';
    document.getElementById("eliminar-tabla").style.display = 'none';
    document.getElementById("crear-tabla").style.display = 'inline';
}

function crearTablaDOM() {
    document.getElementById("tabla").style.display = '';
    document.getElementById("eliminar-tabla").style.display = 'inline';
    document.getElementById("crear-tabla").style.display = 'none';
}


document.getElementById("mostrar-tabla").style.visibility = 'hidden';
document.getElementById("crear-tabla").style.display = 'none';