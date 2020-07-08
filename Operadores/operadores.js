function sumarCalculadora() {
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

function evaluarAND() {
    console.log("true  && true es " + (true && true));
    console.log("true  && false es " + (true && false));
    console.log("false && true es " + (false && true));
    console.log("false && (3 == 4) es " + (false && (3 == 4)));
    console.log("\"Cat\" && \"Dog\" es " + ("Cat" && "Dog"));
    console.log("false && \"Cat\" es " + (false && "Cat"));
    console.log("\"Cat\" && false es " + ("Cat" && false));
}

function evaluarOR() {
    console.log("true || true es " + (true || true));
    console.log("false || true es " + (false || true));
    console.log("true || false es " + (true || false));
    console.log("false || (3 == 4) es " + (false || (3 == 4)));
    console.log("\"Cat\" || \"Dog\" es " + ("Cat" || "Dog"));
    console.log("false || \"Cat\" es " + (false || "Cat"));
    console.log("\"Cat\" || false es " + ("Cat" || false));
}

function evaluarNOT() {
    console.log("!true es " + (!true));
    console.log("!false es " + (!false));
    console.log("!\"Cat\" es " + (!"Cat"));
}

function concatenar() {
    alert("numero + cadena + numeroEnCadena es " + (2 + "hola" + "5"));
}

function sumar() {
    let numero = "35";
    alert("numero + numeroEnCadena es " + (2 + (isNaN(numero) ? 1 : parseInt(numero))) + " typeof " + typeof (2 + parseInt(numero)));
}

function operadorComa() {
    let fruits = ["apple", "grape"];
    let numbers = [1, 8, 23];
    let students = [
        {
            name: "Jefree",
            age: 22
        },
        {
            name: "Urias",
            age: 25
        }
    ];

    console.log(fruits[0]);
    console.log(numbers[2]);

    let a = [["Piña", "Naranja", "Manzana"], ["Limón", "Papa", "Tomate"], ["Rojo", "Azul", "Verde"]];
    for (var i = 0, j = 2; i <= 2 && j >= 0; i++, j--)
        console.log("a[" + i + "][" + j + "]= " + a[i][j]);
}

function operadorTernario() {
    let edad = parseInt(document.getElementById("edad").value);

    if (isNaN(edad)) {
        alert("Cuidado, usted no ingresó un valor númerico")
    } else {
        alert("Usted es " + (edad >= 18 ? "mayor" : "menor") + " de edad.");
        document.getElementById("edad").value = "";
    }
}

function unarioDelete() {
    let objeto = {
        propiedad: "valor"
    }
    console.log("Objeto: " + objeto);
    console.log("Propiedad dentro de objeto: " + objeto.propiedad);
    console.log("Eliminando propiedad dentro de objeto");
    delete objeto.propiedad;
    console.log("Propiedad dentro de objeto: " + objeto.propiedad);
    delete objeto;
    console.log("Eliminando objeto");
    console.log("Objeto: " + objeto);

    let arreglo = ["1", "2", "3"];
    mostrarArregloEnConsola(arreglo);
    delete arreglo[1];
    mostrarArregloEnConsola(arreglo);

    var x = "variable con var";
    let y = "variable con let";
    z = "variable z declarada impliciatemente";
    console.log("x " + x + " y " + y + " z " + z);
    if (delete x) {
        console.log("Se eliminó con éxito x");
    }
    else {
        console.log("Error al eliminar x");
    }
    if (delete y) {
        console.log("Se eliminó con éxito y");
    }
    else {
        console.log("Error al eliminar y");
    }
    if (delete z) {
        console.log("Se eliminó con éxito z");
        console.log(z);
    }
    else {
        console.log("Error al eliminar z");
    }
}

function mostrarArregloEnConsola(array) {
    for (var i = 0; i <= array.length - 1; i++) {
        console.log(array[i]);
    }
}

function unarioTypeOf() {
    let a = 1;
    let b = "2";
    let c = { d: "e" };
    let d = new Date();
    let e = function () { };
    let f = true;

    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    console.log(typeof d);
    console.log(typeof e);
    console.log(typeof f);
    console.log(typeof g);
    console.log(typeof null);
    console.log(typeof undefined);

    let numero = "32", numero2 = 5;
    let suma = 0;

    if (typeof numero === 'string') {
        console.log("Convirtiendo el valor a número...");
        numero = parseInt(numero);
        suma = numero + numero2;
    } else {
        suma = numero + numero2;
    }

    console.log(suma);

}

function relacionalIn() {
    // EVALUACIÓN VALOR LÓGICO NOT
    let nombre = "Jefree";
    let nombre2 = "Otro valor";

    if (nombre === "Jefree") {
        console.log("El nombre si es Jefree.");
    }

    if (!(nombre2 === "Jefree")) {
        console.log("El nombre no es Jefree");
    }

    // Arrays
    var arboles = new Array("secoya", "laurel", "cedro", "roble", "arce");
    if (0 in arboles) {
        console.log("Si se encuentra la posición 0 en el arreglo de árboles... árbol: " + arboles[0]);
    }

    if (!(6 in arboles)) {
        console.log("No se encuentra la posición 6 en el arreglo de árboles... " + arboles[6]);
    }
    if (!("laurel" in arboles)) { // devuelve false (Se debe especificar el número de índice, no el valor contenido en ese índice)
        console.log("No se puede acceder al contenido de una variable con in, si no es por medio del índice");
    }

    // String creados
    var miCadena = new String("coral");
    if ("length" in miCadena) { // devuelve true (length es una propiedad del String)
        console.log("Length si es una propiedad de un string por lo tanto si existe" + " el valor de lenght es: " + miCadena.length);
    }

    // Objetos creados
    var carro = { marca: "Toyota", modelo: "Hilux", fecha: 2020 };
    if ("marca" in carro) {
        console.log(carro.marca);
    }
    if ("modelo" in carro) {
        console.log(carro.modelo);
    }
    if (!("otraPropiedad" in carro)) {
        console.log("No existe otraPropiedad dentro de mi objeto carro");
    }
}

function Persona(nombre) {
    var nombrePersona = nombre;
}

function relacionalInstanceof() {
    // Arrays
    let colores = new Array("rojo", "amarillo", "azul");
    let fecha = new Date();
    let objeto = { propiedad: "valor" };
    let profesor = new Persona("Jason");

    evaluarInstanceOf(colores);
    evaluarInstanceOf(fecha);
    evaluarInstanceOf(objeto);
    evaluarInstanceOf(profesor);
}

function evaluarInstanceOf(parametro) {
    if (parametro instanceof Array) {
        console.log("El parámetro es un Array " + parametro);
    }
    if (parametro instanceof Date) {
        console.log("El parámetro es un Date " + parametro);
    }
    if (parametro instanceof Object) {
        console.log("El parámetro es un Object " + parametro);
    }
    if (parametro instanceof Persona) {
        console.log("El parámetro es de tipo mi Objeto " + parametro.nombre);
    }
}

function calcularSubtotal(index) {
    let cantidad = parseInt(document.getElementById("cantidad" + index).value);
    let costo = parseInt(document.getElementById("costo" + index).value);
    if (cantidad && costo)
        return document.getElementById("subtotal" + index).value = cantidad * costo;
}

function calcularTotal() {
    let total = 0;
    for (let i = 1; i <= 2; i++) {
        total += calcularSubtotal(i);
    }
    alert("El total de la compra es " + total);
}