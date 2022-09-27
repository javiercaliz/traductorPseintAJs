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

  return `${final} = prompt()`;
}

function traducirSubcadena(origen) {
  let string;
  let array;
  let start;
  let end;

  array = origen.slice(10,-1).split(',')

  string = array[0];
  start = array[1];
  end = array[2];

  return `${string}.slice(${start}, ${end})`
}