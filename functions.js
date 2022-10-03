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

function traducirEscribir(origen) {
  let final = "";
  if (/,(?=(?:[^"]|"[^"]*")*$)/gi.test(origen)) {
    origen = `${origen.replace(/,/gi, '+')}`};
  if (origen.toLowerCase().includes('sin saltar')) {
    origen = origen.replace(/sin\ssaltar/gi, "").trim();
    final = origen.trim().replace(/escribir/gi, "escribirSinSaltar(");
  } else {
    final = origen.trim().replace(/escribir/gi, "escribir(");
  }
  final = final.concat(");");
  return final;
}

function escribir(origen) {
  let terminal = document.getElementById('terminal');
  terminal.textContent += origen + '\n';
}

function escribirSinSaltar(origen) {
  let terminal = document.getElementById("terminal");
  terminal.textContent += origen;
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