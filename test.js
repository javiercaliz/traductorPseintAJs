codigo = 'mensaje2 ="hola" + subcadena(mensaje, 1, 2)+ Subcadena(mensaje, 0, 1)'
let auxiliar = codigo;

if (/subcadena/gi.test(codigo)) {
    //let interior = auxiliar.match(/\(.*\)/).pop();
   let subcadena = auxiliar.match(/subcadena\(.*\)/gi).pop();


    console.log(subcadena);
    console.log(subcadena.match(/subcadena/gi));
    
/*     let string = array[0];
    let start = array[1];
    let end = parseInt(array[2])+1;
    let oldString = `Subcadena(${interior})`;
    let newString = `(${string}.slice(${start},${end}))`;
    let final = codigo.replace(oldString, newString);
    console.log(final); */
}