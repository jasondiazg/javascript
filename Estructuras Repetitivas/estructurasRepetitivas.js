function bucleWhile() {
    let limite = parseInt(document.getElementById("limite").value);
    let inicio = 0;
    while (inicio <= limite) {
        console.log(inicio);
        inicio += 2;
    }
}

function bucleDoWhile() {
    let fruta;
    do {
        fruta = prompt("Escribe una fruta (con la fruta uva puedes salir)", "");
    } while (fruta != "uva");
}

function bucleForOf() {
    let limite = parseInt(document.getElementById("limitePrimos").value);
    let primos = [];

    if (limite <= 0) {
        throw new Error("El límite no puede ser menor a cero.");
    }

    for (let i = 1; i <= limite; i++) {
        if (esPrimo(i)) {
            primos.push(i);
        }
    }
    mostrarPrimos(primos);
}

function esPrimo(numero) {
    let contadorDeMultiplos = 0;
    if (numero == 1) {
        return true;
    } else {
        for (let i = 1; i < numero; i++) {
            if (numero % i == 0) {
                contadorDeMultiplos++;
            }
            if (contadorDeMultiplos == 2) {
                break;
            }
        }
        if (contadorDeMultiplos == 1) {
            return true;
        } else {
            return false;
        }
    }
}

function mostrarPrimos(primos) {
    for (let primo of primos) {
        console.log(primo);
    }
}

function breakDemo() {
    let numero = parseInt(document.getElementById("numero").value);
    let adivinado = false;
    let contador = 1;

    while (!adivinado) {
        let intento = prompt("Dame un número para adivinar", "");
        if (intento == numero) {
            console.log("Felicidades adivinaste. Lo hiciste en " + contador + " intentos.");
            break;
        }
        contador++;
    }
}

function continueDemo() {
    let numero = parseInt(document.getElementById("numero").value);
    let adivinado = false;
    let contador = 1;

    while (!adivinado) {
        let intento = prompt("Dame un número para adivinar", "")
        if (intento != numero) {
            contador++;
            continue;
        }
        console.log("Felicidades adivinaste. Lo hiciste en " + contador + " intentos.");
        adivinado = true;
    }
}

function buclesAnidados(tipo) {
    switch(tipo) {
        case '1': forFor(); break;
        case '2': forWhile(); break;
        default:  doFor();
    }
}

function forFor() {
    for (let i=1; i<=3; i++) {
        for (let j=1; j<=10; j++) {
            console.log(i + " * " + j + " = " + (i*j));
        }
    }
}

function forWhile() {
    for (let i=1; i<=3; i++) {
        j=1;
        while(j <= 10) {
            console.log(i + " * " + j + " = " + (i*j));
            j++;
        }
    }
}

function doFor() {
    let i= 1;
    do {
        for (let j=1; j<=10; j++) {
            console.log(i + " * " + j + " = " + (i*j));
        }
        i++;
    } while(i<=3);
}

function forIn() {
    let carro = { marca: "Toyota", modelo: "Corolla", anio: "2018"};
    objectToString(carro, "carro");
}

function objectToString(obj, objNombre) {
    var resultado = "";
    for (let i in obj) {
        console.log(objNombre + "." + i + " = " + obj[i]);
    }
  }
