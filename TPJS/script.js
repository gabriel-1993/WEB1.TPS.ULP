//Prácticos de JS:

// 1) Realiza un programa de nombre Ejercicio1.html, que funcione de la siguiente forma:

// a) El programa nos pregunta nuestro nombre.
// b) El programa nos pregunta nuestra edad.
// c) El programa da como resultado nuestro nombre y a continuación los días que
// hemos vivido hasta el momento.

//btn para ejecutar la consigna1
const btn1 = document.querySelector(".btn1");
const p1 = document.querySelector(".p1");


function Ejercicio1html() {
    let nombre = prompt("Diga su nombre");
    let edad = prompt("Di tu edad");

    if (nombre !== "" && edad !== "") {

        let fechaActual = new Date();

        //Guarda el año de nacimiento , restandole edad al año de fecha actual
        let fechaNacimiento = new Date();
        fechaNacimiento.setFullYear(fechaNacimiento.getFullYear() - edad);

        // Calcula la diferencia en milisegundos entre las dos fechas
        let diferenciaEnMilisegundos = fechaActual - fechaNacimiento;
        // Convierte la diferencia en dias, dividiendo por la cantidad de milisegundos en un dia.
        // Math.floor redondea numero decimal al mas cercano hacia abajo
        //(1000*60*60*24)= 86400000 . la cantidad de milisegundos por dia.
        let diasVividos = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));

        p1.innerHTML = "Hola " + nombre + " ! , días vividos desde " + fechaNacimiento.getFullYear() + " hasta Hoy : " + diasVividos + " dias.";
        p1.style.color = "yellow";
        p1.style.display = "flex";
    } else {
        p1.innerHTML = "❌Error : datos mal ingresados !❌";
        p1.style.color = "yellow";
        p1.style.display = "block";
        return;
    }
}
btn1.addEventListener('click', Ejercicio1html);

//**************************************************************************************************************************** */
//**************************************************************************************************************************** */


//2) Haz un programa que dibuje un rectángulo de asteriscos a partir de una base y altura especificada por el usuario.
const btn2 = document.querySelector(".btn2");
const p2 = document.querySelector(".p2");

function ejercicio2() {
    let altura = prompt("Ingrese la altura del rectangulo");
    let base = prompt("Ingrese la base del rectangulo");

    // parsear a enteros
    altura = parseInt(altura);
    base = parseInt(base);

    // valida que no esten los numeros vacios o sean igual o menor que 0
    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        p2.innerHTML = "❌Error : datos mal ingresados !❌";
        p2.style.color = "yellow";
        p2.style.display = "flex";
        return;
    } else {
        // for anidados para imprimir el rectangulo
        let rectangulo = "";
        for (var i = 0; i < altura; i++) {
            for (var j = 0; j < base; j++) {
                rectangulo += "* ";
            }
            rectangulo += "<br>";
        }
        p2.innerHTML = rectangulo;
        p2.style.color = "yellow";
        p2.style.display = "block";
    }
}

btn2.addEventListener('click', ejercicio2);

//**************************************************************************************************************************** */
//**************************************************************************************************************************** */

// 3) Analice y repare el código para que se impriman todos los valores excepto los números.
// var lista = new Array ('a','b','c','1','x','9',’d’,’4);
// var item ;
// for (item in lista)
// {
// if (lista[item] == "1" or “9”)
// break;
// console.log(lista[item]);
// }

const btn3 = document.querySelector(".btn3");
const p3 = document.querySelector(".p3");

function ejercicio3() {
    var item;
    var lista = ['a', 'b', 'c', '1', 'x', '9', 'd', '4'];
    for (var item of lista) {
        if (isNaN(item)) {
            p3.innerHTML += "'" + item + "'.";
            p3.style.display = "block";
            p3.style.color = "yellow";
        }
    }

}

btn3.addEventListener('click', ejercicio3);

// *******************************************************************************************************************************

// Consigna 4 
// Haz un programa que escriba 50 números aleatorios enteros entre 1 y 6. Usar el método
//     random de la clase Math.
//     ( Para mayor información visita https://www.w3schools.com/js/js_math.asp )

const btn4 = document.querySelector(".btn4");
const p4 = document.querySelector(".p4");

function ejercicio4() {
    //por si ya lo ejecutaron que se borren todos los anteriores.
    p4.innerHTML = "";

    let numAleatorio;
    for (let i = 0; i < 50; i++) {
        numAleatorio = Math.floor(Math.random() * 6) + 1;
        console.log(numAleatorio);
        p4.innerHTML += `'${numAleatorio}' .`;
        p4.style.color = "yellow";
        p4.style.display = "block";
    }
}
btn4.addEventListener('click', ejercicio4);


//  *****************************************************************************************************************************


/* Consigna 5
El programa “elige” un número al azar entre uno y un millón(lo cambio a diez) y pregunta por el mismo. El
visitante intenta acertar en una ventana emergente. Tras cada respuesta, una nueva
ventana dice “el número es Mayor” o “el número es Menor” y se pide un nuevo número,
hasta que el usuario lo acierta. En ese momento una ventana lo felicita y muestra el número
de intentos que ha realizado hasta el acierto */

let btn5 = document.querySelector(".btn5");
let p5 = document.querySelector(".p5");

function ejercicio5() {
    p5.innerHTML = "";
    numAleatorio = Math.floor(Math.random() * 10) + 1;
    console.log(numAleatorio);
    let respuesta;
    let contador = 0;
    let msj = "";
    respuesta = prompt("Vamos a adivinar un numero!, ingrese un numero entre 0 y 10 ");
    // Agregamos una comprobación para manejar el caso en que el usuario cancele el prompt.
    while (respuesta !== null) {
        respuesta = parseInt(respuesta);
        contador++;
        if (respuesta === numAleatorio) {
            p5.innerHTML = "🎇🎆🥳 ¡ADIVINASTE! 😅😅. Intentos: " + contador;
            p5.style.display = "block";
            p5.style.color = "yellow";
            // Salimos del bucle 
            break;
        } else if (respuesta > numAleatorio) {
            msj = "Ingrese un número más chico...";
        } else if (respuesta < numAleatorio) {
            msj = "Ingrese un número más grande...";
        }
        respuesta = prompt(msj); // Mostramos el mensaje actualizado.
    }
}

btn5.addEventListener('click', ejercicio5);


// ************************************************************************************

// 6) Leer una cadena de texto desde un prompt y generar un array con la función split().
// Posteriormente, mostrar la siguiente información: Número de palabras, primera palabra,
// última palabra, las palabras colocadas en orden inverso, las palabras ordenadas de la “a”
// hasta la “z” y las palabras ordenadas de la “z” hasta la ”a”.
const p6 = document.querySelector(".p6");
const btn6 = document.querySelector(".btn6")

function ejercicio6() {
    let resp = prompt("Ingrese una frase");
    let palabras = resp.split(" ");
    let num = palabras.length;
    // Ordenar palabras alfabéticamente de A a Z
    //slice puede copiar el array con un indice de principio y otro de final, o en este caso sin indices entre parentesis lo copia completo
    //sort ordena los elementos como cadenas caracteres(A-Z.0-9)
    const palabrasOrdenadasAZ = palabras.slice().sort();
    // Ordenar palabras alfabéticamente de Z a A
    //localeCompare se utiliza para comparar dos cadenas de caracteres de acuerdo con las reglas de ordenamiento 
    //locales del sistema. Devuelve un número negativo si la primera cadena es menor, un número positivo si la primera
    // cadena es mayor y 0 si son iguales en orden de clasificación. Es útil para ordenar cadenas alfabéticamente 
    //teniendo en cuenta las reglas de ordenamiento locales.
    const palabrasOrdenadasZA = palabras.slice().sort((a, b) => b.localeCompare(a));
    palabras = palabras.reverse();
    const p1 = palabras[palabras.length - 1];
    const pF = palabras[0];
    p6.style.display = "block";
    p6.style.color = "yellow";
    //Array con las palabras ingresadas
    p6.innerHTML = "Cantidad de palabras ingresadas : " + num + "<br>" +
        // indices invertidos en el array invertido
        " Primer palabra ingresada : " + p1 + "<br>" +
        " Ultima palabra ingresada : " + pF + "<br>" +
        "Orden inverso : " + palabras.join(" ") + "<br>" +
        "Palabras ordenadas de la A a la Z: " + palabrasOrdenadasAZ.join(" ") + "<br>" +
        "Palabras ordenadas de la Z a la A: " + palabrasOrdenadasZA.join(" ");
}
btn6.addEventListener('click', ejercicio6);

// ****************************************************************************************************************

// 7) Cree un archivo html que muestre una frase al azar cada vez que se cargue. Las frases
// deberán estar en otro archivo independiente, del tipo .js.
const p7 = document.querySelector(".p7");
const btn7 = document.querySelector(".btn7");

function ejercicio7() {
    let frases = ["Mereces lo que sueñas. -Gustavo Cerati", "Vive de instante en instante porque eso es la vida. -Facundo Cabral ", "Si estás atento al presente, el pasado no te distraerá, entonces serás siempre nuevo. -Facundo Cabral", "Y...con el diario del lunes...", "Cada dia trae su propio afan", "Consejos vendo y para mi no tengo", "Del dicho al hecho,hay un largo trecho"];
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    p7.style.display = "block";
    p7.style.color = "yellow";
    //ingreso la frase al Html con el indice aleatorio
    p7.innerHTML = frases[indiceAleatorio];
}
btn7.addEventListener('click', ejercicio7);

// ***************************************************************************************************************

// 8) Realice una página que permita al usuario cargar en un array una cantidad variable de
// números. Una vez finalizada la carga la página debe mostrar un resumen estadístico
// compuesto de los siguientes parámetros: Promedio, Mediana, Mínimo, Máximo y desviación
// estándar.

const btn8 = document.querySelector(".btn8");
const p8 = document.querySelector(".p8");

function ejercicio8() {
    let miArray = [];
    let num, suma = 0, promedio, min = Infinity, max = -Infinity;
    //ingresa los numeros y calcula promedio,min y max
    for (let i = 0; i < 4; i++) {
        num = prompt("Ingrese un numero entero");
        num = parseInt(num);
        suma += num;
        console.log("suma al instante" + suma);
        miArray.push(num);
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
    }
    console.log("prom fin for promedio" + promedio);
    promedio = suma / 4;

    //calcula mediana
    let mediana;
    miArray.sort((a, b) => a - b);
    const mitad = Math.floor(miArray.length / 2);
    if (miArray.length % 2 === 0) {
        // Si la longitud del array es par, toma el promedio de los dos valores del medio
        const valor1 = miArray[mitad - 1];
        const valor2 = miArray[mitad];
        mediana = (valor1 + valor2) / 2;
    } else {
        // Si la longitud del array es impar, toma el valor del medio
        mediana = miArray[mitad];
    }
    p8.style.display = "block";
    p8.style.color = "yellow";
    p8.innerHTML = "Promedio del grupo ingresado : " + promedio + "<br>" +
        " Mediana del grupo ingresado : " + mediana + "<br>" +
        " Minimo del grupo ingresado : " + min + "<br>" +
        "Maximo del grupo ingresado : " + max + "<br>";
}
btn8.addEventListener('click', ejercicio8);

// *************************************************************************************************************

// 9) Realice una página que permita cargar los datos de una persona en un array. Luego la
// página deberá mostrar en una tabla html con las cabeceras adecuadas los datos solicitados.

const btn9 = document.querySelector(".btn9");
const p9 = document.querySelector(".p9");
function ejercicio9() {
    let resp;
    let persona = [];
    resp = prompt(" Ingrese su Nombre ");
    persona.push(resp);
    resp = prompt("Ingrese su Apellido");
    persona.push(resp);
    resp = prompt("Ingrese su telefono");
    persona.push(resp);
    resp = prompt("Ingrese su direccion");
    persona.push(resp);
    resp = prompt("Ingrese fecha de nacimiento: 00-00-0000");
    persona.push(resp);

    p9.innerHTML = "<table border='1'>" +
        "<tr>" +
        "<th>Nombre</th>" +
        "<th>Apellido</th>" +
        "<th>Teléfono</th>" +
        "<th>Dirección</th>" +
        "<th>Fecha de Nacimiento</th>" +
        "</tr>" +
        "<tr>" +
        "<td id='nombre'>" + persona[0] + "</td>" +
        "<td id='apellido'>" + persona[1] + "</td>" +
        "<td id='telefono'>" + persona[2] + "</td>" +
        "<td id='direccion'>" + persona[3] + "</td>" +
        "<td id='fechaNacimiento'>" + persona[4] + "</td>" +
        "</tr>" +
        "</table>";

    p9.style.display = "block";
    p9.style.color = "yellow";
}
btn9.addEventListener('click', ejercicio9);

// ***********************************************************************************************************

// 10) Realice una página que permita cargar una fecha en el formato DD-MM-YYYY y diga
// cuántos días faltan o ya pasaron respecto del día de hoy.

const btn10 = document.querySelector(".btn10");
const p10 = document.querySelector(".p10");
function ejercicio10() {
    //fecha ingresada 
    const fechaString = prompt("Ingrese una fecha dividida por guiones: dia-mes-año 00-00-0000");
    //guarda la fecha string,  separada(-) en un array
    let fechaArray = fechaString.split("-");
    //creo un tipo de dato fecha y le asigno los valores desde el array
    let fechaDate = new Date();
    fechaDate.setFullYear(fechaArray[2]);
    fechaDate.setMonth(fechaArray[1] - 1);
    fechaDate.setDate(fechaArray[0]);

    let resultado = "";
    const fechaHoy = new Date();
    if (fechaDate > fechaHoy) {
        // Calcula la diferencia en milisegundos entre las fechas
        const diferenciaMilisegundos = fechaDate - fechaHoy;
        // Convierte la diferencia a días
        resultado = "Faltan " + Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24)) + " días.";
        p10.innerHTML = resultado;
    }
    if (fechaDate < fechaHoy) {
        // Calcula la diferencia en milisegundos entre las fechas
        const diferenciaMilisegundos = fechaHoy - fechaDate;
        // Convierte la diferencia a días
        resultado = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
        p10.innerHTML = "Pasaron " + resultado + " dias.";
    } else {
        resultado = " Ingreso el dia actual. ES HOY !!!!";
        p10.innerHTML = resultado;
    }

    p10.style.color = "yellow";
    p10.style.display = "block";
}

btn10.addEventListener('click', ejercicio10);

// ****************************************************************************************************************

// 11) Realice una página que permita cargar una fecha cargando el día, mes y año por
// separado, verifique si es válida e informe la fecha si lo es o diga que es inválida.
const btn11 = document.querySelector(".btn11");
const p11 = document.querySelector(".p11");

function ejercicio11() {
    let dia = prompt("Ingrese el dia 01 hasta 31");
    let mes = prompt("Ingrese el mes 01 hasta 12");
    let anio = prompt("Ingrese el año ej: 2023");

    //parsea strings a enteros
    dia = parseInt(dia);
    mes = parseInt(mes);
    anio = parseInt(anio);

    //validar los datos 
    if (dia > 0 && dia < 32 && mes > 0 && mes < 13 && !isNaN(dia) && !isNaN(mes) && !isNaN(anio)) {
        let fechaDate2 = new Date();
        fechaDate2.setDate(dia);
        fechaDate2.setMonth(mes - 1);
        fechaDate2.setFullYear(anio);
        p11.innerHTML = "Fecha ingresada: " + fechaDate2;
    } else {
        p11.innerHTML = " Datos ingresados , no validos.";
    }
    p11.style.display = "block";
    p11.style.color = "yellow";
}
btn11.addEventListener('click', ejercicio11);

/* ******************************************************************************************
PARTE B

1) Realiza una página que muestre un formulario y verifique la entrada de un número que
esté comprendido entre 1 y 100. */

const btn1b = document.querySelector(".btn1b");
const p1b = document.querySelector(".p1b");

function ejercicio1b() {

    p1b.innerHTML = '<form class="miForm">' +
        '<label style=color:yellow;margin-right:10px; for="numIngresado">Ingrese un número del 1 al 100</label>' +
        '<input style=" background-color: rgb(19, 18, 18); padding: 10px; color: yellow;margin-right: 10px;" type="text" id="numIngresado" name="numIngresado">' +
        '<input style="background-color: rgb(19, 18, 18); padding: 10px; color: yellow;" type="submit" value="Verificar">' +
        '</form>';
    p1b.style.display = "block";
    p1b.style.color = "yellow";

    //Capturamos el formulario en JS 
    const miFormulario = document.querySelector(".miForm");
    //Previene que se actualize la pagina y se pierda el dato
    miFormulario.addEventListener("submit", function (event) {
        event.preventDefault();

        // parsear el numero a entero
        const numIngresado = parseInt(document.getElementById("numIngresado").value);

        // Verificar si el número esta entre 1-100 y si es un dato valido(algo distinto a un num)
        if (!isNaN(numIngresado) && numIngresado >= 1 && numIngresado <= 100) {
            p1b.innerHTML = "";
            p1b.innerHTML = " El numero " + numIngresado + " esta dentro del rango(1-100)";
        }
        if (isNaN(numIngresado)) {
            p1b.innerHTML = "";
            p1b.innerHTML = "Error en tipo de dato: debe ingresar un numero";
        }
        else {
            p1b.innerHTML = "";
            p1b.innerHTML = "Error: El numero " + numIngresado + " NO esta dentro del rango(1-100)";
        }
    });
}

btn1b.addEventListener('click', ejercicio1b);

// ********************************************************************************************

const btn2b = document.querySelector(".btn2b");
const p2b = document.querySelector(".p2b");

function ejercicio2b() {
    p2b.innerHTML = '<h3>Ingresar Datos</h3>' +

        // Nombre y Apellido tipe text
        '<form class="miForm" style="display: flex; justify-content: space-between; flex-direction: column;gap:10px ;">' +
        '<label style="color: yellow; margin-right: 10px;" for="nombre">Nombre:</label>' +
        '<input style="background-color: rgb(19, 18, 18); padding: 10px; color: yellow; margin-right: 10px;" type="text" id="nombre" name="nombre">' +
        '<label style="color: yellow; margin-right: 10px;" for="apellido">Apellido:</label>' +
        '<input style="background-color: rgb(19, 18, 18); padding: 10px; color: yellow; margin-right: 10px;" type="text" id="apellido" name="apellido">' +

        // Genero radio-btn dentro de un div para evitar direction column  
        '<div style="padding:0; width:100%;border:none;box-shadow: none;display: flex; flex-direction: row;gap :8px;">' +
        '<label style="color: yellow; margin-right: 10px;">Género:</label>' +
        '<label for="masculino">Masculino</label>' +
        '<input type="radio" id="masculino" name="genero" value="masculino">' +
        '<label for="femenino">Femenino</label>' +
        '<input type="radio" id="femenino" name="genero" value="femenino">' +
        '<label for="otro">Otro</label>' +
        '<input type="radio" id="otro" name="genero" value="otro">' +
        '</div>' +

        //Fecha de nacimiento dentro de un div para evitar direction column 
        '<div style="padding:0;width:100%;border:none;box-shadow: none;display: flex; flex-direction: row;gap :14px;">' +
        '<label for="fechaNacimiento" style="color: yellow; margin-right: 10px";>Fecha de Nacimiento:</label>' +
        '<input style="color:black; background-color:yellow; "type="date" id="fechaNacimiento" name="fechaNacimiento"></div>' +

        //Email 
        '<label for="correoElectronico"style="color: yellow; margin-right: 10px";>Correo Electrónico:</label>'+
        '<input style="background-color: rgb(19, 18, 18); padding: 10px; color: yellow; margin-right: 10px;"type="email" id="correoElectronico" name="correoElectronico"></input>'+
        '<input style="background-color: rgb(19, 18, 18); padding: 10px; color: yellow;" type="submit" value="Verificar">' +
        '</form>';
    p2b.style.display = "block";
    p2b.style.color = "yellow";

    //Capturamos el formulario en JS 
    const miFormulario = document.querySelector(".miForm");
    //Previene que se actualize la pagina y se pierda el dato
    miFormulario.addEventListener("submit", function (event) {
        event.preventDefault();

        // parsear el numero a entero
        const numIngresado = parseInt(document.getElementById("numIngresado").value);

        // Verificar si el número esta entre 1-100 y si es un dato valido(algo distinto a un num)
        if (!isNaN(numIngresado) && numIngresado >= 1 && numIngresado <= 100) {
            p1b.innerHTML = "";
            p1b.innerHTML = " El numero " + numIngresado + " esta dentro del rango(1-100)";
        }
        if (isNaN(numIngresado)) {
            p1b.innerHTML = "";
            p1b.innerHTML = "Error en tipo de dato: debe ingresar un numero";
        }
        else {
            p1b.innerHTML = "";
            p1b.innerHTML = "Error: El numero " + numIngresado + " NO esta dentro del rango(1-100)";
        }
    });



}
btn2b.addEventListener('click', ejercicio2b);
