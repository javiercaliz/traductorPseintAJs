
//VARIABLES
var boton = document.getElementById('botonResolver');
var textoPseint = document.getElementById('textoPseint');
var codigoJavascript = document.getElementById('codigoJavascript');
var consigna = document.getElementById('consigna');
var salidaEsperada = document.getElementById('salidaEsperada');
var botonEjercicio1 = document.getElementById('ejercicio1');
var botonEjercicio2 = document.getElementById('ejercicio2');
var botonEjercicio3 = document.getElementById('ejercicio3');


//FUNCIONES
function inicio() {
  vaciarConsola();
  vaciarCodigoJavascript();
  vaciarTerminal(); 
  primeraTraduccion();
  segundaTraduccion();
  scriptToHtml();
  resolver();
  vaciarScript();
  test();  
}

function activarConsigna(opcion) {
    consigna.textContent = ejercicios[opcion].consigna;
    salidaEsperada.textContent = ejercicios[opcion].salidaEsperada;
}

function primeraTraduccion(){

    let string = textoPseint.value; 
    
    string = string.replace(/Fin\s?Para/gi, '};');
    string = string.replace(/Fin\s?Si/gi, '};');
    string = string.replace(/Fin\s?Segun/gi, '};');
    string = string.replace(/Fin\s?Subproceso/gi, '};');
    string = string.replace(/<-/gi, '=');

    let codigo = string.split("\n");



    for (let i = 0; i < codigo.length; i++) {
        let sentencia = codigo[i]
        
        if (/Algoritmo/g.test(sentencia)) {
            continue;
        }else
        if (/Dimension/g.test(sentencia)) {
            codigoJavascript.value += `${traducirArreglo(sentencia)}\n`;
        }else
        if (/Definir/gi.test(sentencia)) {
            codigoJavascript.value += `${traducirVariables(sentencia)}\n`;
        }else 
        if (/Escribir/gi.test(sentencia)) {
            codigoJavascript.value += `${traducirEscribir(sentencia)}\n`;
        }else
        if(/Leer/gi.test(sentencia)){
            codigoJavascript.value += `${traducirLeer(sentencia)}\n`;
        }else{
            codigoJavascript.value += `${sentencia}\n`;
        }
    }
}

function segundaTraduccion(){
    let string = codigoJavascript.value
    let codigo = string.split("\n");
    var retorno = '';


    for (let i = 0; i < codigo.length; i++) {

        
    if (/(\/\/)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])==false) {
            
        codigo[i] = codigo[i].trim();

        if (/(PI)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/pi/gi, 'Math.PI')}`};
        if (/(Euler)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/Euler/gi, 'Math.E')}`};
        if (/(Verdadero)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/Verdadero/gi, 'true')}`};
        if (/(Falso)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/Falso/gi, 'false')}`};
        if (/(Y)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/\sY\s/gi, ' && ')}`};
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
        if (/(<>)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/<>/gi, '!=')}`};
        if (/(si\s)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/si/gi, 'if (')}`;
            codigo[i] = codigo[i].concat(') {')};
            codigo[i] = `${codigo[i].replace(/=^=/gi, '==')}`;
        if (/(sino)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/sino/gi, '}else{')}`;};
        if (/(entonces)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/entonces/gi, '')}`};
        if (/(if\s\(No\))(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/if\s\(No\)/gi, '}else')}`;};
        if (/(fin\ssi)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = '};';};
        if (/(finif)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = '};';};
        if (/(fin\sif)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = '};';};
        if (/(segun)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/segun/gi, 'switch (')}`;
            codigo[i] = `${codigo[i].replace(/hacer/gi, ') {')}`;};
        if (/(\".\s?\":)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = codigo[i].trim();
            codigo[i] =`\t case ${codigo[i].slice(0, -1)}:`;
            codigo[i+1] =`${codigo[i+1]}\n\t\tbreak;`;};
        if (/(De\sOtro\s%o)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/De\sOtro\s%o/gi, 'default')}`;};
        if (/(Fin\sswitch\s\()(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/Fin\sswitch\s\(/gi, '};')}`;};
        if (/(para\s)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = traducirPara(codigo[i]);
        }; 
        if (/(mientras\s)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/mientras/gi, 'while (')}`;
            codigo[i] = `${codigo[i].replace(/=^=/gi, '==')}`;
            codigo[i] = `${codigo[i].replace(/hacer/gi, ') {')}`;
        };
        if (/(Fin\smientras)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/Fin\smientras/gi, '};')}`;
        };
        if (/(Repetir)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/repetir/gi, 'do {')}`;
        };
        if (/(while\s\(\sQue)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/while\s\(\sQue/gi, '} while (')}`;
            codigo[i] = `${codigo[i].replace(/=^=/gi, '==')}`;
            codigo[i] = codigo[i].concat(')');
        };
        if (/(SubProceso)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/SubProceso/gi, 'function')}`;
            codigo[i] = codigo[i].concat('{');
        };
        if (/(Fin\sfunction{)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/Fin\sfunction{/gi, '}')}`;
        };
        
        if (/(Funcion)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i]) ) {
            codigo[i] = `${codigo[i].replace(/Funcion/gi, 'function')}`;
            codigo[i] = codigo[i].concat('{');
            let array = codigo[i].split(' ');
            if (array[1]!='function{') {
                retorno = array[1];
            }
            array.splice(1, 2);
            codigo[i] = array.join(' ');
        };
        
       if (/Fin(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = ` return ${retorno}\n};`;
        }; 
       if (/(Por\sReferencia)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/Por\sReferencia/gi, '')}`;
        }; 
       if (/(Por\sValor)(?=(?:[^"]|"[^"]*")*$)/gi.test(codigo[i])) {
            codigo[i] = `${codigo[i].replace(/Por\sValor/gi, '')}`;
        }; 
        
        if (/\[.*\]/.test(codigo[i])) { 
        let intermedio = codigo[i].match(/\[.*\]/);
        if (intermedio[0].includes(',')) {
            codigo[i] = codigo[i].substring(0, intermedio.index+2) + '][' + codigo[i].substring(intermedio.index+2+1);
        }
            }; 
    };
    }

    codigoJavascript.value = codigo.join('\n')
}


//LISTENERS
boton.addEventListener('click', ()=>{inicio()})
botonEjercicio1.addEventListener('click', ()=>{activarConsigna(1)});
botonEjercicio2.addEventListener('click', ()=>{activarConsigna(2)});
botonEjercicio3.addEventListener('click', ()=>{activarConsigna(3)});


//OBJECTS

const ejercicios = {
1:{'consigna':`Conocido el n??mero en matem??tica PI ?? y tomado como radio de circunferencia 25cm: calcular y mostrar por pantalla el ??rea y per??metro. Recuerde que para calcular el ??rea y el per??metro se utilizan las siguientes f??rmulas:
area = PI * radio^2
perimetro = 2 * PI *radio`,
'salidaEsperada':
`area = 1963.4954084936207 cm
per??metro = 157.07963267948966 cm\n`},
2:{'consigna':`Escribir un programa que calcule el precio promedio de un producto. El precio promedio se debe calcular a partir del precio del mismo producto en tres establecimientos distintos. Establecimiento 1: 100, Establecimiento 2: 200, Establecimiento 3: 180`,
'salidaEsperada': 'El precio promedio es $160\n'},
3:{'consigna':`A partir de una conocida cantidad de 23 metros se debe obtener su equivalente en cent??metros, en mil??metros y en pulgadas. 
Ayuda: 1 pulgada equivale a 2.54 cent??metros.`,
'salidaEsperada': 
`metros = 23
cent??metros = 2300
mil??metros = 23000
pulgadas = 905.511811023622\n`}
}



