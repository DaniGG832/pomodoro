'use strict'

alert("hola");

var i = 1;

while (i<=20) {

    console.log("entra en el while");
   if (i%3==0) {
    if ((i%5==0)) {
        document.write(i+" Es divisible por 5 y 3");
        document.write("<br>");
       }
       else{
        document.write(i+" Es divisible por 3"); 
        document.write("<br>");

       }
    
       /* continue;  */
   }
   if (i%5==0) {
       if ((i%3==0)) {
        document.write(i+" Es divisible por 5 y 3");
        document.write("<br>");
       }
       else{
        document.write(i+" Es divisible por 5"); 
        document.write("<br>");
       }
       /* continue; */
   }
   
    document.write(i);
    document.write("<br>");
    i++;
}   


