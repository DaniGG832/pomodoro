'use strit'

function cambiarVerde(id, so) {

    const parrafo = document.getElementById(id);
    parrafo.style.color = "green";
    document.getElementById(so).innerHTML = " -( respuesta correcta )";

}

function cambiarRojo(id, so) {

    const parrafo = document.getElementById(id);
    parrafo.style.color = "red";
    document.getElementById(so).innerHTML = " -( respuesta incorrecta )";
    parrafo.style.color = "green";

}