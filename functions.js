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
  let final;

  final = origen.slice(9);

  return `console.log(${final});`;
}

function traducirLeer(origen) {
  let final;

  final = origen.slice(5);

  return `${final} = prompt('${final}')`;
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