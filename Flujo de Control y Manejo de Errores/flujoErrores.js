function evaluateNumber() {
    let number = parseInt(document.getElementById('number-if-else').value);
    if (number % 2 === 0) {
        alert("El número ingresado es par");
    }
    else {
        alert("El número ingresado es impar");
    }
}

function evaluateGrade() {
    let number = parseInt(document.getElementById('number-if-else-if').value);
    if (number >= 80) {
        if (number > 100) {
            alert("Nota inválida");
        } else {
            alert("Alumno con nota excelente");
        }
    } else if (number >= 65 && number <= 79) {
        alert("Alumno aprobado");
    } else if (number < 65) {
        if (number > 0) {
            alert("Alumno reprobado");
        } else {
            alert("Nota inválida");
        }
    }
}

function evaluateDay() {
    let day = '';
    let selectDay = document.getElementById('switch').value;
    switch (selectDay) {
        case 'monday': {
            day = 'lunes';
            break;
        }
        case 'tuesday': {
            day = 'martes';
            break;
        }
        case 'wednesday': {
            day = 'miercoles';
            break;
        }
        case 'thursday': {
            day = 'jueves';
            break;
        }
        case 'friday': {
            day = 'viernes';
            break;
        }
        case 'saturday': {
            day = 'sábado';
            break;
        }
        case 'sunday': {
            day = 'domingo';
            break;
        }
    }
    alert(`Usted seleccionó el día ${day}.`);
}

function Persona(nombre, edad) {
    let persona = {};
    persona.nombre = nombre;
    persona.edad = edad;
    return persona;
}

function MiError(message, fileName, lineNumber) {
    let error = new Error(message);
    error.fileName = fileName;
    error.lineNumber = lineNumber;
    return error;
}

function generarExcepcion() {
    let alumno = new Persona('Juan', -8);
    let profesor = new Persona(26, 'Jason');

    evaluarPersona(alumno);
    evaluarPersona(profesor);
}

function evaluarPersona(persona) {
    try {
        evaluarEdadYNombrePersona(persona);
    } catch (error) {
        if (error.fileName && error.lineNumber) {
            console.log(error.message + " in " + error.fileName + " at " + error.lineNumber);
            console.log(error.stack);
        }
        else {
            console.log(error.stack);
        }
    } finally {
        console.log("Esta linea se ejecutará siempre");
    }
}

function evaluarEdadYNombrePersona(persona) {
    if (persona.edad < 0 || persona.edad > 140) {
        throw new Error("La persona " + persona.nombre + " tiene una edad menor que cero.");
    }
    if (!isNaN(persona.nombre)) {
        throw new MiError("El nombre de " + persona.nombre + " no es un nombre válido.", "flujoErrores.js", 44);
    }
}

function evalError() {
    try {
        eval("var 8d='evalError'");
    } catch (e) {
        if (e instanceof EvalError)
            console.log(e.stack);
    }
}

function rangeError() {
    try {
        let numero = 1;
        numero.toPrecision(101);
    } catch (e) {
        if (e instanceof RangeError)
            console.log(e.stack);
    }
}

function internalError() {
    try {
        loop(0);
    } catch (e) {
        if (e instanceof InternalError)
            console.log(e.stack);
    }
}

function loop(x) {
    if (x >= 1000000000000)
        return;
    loop(x + 1);
}

function referenceError() {
    try {
        if (true) {
            let numero = 1;
        }
        console.log(numero);
    } catch (e) {
        if (e instanceof ReferenceError)
            console.log(e.stack);
    }
}

function syntaxError() {
    try {
        eval("alert('Hello)"); 
    } catch (e) {
        if (e instanceof SyntaxError)
            console.log(e.stack);
    }
}

function typeError() {
    try {
        let letrasEnMinuscula = 1;
        letrasEnMinuscula.toUpperCase();
    } catch (e) {
        if (e instanceof TypeError)
            console.log(e.stack);
    }
}

function uriError() {
    try {
        decodeURI("%%%"); 
    } catch (e) {
        if (e instanceof URIError)
            console.log(e.stack);
    }
}

