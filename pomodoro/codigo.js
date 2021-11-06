document.getElementById("trabajo").addEventListener("click",trabajo);
document.getElementById("desCorto").addEventListener("click",descansoCorto);
document.getElementById("descLargo").addEventListener("click",trabajo);
document.getElementById("pause").addEventListener("click",trabajo);
document.getElementById("continuar").addEventListener("click",trabajo);
document.getElementById("stop").addEventListener("click",stop);



let limpiar;
let tTrab = 1;
let intervalo ;
let intervalotrabajo; 
let tieTrabajo;
let parar = 0;
let tDCorto = 5;

function trabajo() {

    if (parar%2 == 0) {
        intervalo = setInterval(segundero,100);
        tieTrabajo =setInterval(tiempoTrabajo,100);
    }else{
        clearInterval(intervalo);

    }
    parar++;     

}

function descansoCorto() {

    if (parar%2 == 0) {
       let intervalocorto = setInterval(segundero,100);
       let tieTrabajocorto =setInterval(tiempoCorto,100);
    }else{
        clearInterval(intervalo);

    }
    parar++;     

}
function pause() {
    
    clearInterval(intervalo);
    parar++;     
   
}
function continuar() {
    
    intervalo;
    parar++;     
   
}

function tiempoTrabajo() {
   
        document.getElementById("minutos").innerHTML = tTrab;
        if (segundos==0 ) {
            tTrab--;
        }
        if (tTrab<0 ) {
            document.getElementById("tiempoAgotado").innerHTML = "se Agoto el tiempo de trabajo";
            clearInterval(intervalo);
            clearInterval(tieTrabajo);
            document.getElementById("segundos").innerHTML = "00";
            document.getElementById("minutos").innerHTML = "25";
            segundos = 59;
            tTrab= 24;


        }
    

    
}

function tiempoCorto() {

    document.getElementById("minutos").innerHTML = tDCorto;
    if (segundos==0 ) {
        tDCorto--;
    }
    if (tDCorto<0 ) {
        document.getElementById("tiempoAgotado").innerHTML = "se Agoto el tiempo de trabajo";
        clearInterval(intervalo);
        clearInterval(tieTrabajo);
        document.getElementById("segundos").innerHTML = "00";
        document.getElementById("minutos").innerHTML = "5";
        segundos = 59;
        tDCorto= 5;


    }
    
}

let segundos = 59;


function segundero() {
    
    if (segundos<10) {
        document.getElementById("segundos").innerHTML = "0"+segundos--;
    }else{
        document.getElementById("segundos").innerHTML = segundos--;
    }
    
    if(segundos<0){
        segundos = 59;
    }

    

   console.log(x);

    
}

