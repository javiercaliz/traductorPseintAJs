function traducirVariables(origen) {
  let final = "";
  let intermedio = [];

  intermedio = origen.split(" ");
  intermedio[0] = "let";
  intermedio[2] = "=";
  switch (intermedio[3].toLowerCase()) {
    case "entero":
      intermedio[3] = 0;
      break;
    case "real":
      intermedio[3] = 0.0;
      break;
    case "caracter":
      intermedio[3] = "''";
      break;
    case "cadena":
      intermedio[3] = "''";
      break;
    case "logico":
      intermedio[3] = true;
      break;
    default:
      break;
  }

  final = intermedio.join(" ");
  return final;
}

function traducirEscribir(...origen) {
  let final = "";
  origen.forEach(x => {
    final += x;
  });
  
  if (final.toLowerCase().includes('sin saltar')) {
    final = final.replace(/sin\ssaltar/gi, "").trim();
    final = final.trim().replace(/escribir/gi, "escribirSinSaltar(");
  } else {
    final = final.trim().replace(/escribir/gi, "escribir(");
  }
  final = final.concat(");");
  return final;
}

function escribir(...origen) {
  let final = "";
  origen.forEach(x => {
    final += x;
  });
  let terminal = document.getElementById('terminal');
  terminal.textContent += final + '\n';
}

function escribirSinSaltar(...origen) {
  let final = "";
  origen.forEach(x => {
    final += x;
  });
  let terminal = document.getElementById("terminal");
  terminal.textContent += final;
}

function traducirLeer(origen) {
  let inicio = '';
  let final = '';

  inicio = origen.replace(/leer/gi, '');
  inicio = inicio.concat(' = ')

  final = origen.replace(/leer/gi, 'leer("');
  final = final.concat('");'); 
  final= final.trim();

  return inicio+final; 
}

function traducirArreglo(origen) {
  let inicio = '';
  let final = '';
  
  inicio = origen.replace(/dimension/gi, '');
  let variable = inicio.replace(/\[.*/g, "");
  let size = inicio.replace(variable, '')
  size = size.replace(/\[/g, "");
  size = size.replace(/\]/g, "");

  final = `${variable} = [] \n ${variable}.length = ${size}`;

  return final
}

function Subcadena(string, start, end) {
    start = parseInt(start);
    end = parseInt(end);
    return string.slice(start, (end+1));
}

function Longitud(string){
  return string.length;
}

function Concatenar(string1, string2){
  return string1+string2;
}

function ConvertirANumero(string){
    return parseInt(string);
}

function ConvertirATexto(number){
  return number.toString();
}

function Mayusculas(string){
  return string.toUpperCase();
}

function Minusculas(string) {
  return string.toLowerCase();
}

function abs(number) {
  return Math.abs(number);
}

function redon(number) {
  return Math.round(number);
}

function trunc(number) {
  return Math.trunc(number);
}

function raiz(number) {
  return Math.sqrt(number);
}

function sen(number) {
  return Math.sin(number);
}

function cos(number) {
  return Math.cos(number);
}

function tan(number) {
  return Math.tan(number);
}

function asen(number) {
  return Math.asin(number);
}

function acos(number) {
  return Math.acos(number);
}

function atan(number) {
  return Math.atan(number);
}

function ln(number) {
  return Math.log(number);
}

function exp(number){
  return Math.exp(number);
}

function azar(number){
  return Math.floor(Math.random() * (number))
}

function Aleatorio(num1, num2){
  return Math.floor(Math.random() * num2)+num1;  
}

function leer(origen) {
  let nombre = origen;
  let final = prompt(`Ingrese ${nombre}`);
  if (!Number.isNaN(parseFloat(final))) {
    return final = parseFloat(final);
  }else if(/true/gi.test(final) || /verdadero/gi.test(final)){
    final = 'VERDADERO';
  }else if(/false/gi.test(final) || /falso/gi.test(final)){
    final = 'FALSO';
  };
  return final;
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

function vaciarTerminal() {
  let terminal = document.getElementById('terminal');
  terminal.textContent = '';
}

function vaciarScript(){
  document.getElementById('traduccion').parentNode.removeChild(document.getElementById('traduccion'));
}

function traducirPara(origen){

  let sentencia = origen.trim();
  
  let centinela = sentencia.slice(sentencia.search(/para/gi)+4, sentencia.search('=')).trim();
  let valorInicial = sentencia.slice(sentencia.search('=')+1, sentencia.search(/hasta/gi)).trim();
  let valorFinal = sentencia.slice(sentencia.search(/hasta/gi)+5, sentencia.search(/con/gi)).trim(); 
  let incremento = sentencia.slice(sentencia.search(/paso/gi)+4, sentencia.search(/hacer/gi)).trim(); 
  let comparacion = '<';
  
  if (valorInicial > valorFinal) {
      comparacion = '>';
  }

  return `for(${centinela}=${valorInicial}; ${centinela}${comparacion}${valorFinal}; ${centinela} += ${incremento}) {`;
  
  }

  function test() {
    let salida = document.getElementById('salidaEsperada').value;
    let terminal = document.getElementById('terminal').value;
    let tests = document.getElementById('tests');

    if (salida === terminal) {
      tests.textContent = '✔ Test Correcto';
    } else {
      tests.textContent = '❌ Test Incorrecto';      
    }
  }
  
  