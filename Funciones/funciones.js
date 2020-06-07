function funcionBasica() {
    alert("Función básica");
}

let funcion = funcionComoVariable;
function funcionComoVariable() {
    alert("Función ejecutada como variable");
}

let objeto = { "miFuncion": objectMemberFunction, "otroMiembro": "Valor del otro miembro" };
function testObjectMemberFunction() {
    objeto.miFuncion();
    console.log(objeto.otroMiembro);
}

function objectMemberFunction() {
    alert("Función ejecutada desde un miembro de objeto");
}

let funcionSinNombre = () => {
    alert("Función de flecha sin nombre");
}

let objeto2 = { "funcion": () => { alert("Función de flecha sin nombre como miembro de un objeto"); } };

let variable = function() { alert("Función básica sin nombre dentro de un variable"); }

function funcionComoParametro() {
    let numero = parseInt(document.getElementById("numero").value);
    alert("El factorial de " + numero + " es " + (ejecutarFuncion(factorial, numero)));
    alert("El factorial de " + undefined + " es " + (ejecutarFuncion(factorial)));
    alert(ejecutarFuncion(saludar));
}

function saludar() { return "Hola a todos"; };

function ejecutarFuncion(genericFunction, valueToPass) {
    if (genericFunction) {
        if (valueToPass) {
            return genericFunction(valueToPass);
        } else {
            return genericFunction();
        }
    } else {
        return undefined;
    }
}

function factorial(n) {
    if (n) {
        return n<2 ? 1 : n*factorial(n-1);
    }
    else {
        return "ERROR: debes ingresar un número.";
    }
};

function parametrosPorValor() {
    let texto = "Hola";
    let numero = 1;
    let booleano = true;
    let varNull = null;
    let varUndefined = undefined;

    console.log("texto: " + texto);
    console.log("numero: " + numero);
    console.log("booleano: " + booleano);
    console.log("varNull: " + varNull);
    console.log("varUndefined: " + varUndefined);

    cambiarValoresPrimitivos(texto, numero, booleano, varNull, varUndefined);

    console.log("texto: " + texto);
    console.log("numero: " + numero);
    console.log("booleano: " + booleano);
    console.log("varNull: " + varNull);
    console.log("varUndefined: " + varUndefined);
}

function cambiarValoresPrimitivos(texto, numero, booleano, varNull, varUndefined) {
    texto = "Adiós";
    numero = 2;
    booleano = false;
    varNull = "Cualquier cosa que no sea null";
    varUndefined = "Cualquier cosa que si esté definida";
}

function parametrosPorReferencia() {
    let objeto = { miembro: "Yo soy un miembro..." };
    let arregloVacio = [];

    console.log("objeto: " + objeto.miembro );
    console.log("arregloVacio: " + arregloVacio[0] );

    cambiarObjetos(objeto, arregloVacio);

    console.log("objeto: " + objeto.miembro );
    console.log("arregloVacio: " + arregloVacio[0] );
}

function cambiarObjetos(objeto, arregloVacio) {
    objeto.miembro = "Yo soy un miembro modificado...";
    arregloVacio[0] = "Index 0 ya tiene contenido";
}

function miFuncionPrueba (){
    let variableDePrueba = ()=> { console.log("Hola a todos"); };
    variableDePrueba();
}

function crearPersonas () {
    let persona1 = new Persona('Juan');
    persona1.setApellido('Rodriguez');
    persona1.setEdad(35);

    let persona2 = new Persona('Maria', 'Rodriguez');
    persona2.setEdad(25);

    let persona3 = new Persona('Pedro', 'García', 30);

    alert(`Persona 1: ${persona1.getNombre()} ${persona1.getApellido()}, ${persona1.getEdad()} años.`);
    alert(`Persona 2: ${persona2.getNombreCompleto()}, ${persona2.getEdad()} años.`);
    alert(`Persona 3: ${persona3.getNombreCompleto()}, ${persona3.getEdadCompleta()}.`);
}

function Persona(nombrePersona, apellidoPersona, edadPersona) {
    let persona = {};
    let nombre = nombrePersona;
    let apellido = apellidoPersona;
    let edad = edadPersona;
    let viva = true;

    persona.getNombre = () => { return nombre; }
    persona.setNombre = (nombrePersona) => { nombre = nombrePersona; }

    persona.getEdad = () => { return edad; }
    persona.setEdad = (edadPersona) => { edad = edadPersona; }

    persona.getApellido = ()=> { return apellido; }
    persona.setApellido = (apellidoPersona)=> { apellido = apellidoPersona; }

    persona.getNombreCompleto = () => { return nombre + " " + apellido; }
    persona.getEdadCompleta = () => { return edad + " años"; }
    persona.viva = viva;

    return persona;
}

function obtenerMayorNNumeros() {
    console.log(obtenerMayor(5, 2));
    console.log(obtenerMayor(6, 5, 1, 10, 50));
    console.log(obtenerMayor(5, 2, 6, 5, 100, 10, 50));
}

function obtenerMayor() {
    let mayor=0;
    for(let i=0; i<arguments.length; i++) {
        if (arguments[i] > mayor) {
            mayor = arguments[i];
        }
    }
    return mayor;
}

function evaluateString() {
    let codeToEvaluate = document.getElementById("code").value;
    try {
        eval(codeToEvaluate); 
    } catch (ex) {
        alert(ex.message);
        console.log(ex.stack);
    }
}

function tryParseInt() {
    console.log(parseInt("16"));
    console.log(parseInt("855 esto es un número..."));
    console.log(parseInt("esto no es un número 855"));
    console.log(parseInt("100", 8));
    console.log(parseInt("100", 10));
    console.log(parseInt("100", 16));
}

function tryParseFloat() {
    console.log(parseFloat("16.1", 8));
    console.log(parseFloat("3.1416 es el valor de pi..."));
    console.log(parseFloat("Esto no es un número 3.1416", 16));
}

function tryIsFinite() {
    console.log(isFinite("16"));
    console.log(isFinite("16.0"));
    console.log(isFinite("16 ¿es finito?"));
    console.log(isFinite("Esto seguramente no es finito 16... "));
}

function parametrosPorDefecto() {
    let dividendo = isNaN(parseInt(document.getElementById("dividendo").value)) ? undefined : document.getElementById("dividendo").value;
    let divisor = isNaN(parseInt(document.getElementById("divisor").value)) ? undefined : document.getElementById("divisor").value;
    console.log('Dividiendo ' + dividendo + "/" + divisor + '... resultado: ' + dividir(dividendo, divisor));
}

let dividir = (dividendo = 1, divisor = 1) => {
    return dividendo/divisor;
}

function parametrosRequeridos() {
    let texto = isNaN(parseInt(document.getElementById("texto").value)) && document.getElementById("texto").value ? document.getElementById("texto").value : undefined;
    console.log("El texto " + texto + " en mayúsculas es... " + textoEnMayuscula(texto));
}

function textoEnMayuscula(texto = isRequired('string')) {
    return texto.toUpperCase();
}

function isRequired(type) {
    throw new Error("El parámetro texto es requerido, del tipo: " + type);
}

function capturarYMostrarValores(){
    let parrafo = document.getElementById("parrafo").value;
    let confirmado = document.getElementById("confirmado").checked;
    let estadoCivil = document.getElementById("estadoCivil").value;
    console.info("Textarea value: " + parrafo);
    console.warn("Confirmado value: " + confirmado);
    console.error("Estado Civil: " + estadoCivil);
}
