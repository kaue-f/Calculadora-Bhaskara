//variaveis 
  var js_a;
  var js_b;
  var js_c;
  var js_delta;
  var js_x1;
  var js_x2;
            
//função calcular
  function calcular(){       
//entrada dados
  var js_a = parseFloat(document.getElementById("a").value);
  var js_b = parseFloat(document.getElementById("b").value);
  var js_c = parseFloat(document.getElementById("c").value);

  if (!js_b || !js_c) {
     alert("Insirar o Valor!!");
  } 

  if (js_a != 0) {
    js_delta = (js_b*js_b) - ((4*js_a)*js_c);
    document.getElementById("delta").innerHTML = "Valor de Delta: " +  js_delta;
  
  if (js_delta < 0){
    document.getElementById("delta").innerHTML = "Valor de Delta: " + js_delta + ("<p>Delta não tem raiz real!!");
  }
  if (js_delta == 0){
    js_x1 = (-js_b )/(2*js_a);
    js_x2 = (-js_b )/(2*js_a);
    document.getElementById("x1").innerHTML = "Valor de x1: " + js_x1.toFixed(4);
    document.getElementById("x2").innerHTML = "Valor de x2: " + js_x2.toFixed(4);
  }
  if (js_delta > 0){
    js_x1 = (-js_b + Math.sqrt(js_delta))/(2*js_a);
    js_x2 = (-js_b - Math.sqrt(js_delta))/(2*js_a);
    document.getElementById("x1").innerHTML = "Valor de x1: " + js_x1.toFixed(4);
    document.getElementById("x2").innerHTML = "Valor de x2: " + js_x2.toFixed(4);
  }
} else{
  alert('O valor de "a" tem que ser diferente de 0!!');
}

}