// llama a la funcion al presionar el boton
document.getElementById("boton").onclick = grupo;

function grupo(){

    let numero = document.getElementById("componentes").value;

    

    if (isNaN(numero)) {
        alert("debes introducir un numero valido" );
        document.getElementById("componentes").value = "";

    }else if (numero=="") {
        document.getElementById("dato").innerHTML = "";
        document.getElementById("componentes").value = "";
    
    } else if (numero<=0) {
        document.getElementById("dato").innerHTML = "not a group";
        document.getElementById("componentes").value = "";

    }else if (numero==1) {
        document.getElementById("dato").innerHTML = "solo";
        document.getElementById("componentes").value = "";

    } else if (numero==2) {
        document.getElementById("dato").innerHTML = "duet";
        document.getElementById("componentes").value = "";

    } else if (numero==3) {
        document.getElementById("dato").innerHTML = "trio";  
        document.getElementById("componentes").value = ""; 

    } else if (numero==4) {
        document.getElementById("dato").innerHTML = "quartet";  
        document.getElementById("componentes").value = "";  

    } else {
        document.getElementById("dato").innerHTML = "thes es a large group";
        document.getElementById("componentes").value = "";

    }
    
    // muestra en consola el valor y el resultado
    console.log("el valor es:"+numero+" "+ document.getElementById("dato").innerHTML);

    

   
}

