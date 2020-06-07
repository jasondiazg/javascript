let salonesDeClases = [];

function loadData() {
    salonesDeClases = JSON.parse((localStorage.getItem('salones'))) || [];
    refreshTable();
}

function saveData() {
    localStorage.setItem('salones', JSON.stringify(salonesDeClases));
}

function removeData() {
    localStorage.removeItem('salones');
    loadData();
}

function obtenerElementoHTML(id) {
    return document.getElementById(id);
}

function refreshTable() {
    let table = document.getElementById("table"),
        tbody = document.getElementById("tbody"),
        tr, td;

    if (tbody)
        table.removeChild(tbody);

    tbody = document.createElement("tbody");
    tbody.setAttribute("id", "tbody");
    table.appendChild(tbody);

    salonesDeClases.forEach((salon) => {
        tr = document.createElement("tr");
        for (propiedadSalon in salon) {
            td = document.createElement("td");

            if (salon[propiedadSalon] == true) {
                td.innerHTML = "Ocupado"
            } else if (salon[propiedadSalon] == false) {
                td.innerHTML = "Desocupado";
            } else {
                td.innerHTML = salon[propiedadSalon];
            }
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    });
}

function SalonDeClases(nombreSalon, capacidadSalon, direccionSalon, edificioSalon, enUso) {
    this.identificador = Math.floor(Math.random() * 1000) + 1;
    this.nombre = nombreSalon;
    this.direccion = direccionSalon;
    this.edificio = edificioSalon;
    this.capacidad = capacidadSalon;
    this.enUso = enUso;
}

function guardar() {
    let nombreSalon = obtenerElementoHTML("nombre").value;
    let capacidad = obtenerElementoHTML("capacidad").value;
    let direccion = obtenerElementoHTML("direccion").value;
    let edificio = obtenerElementoHTML("edificio").value;
    let identificador = obtenerElementoHTML("identificador").value;
    let enUso = obtenerElementoHTML("enUso").value;

    if (nombreSalon && capacidad && direccion && edificio) {
        if (identificador) {
            actualizar(identificador, nombreSalon, capacidad, direccion, edificio, enUso);
        } else {
            crear(nombreSalon, capacidad, direccion, edificio, enUso);
        }
        alert(nombreSalon + " almacenado con éxito.");
    } else {
        alert("Error: Debes proporcionar el nombre, capacidad y dirección del salón.");
    }

    limpiarFormulario();
    refreshTable();
}

function crear(nombreSalon, capacidad, direccion, edificio, enUso) {
    salonesDeClases.push(new SalonDeClases(nombreSalon, capacidad, direccion, edificio, enUso));
}

function actualizar(identificador, nombre, capacidad, direccion, edificio, enUso) {
    salonesDeClases.forEach((salon) => { 
        if (salon.identificador == identificador) {
            salon.nombre = nombre;
            salon.capacidad = capacidad;
            salon.direccion = direccion;
            salon.edificio = edificio;
            salon.enUso = enUso;
        }
    });
}

function eliminar() {
    let identificador = obtenerElementoHTML("identificador-salon").value;
    if (identificador) {
        let posicionSalonAEliminar = salonesDeClases.findIndex((salon) => { return salon.identificador == identificador; });
        if (posicionSalonAEliminar > 0) {
            salonesDeClases.splice(posicionSalonAEliminar, 1);
            refreshTable();
        }
    }
}

function ocupar() {
    let identificador = obtenerElementoHTML("identificador-salon").value;
    if (identificador) {
        let posicionSalonAOcupar = salonesDeClases.findIndex((salon) => { return salon.identificador == identificador; });
        if (posicionSalonAOcupar > 0) {
            salonesDeClases[posicionSalonAOcupar].enUso = true;
            refreshTable();
        }
    }
}

function desocupar() {
    let identificador = obtenerElementoHTML("identificador-salon").value;
    if (identificador) {
        let posicionSalonAOcupar = salonesDeClases.findIndex((salon) => { return salon.identificador == identificador; });
        if (posicionSalonAOcupar > 0) {
            salonesDeClases[posicionSalonAOcupar].enUso = false;
            refreshTable();
        }
    }
}

function cargar() {
    let identificador = obtenerElementoHTML("identificador-salon").value;
    if (identificador) {
        let salonACargar = salonesDeClases.filter((salon) => { return salon.identificador == identificador; });
        if (salonACargar.length > 0) {
            cargarAlFormulario(salonACargar[0]);
        }
    }
}

function limpiarFormulario() {
    obtenerElementoHTML("nombre").value = "";
    obtenerElementoHTML("capacidad").value = "";
    obtenerElementoHTML("direccion").value = "";
    obtenerElementoHTML("edificio").value = "";
    obtenerElementoHTML("identificador").value = "";
    obtenerElementoHTML("enUso").value = "";
}

function cargarAlFormulario(salon) {
    obtenerElementoHTML("nombre").value = salon.nombre;
    obtenerElementoHTML("capacidad").value = salon.capacidad;
    obtenerElementoHTML("direccion").value = salon.direccion;
    obtenerElementoHTML("edificio").value = salon.edificio;
    obtenerElementoHTML("identificador").value = salon.identificador;
    obtenerElementoHTML("enUso").value = (salon.enUso ? "Ocupado" : "Desocupado");
}

loadData();