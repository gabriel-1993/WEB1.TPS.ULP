const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

//CARROUSEL -------------------------------------------------------------------------------------------   
    
//CAPTURAR posicion de punto
//APLICAR transform traslate al div grande
//QUITAR la clase activo a punto
//AÑADIR clase activo al punto seleccionado

    //Recorrer todos los puntos
    punto.forEach( (cadaPunto, i)=>{
        //Escuchador de event click a cada punto
        punto[i].addEventListener('click',()=>{
            //guardar la posicion de dicho punto
            let posicion = i
            //Calculo de espacio que debe desplazarse 
            let operacion = posicion * -11.2
            //Movemos el div .grande
            grande.style.transform = `translateX(${operacion}%)` 

            //Recorremos todos los puntos
            punto.forEach((cadaPunto, i)=>{
                //quitamos el activo
                punto[i].classList.remove('activo')
            })
            //asignamos activo al que recibio el click
            punto[i].classList.add('activo')
        })
    } )

    // VALIDAR FORMULARIO   -----------------------------------------------------------------------------

    