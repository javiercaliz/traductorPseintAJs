
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
         
      
        if (/(PI)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/pi/gi, 'Math.PI')}`};
        if (/(Euler)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/Euler/gi, 'Math.E')}`};
        if (/(Verdadero)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/Verdadero/gi, 'true')}`};
        if (/(Falso)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/Falso/gi, 'false')}`};
        if (/(Y)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/\sY\s/, ' && ')}`};
        if (/(O)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/\sO\s/gi, ' || ')}`};
        if (/(NO)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/\sNO\s/gi, ' !')}`};
        if (/(MOD)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/MOD/gi, '%')}`};
        if (/(subcadena)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/subcadena/gi, 'Subcadena')}`};
        if (/(longitud)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/longitud/gi, 'Longitud')}`};
        if (/(concatenar)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/concatenar/gi, 'Concatenar')}`};
        if (/(convertirANumero)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/convertirANumero/gi, 'ConvertirANumero')}`};
        if (/(convertirATexto)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/convertirATexto/gi, 'ConvertirATexto')}`};
        if (/(mayusculas)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/mayusculas/gi, 'Mayusculas')}`};
        if (/(minusculas)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/minusculas/gi, 'Minusculas')}`};
        if (/(abs)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/abs/gi, 'abs')}`};
        if (/(redon)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/redon/gi, 'redon')}`};
        if (/(trunc)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/trunc/gi, 'trunc')}`};
        if (/(raiz)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/raiz/gi, 'raiz')}`};
        if (/(sen)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/sen/gi, 'sen')}`};
        if (/(cos)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/cos/gi, 'cos')}`};
        if (/(tan)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/tan/gi, 'tan')}`};
        if (/(asen)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/asen/gi, 'asen')}`};
        if (/(acos)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/acos/gi, 'acos')}`};
        if (/(atan)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/atan/gi, 'atan')}`};
        if (/(ln)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/ln/gi, 'ln')}`};
        if (/(exp)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/exp/gi, 'exp')}`};
        if (/(azar)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/azar/gi, 'azar')}`};

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


