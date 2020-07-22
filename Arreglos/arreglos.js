function cargarDatos() {
    arreglo = new Array(localStorage.getItem('array'));
    actualizarElementoHTML("array", arreglo);
}

function guardarDatos() {
    localStorage.setItem('array', arreglo);
}

function borrarDatos() {
    localStorage.removeItem('array');
    cargarDatos();
}

function mostrarArreglo(array, idElemento) {
    let p = "";
    for (elemento of array) {
        p += ' [' + elemento + "], ";
    }
    actualizarElementoHTML(idElemento, p);
}

let arreglo = [];

function actualizarElementoHTML(id, content) {
    document.getElementById(id).innerHTML = content;
}

function limpiarElementoHTML(id) {
    document.getElementById(id).value = "";
}

function autoEnfocarInput(id) {
    document.getElementById(id).focus();
}

function obtenerElementoHTML(id) {
    return document.getElementById(id);
}

function push() {
    let elemento = obtenerElementoHTML("elemento").value;
    arreglo.push(elemento);
    actualizarElementoHTML("array", arreglo);
    limpiarElementoHTML("elemento");
    autoEnfocarInput("elemento");
}

function pop() {
    let elementoEliminado = arreglo.pop();
    actualizarElementoHTML("array", arreglo);
    console.info("Tamaño del arreglo " + arreglo.length);
}

function unshift() {
    let elemento = obtenerElementoHTML("elemento").value;
    arreglo.unshift(elemento);
    actualizarElementoHTML("array", arreglo);
    limpiarElementoHTML("elemento");
    autoEnfocarInput("elemento");
}

function shift() {
    arreglo.shift();
    actualizarElementoHTML("array", arreglo);
    console.info("Tamaño del arreglo " + arreglo.length);
}

function splice() {
    let valorParaBuscar = obtenerElementoHTML("elemento-eliminar").value;
    let posicion = arreglo.findIndex((elemento) => { return elemento === valorParaBuscar; });
    
    if (posicion > 0){
        arreglo.splice(posicion, 1);
        actualizarElementoHTML("array", arreglo); 
        console.info("Tamaño del arreglo " + arreglo.length);   
    }
    limpiarElementoHTML("elemento-eliminar");
}

function spliceIndex() {
    let indiceAEliminar = obtenerElementoHTML("elemento-eliminar-indice").value;
    if (indiceAEliminar){
        arreglo.splice(indiceAEliminar, 1);
        actualizarElementoHTML("array", arreglo);  
        console.info("Tamaño del arreglo " + arreglo.length);  
    }
    limpiarElementoHTML("elemento-elimina-indice");
}

function entries() {
    let iterator = arreglo.entries();
    mostrarArreglo(iterator, "entries");
}

function keys() {
    let iterator = arreglo.keys();
    mostrarArreglo(iterator, "keys");
}

function values() {
    let iterator = arreglo.values();
    mostrarArreglo(iterator, "values");
}

function every() {
    everyTexto();
    everyNumeros();
}

function everyTexto() {
    let sonTexto = arreglo.every(esLetra);
    if (sonTexto) {
        actualizarElementoHTML("every-some-texto", "Todos los elementos son Texto.");
    } else {
        actualizarElementoHTML("every-some-texto", "Existen elementos que no son Texto.");
    }
}

function esLetra(cadena) {
    return isNaN(cadena);
}

function everyNumeros() {
    let sonNumeros = arreglo.every((element) => { return !isNaN(element); })
    if (sonNumeros) {
        actualizarElementoHTML("every-some-numeros", "Todos los elementos son números.");
    } else {
        actualizarElementoHTML("every-some-numeros", "Existen elementos que no son números.");
    }
}

function some() {
    someTexto();
    someNumeros();
}

function someTexto() {
    let sonTexto = arreglo.some(esLetra);
    if (sonTexto) {
        actualizarElementoHTML("every-some-texto", "Hay al menos un elemento que es Texto.");
    } else {
        actualizarElementoHTML("every-some-texto", "No hay ni un elemento Texto.");
    }
}

function someNumeros() {
    let sonNumeros = arreglo.some((element) => { return !isNaN(element); })
    if (sonNumeros) {
        actualizarElementoHTML("every-some-numeros", "Hay al menos un elemento que es número.");
    } else {
        actualizarElementoHTML("every-some-numeros", "No hay ni un elemento número.");
    }
}

function filterTexto() {
    let arregloTextos = arreglo.filter((elemento) => { return isNaN(elemento); });
    actualizarElementoHTML("filter-texto", "Texto: " + arregloTextos);
}

function filterNumeros() {
    let arregloNumeros = arreglo.filter((elemento) => { return !isNaN(elemento); });
    actualizarElementoHTML("filter-numeros", "Numeros: " + arregloNumeros);
}

function find() {
    let valorParaBuscar = obtenerElementoHTML("elemento-buscar").value;
    let resultados = arreglo.find((elemento) => { return elemento === valorParaBuscar; });
    if (resultados) {
        let posicion = arreglo.findIndex((elemento) => { return elemento === valorParaBuscar; });
        actualizarElementoHTML("resultados", "Resultados: se encontró el elemento " + resultados + " en la posición " + posicion);
    } else {
        actualizarElementoHTML("resultados", "No se encontraron resultados.");
    }
}

function includesIndexOf() {
    let valorParaBuscar = obtenerElementoHTML("elemento-buscar").value;
    let resultados = arreglo.includes(valorParaBuscar);
    if (resultados) {
        let posicion = arreglo.indexOf(valorParaBuscar);
        actualizarElementoHTML("resultados", "Resultados: se encontró el elemento " + valorParaBuscar + " en la posición " + posicion);
    } else {
        actualizarElementoHTML("resultados", "No se encontraron resultados.");
    }
}

function foreach() {
    let p = "";
    arreglo.forEach((elemento, index, arregloCompleto) => { p += "elemento " + index + ": " + elemento + ", "; console.log(arregloCompleto); })
    actualizarElementoHTML("for-each", p);
}

function join() {
    let divisor = obtenerElementoHTML("divisor").value ? obtenerElementoHTML("divisor").value : '/';
    let union = arreglo.join(divisor);
    actualizarElementoHTML("resultado-join", union);
}

function mapReduce() {
    let detallesFactura =   [   
                                { "id": 1, "cantidad": 4, "codigo": "77012458", "producto": "Manzanas libra", "costo": 10 },
                                { "id": 1, "cantidad": 5, "codigo": "77013513", "producto": "Peras libra", "costo": 12 },
                                { "id": 1, "cantidad": 2, "codigo": "77454812", "producto": "Naranjas libra", "costo": 5 },
                                { "id": 1, "cantidad": 10, "codigo": "77115772", "producto": "Uvas libra", "costo": 15 }
                            ];

    let arregloSubtotales = detallesFactura.map((detallefactura) => {
        return detallefactura.cantidad * detallefactura.costo;
    })
    
    let totalFactura = arregloSubtotales.reduce((acumulador, subtotal) => {
        return acumulador + subtotal;
    });
    actualizarElementoHTML("total-factura", "El total de la compra es Q." + totalFactura);
}

function mapReduceRight() {
    let detallesFactura =   [   
                                { "id": 1, "cantidad": 4, "codigo": "77012458", "producto": "Manzanas libra", "costo": 10 },
                                { "id": 1, "cantidad": 5, "codigo": "77013513", "producto": "Peras libra", "costo": 12 },
                                { "id": 1, "cantidad": 2, "codigo": "77454812", "producto": "Naranjas libra", "costo": 5 },
                                { "id": 1, "cantidad": 10, "codigo": "77115772", "producto": "Uvas libra", "costo": 15 }
                            ];

    let totalFactura = detallesFactura.map((detallefactura) => {
        return detallefactura.cantidad * detallefactura.costo;
    }).reduceRight((acumulador, subtotal) => {
        return acumulador + subtotal;
    });
    actualizarElementoHTML("total-factura", "El total de la compra es Q." + totalFactura);
}

function copyWithin() {
    let target = (obtenerElementoHTML("target").value ? obtenerElementoHTML("target").value : undefined);
    let start = (obtenerElementoHTML("start").value ? parseInt(obtenerElementoHTML("start").value) : undefined);
    let end = (obtenerElementoHTML("end").value ? parseInt(obtenerElementoHTML("end").value) : undefined);

    if (target) {
        if (start) {
            if (end) {
                arreglo.copyWithin(target, start, end)
            } else {
                arreglo.copyWithin(target, start);
            }
        } else {
            arreglo.copyWithin(target);
        }
    }
    actualizarElementoHTML("array", arreglo);
}

function fill() {
    let valueToFill = (obtenerElementoHTML("valueToFill").value ? obtenerElementoHTML("valueToFill").value : undefined);
    let start = (obtenerElementoHTML("start-fill").value ? parseInt(obtenerElementoHTML("start-fill").value) : undefined);
    let end = (obtenerElementoHTML("end-fill").value ? parseInt(obtenerElementoHTML("end-fill").value) : undefined);

    if (valueToFill) {
        if (start) {
            if (end) {
                arreglo.fill(valueToFill, start, end)
            } else {
                arreglo.fill(valueToFill, start);
            }
        } else {
            arreglo.fill(valueToFill);
        }
    }
    actualizarElementoHTML("array", arreglo);
}

function slice() {
    let start = (obtenerElementoHTML("start-slice").value ? parseInt(obtenerElementoHTML("start-slice").value) : undefined);
    let end = (obtenerElementoHTML("end-slice").value ? parseInt(obtenerElementoHTML("end-slice").value) : undefined);
    let parteDelArreglo = "";

    if (start && end) {
        parteDelArreglo = arreglo.slice(start, end)
    }
    actualizarElementoHTML("slice", "Arreglo nuevo: " + parteDelArreglo);
}

function reverse() {
    arreglo.reverse();
    actualizarElementoHTML("array", arreglo);
}

function sort() {
    arreglo.sort();
    actualizarElementoHTML("array", arreglo);
}

function sortByFirstName() {
    let personsArray = createPersonsArray();

    personsArray.sort((personA, personB) => { if (personA.firstName > personB.firstName) return 1; else if (personA.firstName < personB.firstName) return -1; else return 0; });
    mostrarArregloPersonas(personsArray);
}

function sortByLastName() {
    let personsArray = createPersonsArray();

    personsArray.sort((personA, personB) => { if (personA.lastName > personB.lastName) return 1; else if (personA.lastName < personB.lastName) return -1; else return 0; });
    mostrarArregloPersonas(personsArray);
}

function sortByAge() {
    let personsArray = createPersonsArray();

    personsArray.sort((personA, personB) => { if (personA.age > personB.age) return 1; else if (personA.age < personB.age) return -1; else return 0; });
    mostrarArregloPersonas(personsArray);
}

function createPersonsArray() {
    return [
        { firstName: "Juan", lastName: "Ordoñez", age: "30" },
        { firstName: "Manuel", lastName: "Rodríguez", age: "27" },
        { firstName: "Maria", lastName: "Del Valle", age: "15" }
    ];
}

function mostrarArregloPersonas(personas) {
    let stringPersonas = "";
    personas.forEach((persona) => {
        stringPersonas += persona.firstName + " " + persona.lastName + ", " + persona.age  + " años. \n";
    });
    actualizarElementoHTML("sort-object", stringPersonas);
}

function concat() {
    let arregloMujeres = ["Sonia", "Fernanda", "Luz"];
    let arregloHombres = ["Rodrigo", "José", "Javier"];
    let arregloHombresMujeres = arregloMujeres.concat(arregloHombres);
    actualizarElementoHTML("concat", arregloHombresMujeres);
}

function posicionesInexistentes() {
    let arregloPosicionesInexistentes = [];
    arregloPosicionesInexistentes[5] = "Quinta posición";
    arregloPosicionesInexistentes[2.3] = "Posición 2.3";

    for (let i = 0; i < arregloPosicionesInexistentes.length; i++) {
        console.log(arregloPosicionesInexistentes[i]);
    }

    for (elemento of arregloPosicionesInexistentes) {
        console.log(elemento);
    }

    if (arregloPosicionesInexistentes.hasOwnProperty(2.3)) {
        console.log(arregloPosicionesInexistentes[2.3]);
    }
}