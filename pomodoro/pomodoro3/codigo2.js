
if(document.cookie==""){
    document.cookie = "ttrabajo =25";
    document.cookie = "tcorto =5";
    document.cookie = "tlargo = 15";
    document.cookie = "repeticion =1"; 
}
/* Eventos */


document.getElementById("trabajo").addEventListener("click",trabajo);
document.getElementById("desCorto").addEventListener("click",descCorto);
document.getElementById("descLargo").addEventListener("click",descLargo);
document.getElementById("empezar").addEventListener("click",cuentaAtras);
document.getElementById("pagina").addEventListener("mousemove",cambios);
document.getElementById("pause").addEventListener("click",pause);
document.getElementById("stop").addEventListener("click",stop);
document.getElementById("opciones").addEventListener("click",nuevaVentana);


/* segundos por defecto */
document.getElementById("segundos").innerHTML = "00";
document.getElementById("minutos").innerHTML = getCookie("ttrabajo");
let ttrab = getCookie("ttrabajo");
let tdcorto = getCookie("tcorto");
let tdlargo = getCookie("tlargo");
let contador = getCookie("repeticiones");
let sw = true;
let ct = true;
let rest = false;
let opc = true;

function cambios() {
    
    if(rest==true){
        location.reload();
        console.log(111);
        trabajo();

    }
}




/* abrir ventana de configuracion */
let ventanaConfig;
    function nuevaVentana() {
        if (opc == true) {
            ventanaConfig= window.open("opciones.html","Configuracion","_blank, width=800px, height=700px, left=250");
       rest = true;
        }
       
    }
    


    /* Boton trabajo, mostrara la pantalla trabajo */
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
/* boton de descanso corto, muestra la pantalla de descanso corto */

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
/* boton de descanso largo, muestra la pantalla de descanso largo */

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

/* intervalo para comenzar la cuenta atras*/
let intervalo;
let intervaloMinutos;
function cuentaAtras() {
    opc= false;
    colorDesctivarBotones();
    quitaracabado();

    if(sw == true){
        
         let valor2 =document.getElementById("minutos").innerHTML;
         valor2--;
         document.getElementById("minutos").innerHTML= valor2;
        intervalo = setInterval(segundero,10);
        intervaloMinutos = setInterval(cAtras,10);
        
    }
    sw = false;
    ct = false;
    
}


/* pausar el reloj */
function pause() {
    clearInterval(intervalo);
    sw = true;
    

}

/* funcion stop, vuelve todo por defecto */
function stop() {

    document.getElementById("minutos").innerHTML = ttrab;
    document.getElementById("segundos").innerHTML = "00"; 
    clearInterval(intervalo);
    clearInterval(intervaloMinutos);
    segundos = 59;
    sw = true;
    ct = true;
    opc= true;
    colorTrabajo();
    document.getElementById("tiempoAgotado").innerHTML = "";
    coloractivarBotones();
    /* rest = true; */
}

/* funcion para la cuenta atras de los segundos */
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
function cAtras2() {
   
    valor = document.getElementById("minutos").innerHTML;
   
   if (segundos==0 ) {
       valor--;
       document.getElementById("minutos").innerHTML = valor;
   }
   if (valor<0 ) {
        descCorto();
       /* clearInterval(intervalo)
       clearInterval(intervaloMinutos) */
       console.log(25);
   }
}

/* funcion del intervalo para cuenta atras */
let valor;
function cAtras() {
   
     valor = document.getElementById("minutos").innerHTML;
    
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
        opc = true;
        ct = true;
        sw = true;
       /*  trabajo(); */

    }


    
}

/* muestra la hora que finaliza el tiempo */
function horaFin() {

    let hora = new Date();
    hora.setTime(hora.getTime() +60000*document.getElementById("minutos").innerHTML);
    
    
    document.getElementById("HoraFin").innerHTML =""+hora.getHours()+":"+hora.getMinutes();
    
}

/* colores para cada pantalla */

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
/* color para desaptivar botones y activarlos */
function colorDesctivarBotones() {
    document.getElementById("trabajo").style.backgroundColor = "#7A807B";
    document.getElementById("desCorto").style.backgroundColor = "#7A807B";
    document.getElementById("descLargo").style.backgroundColor = "#7A807B";
    
    document.getElementById("opciones").style.backgroundColor = "#7A807B";   
}

function coloractivarBotones() {
    document.getElementById("trabajo").style.backgroundColor = "rgb(238, 241, 6)";
    document.getElementById("desCorto").style.backgroundColor = "rgb(238, 241, 6)";
    document.getElementById("descLargo").style.backgroundColor = "rgb(238, 241, 6)";
    
    document.getElementById("opciones").style.backgroundColor = "dodgerblue";  
}

/* funcion para quitar letrero de acabado */
function quitaracabado() {
    document.getElementById("tiempoAgotado").innerHTML = "";
}


/* comprobar valor cookies */
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
