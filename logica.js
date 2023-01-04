//variaveis 
  var a;
  var b;
  var c;
  var delta;
  var x1;
  var x2;
            
//função de calcular a formula de bhaskara
  function calcular(){       

//entrada dados 
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var c = parseFloat(document.getElementById("c").value);

  //Inicio logico da formula de bhaskara
  if (!b || !c) {
     alert("Insirar o Valor!!");
  } 

  if (a != 0) {
    delta = (b*b) - ((4*a)*c);
    document.getElementById("delta").innerHTML = "Valor de Delta: " +  delta;
  
  if (delta < 0){
    document.getElementById("delta").innerHTML = "Valor de Delta: " + delta + ("<p>Delta não tem raiz real!!");
  }
  if (delta == 0){
    x1 = (-b )/(2*a);
    x2 = (-b )/(2*a);
    document.getElementById("x1").innerHTML = "Valor de x1: " + x1.toFixed(4);
    document.getElementById("x2").innerHTML = "Valor de x2: " + x2.toFixed(4);
  }
  if (delta > 0){
    x1 = (- + Math.sqrt(delta))/(2*a);
    x2 = (-b - Math.sqrt(delta))/(2*a);
    document.getElementById("x1").innerHTML = "Valor de x1: " + x1.toFixed(4);
    document.getElementById("x2").innerHTML = "Valor de x2: " + x2.toFixed(4);
  }
} else{
  alert('O valor de "a" tem que ser diferente de 0!!');
}
}