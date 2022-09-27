
//VARIABLES
var boton = document.getElementById('botonResolver');
var textoPseint = document.getElementById('textoPseint');
var codigoJavascript = document.getElementById('codigoJavascript');
var consigna = document.getElementById('consigna');
var botonEjercicio1 = document.getElementById('ejercicio1');
var botonEjercicio2 = document.getElementById('ejercicio2');
var botonEjercicio3 = document.getElementById('ejercicio3');


//FUNCIONES
function inicio() {
  vaciarConsola();
  vaciarCodigoJavascript();
  traduccionCompleja();
  traduccionSimple();
  scriptToHtml();
  resolver();
  vaciarScript();
    
}

function activarConsigna(opcion) {
    consigna.textContent = ejercicios[opcion].consigna;
}

function traduccionCompleja(){

    let string = textoPseint.value; 
 
    let codigo = string.split("\n");

    for (let i = 0; i < codigo.length; i++) {
        let sentencia = codigo[i]
        
        if (/Algoritmo/g.test(sentencia)) {
            continue;
        }else
        if (/Definir/gi.test(sentencia)) {
            codigoJavascript.value += `${traducirVariables(codigo[i])}\n`;
        }else 
        if (/Escribir/gi.test(sentencia)) {
            codigoJavascript.value += `${traducirEscribir(codigo[i])}\n`;
        }else
        if(/Leer/gi.test(sentencia)){
            codigoJavascript.value += `${traducirLeer(codigo[i])}\n`;
        }else{
            codigoJavascript.value += `${codigo[i]}\n`;
        }
    }
}

function traduccionSimple(){
    let string = codigoJavascript.value
    let codigo = string.split("\n");
    for (let i = 0; i < codigo.length; i++) {
      
        if (/PI/gi.test(codigo[i])) {
        codigo[i] = `${codigo[i].replace('PI' || 'pi', 'Math.PI')}`};
        if (/Euler/gi.test(codigo[i])) {
        codigo[i] = `${codigo[i].replace('Euler' || 'euler' || 'EULER', 'Math.E')}`};
        if (/Verdadero/gi.test(codigo[i])) {
        codigo[i] = `${codigo[i].replace('Verdadero' || 'verdadero' || 'VERDADERO', 'true')}`};
        if (/Falso/gi.test(codigo[i])) {
        codigo[i] = `${codigo[i].replace('Falso' || 'falso' || 'FALSO', 'false')}`};
        if (/Y/gi.test(codigo[i])) {
        codigo[i] = `${codigo[i].replace(' Y ' || ' y ', ' && ')}`};
        if (/O/gi.test(codigo[i])) {
        codigo[i] = `${codigo[i].replace(' O ' || ' o ', ' || ')}`};
        if (/NO/gi.test(codigo[i])) {
        codigo[i] = `${codigo[i].replace(' No ' || ' no ' || ' NO ', ' !')}`};
     
       
   

    }

    codigoJavascript.value = codigo.join('\n')
}


function scriptToHtml(){
    let script = document.createElement('script');
    script.setAttribute('id', 'traduccion')
    script.innerHTML= `
    function resolver(){
       ${codigoJavascript.value}
       };`
    document.body.appendChild(script);
}

function vaciarCodigoJavascript(){  
    codigoJavascript.value = "";
}

function vaciarConsola(){  
    console.clear();
}

function vaciarScript(){
    document.getElementById('traduccion').parentNode.removeChild(document.getElementById('traduccion'));
}




//LISTENERS
boton.addEventListener('click', ()=>{inicio()})
botonEjercicio1.addEventListener('click', ()=>{activarConsigna(1)});
botonEjercicio2.addEventListener('click', ()=>{activarConsigna(2)});
botonEjercicio3.addEventListener('click', ()=>{activarConsigna(3)});


//OBJECTS

const ejercicios = {
1:{'consigna':`Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que para calcular el área y el perímetro se utilizan las siguientes fórmulas:
area = PI * radio^2
perimetro = 2 * PI *radio`},
2:{'consigna':`Escribir un programa que calcule el precio promedio de un producto. El precio promedio se debe calcular a partir del precio del mismo producto en tres establecimientos distintos.`},
3:{'consigna':`A partir de una conocida cantidad de metros que el usuario ingresa a través del teclado se debe obtener su equivalente en centímetros, en milímetros y en pulgadas. 
Ayuda: 1 pulgada equivale a 2.54 centímetros.`}
}



