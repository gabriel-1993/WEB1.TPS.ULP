const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

//CLICK en Punto    
    //CAPTURAR posicion de ese punto
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
            //si...posicion es 0 transform es 0
            //si...posicion es 1 transform es -50%
            //operacion =posicion * -50
            let operacion = posicion * -10
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