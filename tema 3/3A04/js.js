
 document.write("<h2>Lista de 10 numeros aleatorios: </h2>");

  for (let i = 0; i < 10; i++) {
    
    let azar = Math.floor((Math.random()* (20 - 0)) + 0);

    document.write("<p>"+(i+1)+ " --> <span style='color: red;' >" + azar +"</span></p>");
  }
  
 