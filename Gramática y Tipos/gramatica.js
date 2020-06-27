function evaluarVariables() {
    var a;
    console.log('El valor de a es ' + a); // El valor de a es undefined

    console.log('El valor de b es ' + b); // El valor de b es undefined
    var b;

    let x;
    console.log('El valor de x es ' + x); // El valor de x es undefined

    //console.log('El valor de c es ' + c); // Uncaught ReferenceError: c no está definida

    console.log('El valor de y es ' + y); // Uncaught ReferenceError: y no está definida
    let y;
}

function variablesVar() {
    var $miVariable = 2;		
    var a1 = 'Hola';
    var _otraVariable = '25';
    
    alert('El valor de $miVariable es ' + $miVariable);
    alert('El valor de a1 es ' + a1);
    alert('El valor de _otraVariable es ' + _otraVariable);
}

function variablesLet() {
    let x = 2;
    let $variableLet = 'My var';
    let _ultimaVariable = x;    

    alert('El valor de x es ' + x);
    alert('El valor de $variableLet es ' + $variableLet);
    alert('El valor de _ultimaVariable es ' + _ultimaVariable);
}

function constantes() {
    const x = 3;
    const m = 'Hola';

    alert('El valor de la constante x es ' + x);
    alert('El valor de la constante m es ' + m);

    x = 8 //Una constante no se puede modificar;
}

var variableGlobal = "Yo soy una variable global...";

function varGlobal() {
    alert('El valor de la variable global en la función varGlobal es ' + variableGlobal);
}

function ambitoVar() {
    if (true) {
        var variableLocal = 5;
    }
    alert("El valor de variableLocal con var es " + variableLocal);
    alert('El valor de la variable global en otra función es ' + variableGlobal);
}

function ambitoLet() {
    if (true) {
        let variableLocal = 5;
    }
    alert("El valor de variableLocal con let es " + variableLocal);
}

function imprimirVariablesConsola() {
    var numeroUno = 1;
    let letra = "letra";
    var booleanoTrue = true;
    let booleanoFalse = false;
    var objetoJavaScript = {
        miembroObjeto: "valor",
        otroMiembro: 4
    };
    let funcionVariable = function (parametro) {
        console.log(parametro);
    };
    var variableNull = null;
    let variableUndefined = undefined;

    console.log("El valor de numeroUno es " + numeroUno);
    console.log("El valor de letra es " + letra);
    console.log("El valor de booleanoTrue es " + booleanoTrue);
    console.log("El valor de booleanoFalse es " + booleanoFalse);
    console.log("El valor de objetoJavaScript es " + objetoJavaScript);
    console.log("El valor del miembro dentro de objetoJavaScript es " + objetoJavaScript.miembroObjeto);
    console.log("El valor del OTRO miembro dentro de objetoJavaScript es " + objetoJavaScript.otroMiembro);
    console.log("El valor de funcionVariable es " + funcionVariable);
    console.log("El valor de funcionVariable puede ser ejecutado...");
    funcionVariable("Parametro función");
    console.log("El valor de variableNull es " + variableNull);
    console.log("El valor de variableUndefined es " + variableUndefined);
}

function valoresDeEscape() {
    console.log("Salto de línea... \nEsta es otra línea...");
    console.log('Texto \'Este texto está dentro de comillas simples\' más texto...');
    console.log("Texto \"Este texto está dentro de comillas dobles\" más texto...");
    console.log("Texto simple \t Texto tabulado...");
    console.log("Texto \\ Este texto está dentro de contrabarra \\ más texto...");
}
