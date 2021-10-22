//paguina para practicar con expresiones regulares : https://regexr.com/


document.getElementById("boton").onclick = comprobar;

//funcion para comprobar la Expresion regular
function comprobar(){
  console.log(21);
  var coord = document.getElementById("coordenada").value;
  var patt = /^\(\d{1,3}\,\d{1,3}\)$/; 
  var res = patt.test(coord);

// imprime por consola las coordenadas y el resultado del booleano de la misma
  console.log(coord,res); 
 document.getElementById("resultado").innerHTML = res; 

// si el resultado es true llama a la funcion que pinta en pantalla que valida
 if(res){
     mostrar(coord);
     document.getElementById("coordenada").value="";
  }

// si nop es valida nos muestra un alert y borra los datos de la anterior consulta
  else{
     alert("Introduzca una coordenada correctas");
     document.getElementById("coordenada").value="";
     document.getElementById("dato").innerHTML = "";
     document.getElementById("validado").innerHTML =""; 
 }

}

//nos muestra en pantalla las coordenadas si son correctas
function mostrar(coord){
    document.getElementById("dato").innerHTML = coord;
    document.getElementById("validado").innerHTML = 
    "las coordenadas son correctas.";   
}

