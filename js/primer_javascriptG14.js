/*alert("primer javascript pero el .js");*/

var nombre="Pepito perez";
var edad=15;
var peso=74.5;
var masculino=true;
var materias;

/*var numero1 = prompt("Ingresar numero 1");
var numero2 = prompt("Ingresar numero 2");
var resultado = parseInt(numero1) + parseInt(numero2);
alert("el resultado de la suma es "+resultado); 
document.write("<p class='fs-1'>el resultado de la suma es "+resultado+"</p>");*/

document.write("<center>")
document.write("<h1>Ejemplo arreglos</h1>");
document.write("<br />");
var materias=["ingles", "frances", "matematicas",77458, false];
document.write(materias.join("<br />"));
document.write("<br />");
materias[materias.length]="fisica";
document.write("<br />");
document.write("la materia en la posiciòn 6 es "+materias[5]);
document.write("<br />");
materias.pop();
document.write("<br />");
document.write("la materia en la posiciòn 6 es "+materias[5]);
document.write("<br />");

document.write("<h1>FOR</h1>");
for(i=1; i<=10; i=i+3){
    document.write("<br /> la i va en el valor"+i);
}
document.write("<br />");
document.write("<br />");
document.write("<h1>WHILE</h1>");
var j=4
while(j<10){
    document.write("<br /> la j va en el valor"+j);
    j++;
}

document.write("<br />");
document.write("<br />");
document.write("<h1>DO-WHILE</h1>");
var k=4
do{
    document.write("<br /> la k va en el valor"+k);
    k++;
}while(k<=10)
document.write("<br />");
document.write("<br />");

function sumar(){
    var numero_1_formulario = document.getElementById("numero1").value;
    var numero_2_formulario = document.getElementById("numero2").value;
    var sumatoria = parseFloat(numero_1_formulario) + parseFloat(numero_2_formulario);
    alert("sumatoria es "+sumatoria);
}
function sumar2(numero_1, numero_2){
    var sumatoria = parseFloat(numero_1) + parseFloat(numero_2);
    return sumatoria;
}

var sumatoria_global = sumar2(54, 21)
alert("sumatoria global "+sumatoria_global);