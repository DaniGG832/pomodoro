document.getElementById("trabajo").addEventListener("click",trabajo);
document.getElementById("desCorto").addEventListener("click",descCorto);
document.getElementById("descLargo").addEventListener("click",descLargo);
document.getElementById("empezar").addEventListener("click",cuentaAtras);
document.getElementById("pause").addEventListener("click",pause);
document.getElementById("stop").addEventListener("click",stop);

document.getElementById("segundos").innerHTML = "00";

let ttrab = 25;
let tdcorto = 5;
let tdlargo = 15;
let sw = true;
let ct = true;

/* function stop() {
    ttrab = 25;
    tdcorto = 5;
    tdlargo = 15;
    
} */

function trabajo() {
    if (ct) {
    document.getElementById("minutos").innerHTML = ""+ttrab;
    console.log(ttrab);
    console.log(document.getElementById("minutos").innerHTML);
    colorTrabajo();
    horaFin();
    quitaracabado();
    }
   
    
}

function descCorto() {
    if (ct) {
    document.getElementById("minutos").innerHTML = ""+tdcorto;
    console.log(tdcorto);
    console.log(document.getElementById("minutos").innerHTML);
    colorTcorto();
    horaFin();
    quitaracabado();

    }

}

function descLargo() {
    if (ct) {
    document.getElementById("minutos").innerHTML = ""+tdlargo;
    console.log(tdlargo);
    console.log(document.getElementById("minutos").innerHTML);
    colorTlargo();
    horaFin();
    quitaracabado();

    }
}
let intervalo;
let intervaloMinutos;
function cuentaAtras() {
    colorDesctivarBotones();
    quitaracabado();

    if(sw == true){
        intervalo = setInterval(segundero,10);
        intervaloMinutos = setInterval(cAtras,10)
    }
    sw = false;
    ct = false;
    
}
function pause() {
    clearInterval(intervalo);
    sw = true;
    

}
function stop() {
    document.getElementById("minutos").innerHTML = 25;
    document.getElementById("segundos").innerHTML = "00"; 
    clearInterval(intervalo);
    clearInterval(intervaloMinutos);
    segundos = 59;
    sw = true;
    ct = true;
    colorTrabajo();
    document.getElementById("tiempoAgotado").innerHTML = "";
    coloractivarBotones();
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
}
function cAtras() {
     let valor = document.getElementById("minutos").innerHTML;
     
    if (segundos==0 ) {
        valor--;
        document.getElementById("minutos").innerHTML = valor;
    }
    if (valor<0 ) {
        coloractivarBotones();
        document.getElementById("tiempoAgotado").innerHTML = "se Agoto el tiempo de trabajo";
        clearInterval(intervalo);
        clearInterval(intervaloMinutos);
        document.getElementById("segundos").innerHTML = "00";
        document.getElementById("minutos").innerHTML = "0";
        segundos = 59;
        tTrab= 24;
        ct = true;
        sw = true;
    

    }


    
}

function horaFin() {

    let hora = new Date();
    hora.setTime(hora.getTime() +60000*document.getElementById("minutos").innerHTML);
    
    
    document.getElementById("HoraFin").innerHTML =""+hora.getHours()+":"+hora.getMinutes();
    
}

function colorTrabajo() {
    document.getElementById("cabecera").innerHTML = "Trabajo";
    document.getElementById("pomodoro-app").style.backgroundColor="aqua";
    document.getElementById("contenedor").style.backgroundColor="rgb(11, 7, 238)";
    document.getElementById("tiempo").style.color="aqua";
    document.getElementById("cabecera").style.color="aqua";
    document.getElementById("horaterminar").style.color="aqua";
    console.log("colotT");
    
}
function colorTcorto() {
    document.getElementById("cabecera").innerHTML = "Tiempo corto";
    document.getElementById("pomodoro-app").style.backgroundColor="#80F580";
    document.getElementById("contenedor").style.backgroundColor="#20E920";
    document.getElementById("tiempo").style.color="#025610";
    document.getElementById("cabecera").style.color="#025610";
    document.getElementById("horaterminar").style.color="#025610";
    console.log("colotT");
    
}
function colorTlargo() {
    document.getElementById("cabecera").innerHTML = "Tiempo largo";
    document.getElementById("pomodoro-app").style.backgroundColor="rgb( 236, 199, 32)";
    document.getElementById("contenedor").style.backgroundColor="#E9A00E";
    document.getElementById("tiempo").style.color="#641E16";
    document.getElementById("cabecera").style.color="#641E16";
    document.getElementById("horaterminar").style.color="#641E16";
    console.log("colotT");
    
}
function colorDesctivarBotones() {
    document.getElementById("trabajo").style.backgroundColor = "#7A807B";
    document.getElementById("desCorto").style.backgroundColor = "#7A807B";
    document.getElementById("descLargo").style.backgroundColor = "#7A807B";    
}

function coloractivarBotones() {
    document.getElementById("trabajo").style.backgroundColor = "rgb(238, 241, 6)";
    document.getElementById("desCorto").style.backgroundColor = "rgb(238, 241, 6)";
    document.getElementById("descLargo").style.backgroundColor = "rgb(238, 241, 6)";    
}

function quitaracabado() {
    document.getElementById("tiempoAgotado").innerHTML = "";
}
let pomodoro = 3;

function opcPomodoros() {
    
}