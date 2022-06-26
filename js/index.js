/* Modulo de datos */


const udesaMaterias = {
    pro1 : {
        nombre: "Programación 1",
        descripcion :  "En esta materia veraz pregunta <br>de HTML, CSS y JavaScript",
        modulos : [
            {
                id: "0",
                tema : "Javascript",
                img  : "/img/modulos/js-logo.png",
                dificultad : "Alta",
                preguntas : [
                    {
                        pregunta : "Mi pregunta0",
                        respuesta  : "Mi respuesta0",
        
                    },
                    {
                        pregunta : "Mi pregunta1",
                        respuesta  : "Mi respuesta1",
        
                    },
                    {
                        pregunta : "Mi pregunta2",
                        respuesta  : "Mi respuesta2",
        
                    },
                    {
                        pregunta : "Mi pregunta3",
                        respuesta  : "Mi respuesta3",
        
                    }
                ]
            },
            {
                id: "1",
                tema : "CSS",
                img  : "/img/modulos/css-logo.png",
                dificultad : "Media",
                preguntas : [
                    {
                        pregunta : "Mi pregunta0",
                        respuesta  : "Mi respuesta0",
        
                    },
                    {
                        pregunta : "Mi pregunta1",
                        respuesta  : "Mi respuesta1",
        
                    },
                    {
                        pregunta : "Mi pregunta2",
                        respuesta  : "Mi respuesta2",
        
                    },
                    {
                        pregunta : "Mi pregunta3",
                        respuesta  : "Mi respuesta3",
        
                    }
                ]
            },
            {
                id: "2",
                tema : "HTML",
                img  : "/img/modulos/html-logo.png",
                dificultad : "Baja",
                preguntas : [
                    {
                        pregunta : "Mi pregunta0",
                        respuesta  : "Mi respuesta0",
        
                    },
                    {
                        pregunta : "Mi pregunta1",
                        respuesta  : "Mi respuesta1",
        
                    },
                    {
                        pregunta : "Mi pregunta2",
                        respuesta  : "Mi respuesta2",
        
                    },
                    {
                        pregunta : "Mi pregunta3",
                        respuesta  : "Mi respuesta3",
        
                    }
                ]
            }
        ]
    }
};

// Generar un numero entre 0 y MAX, incluido el MAX 
let ramdom = '';
let _max = 2;
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

/* Funcion que busca el ramdom y lo inserta en el DOM */

function insertRandomInteger() {
    ramdom = generateRandomInteger(_max);
    document.querySelector('#ramdom').innerText = `${ramdom}`;
    document.querySelector('#ramdom').style.fontSize = "30px";
    return true;
}

/* Funcion que busca una pregunta y la inserta en el DOM */

function generarNuevaPregunta() {
    let preguntasModulo = udesaMaterias.pro1.modulos[ramdom];
    let cantidadPreguntasModulo = preguntasModulo.preguntas.length - 1;

    let valor =  generateRandomInteger(cantidadPreguntasModulo);

    let contenedorPreguntas = document.querySelector('#contenedorPreguntas');
    contenedorPreguntas.innerHTML = `<div class="news-link">
                                        <img class="poster" src="${preguntasModulo.img}" />
                                    
                                        <h3 class="news-log">${preguntasModulo.preguntas[valor].pregunta}</h3>
                                        <p class="description">
                                        </p>
                                        <a href="#" class="btn-view"><span class="ic-sx24"></span>Ver Respuesta</a>
                                        <span class="time-data">06/2022</span>
                                    </div>`;

    

    return valor;
}

function insertRandomAsk() {

    let nuevaPregunta = document.querySelector('.nuevaPregunta');
    let btnNuevaPregunta = document.querySelector('.new-news');
    nuevaPregunta.style.display = "flex";
    
    let valor = generarNuevaPregunta()

    let verRespuesta = document.querySelector('.btn-view');
    let respuestaCampo = document.querySelector('.description');

   
    verRespuesta.addEventListener('click', (e)=> {
        e.preventDefault();
        respuestaCampo.innerText = udesaMaterias.pro1.modulos[ramdom].preguntas[valor].respuesta;
    })

    btnNuevaPregunta.addEventListener('click', (e)=> {
        e.preventDefault();
        /* Eliminamos del array la pregunta numero VALOR */                              
        udesaMaterias.pro1.modulos[ramdom].preguntas.splice(valor, 1);
        insertRandomAsk()
    })

    

    return true;
}

/* Agregar evento click a empezar examen */



let btnEmpezar = document.querySelector('#empezar');

document.querySelector('.name-intro').innerText = udesaMaterias.pro1.nombre;
document.querySelector('.docopation-intro').innerHTML = udesaMaterias.pro1.descripcion;

btnEmpezar.addEventListener('click', (e)=> {
    e.preventDefault();
    insertRandomInteger()
    insertRandomAsk()
})

 listadoTemas();   

function listadoTemas() {
    let listado         = document.querySelector('#listadoTemas');
    let listadoContador = document.querySelector('.tdx-strom');
    let contenidoLista = '';

    let temas = udesaMaterias.pro1.modulos;

    temas.forEach(temas => {
        contenidoLista +=  `<article class="itemLista">
                                    <div class="temas_name">${temas.id} - ${temas.tema}</div>
                                    <div class="temas_dificultad">Dificultad : <span>${temas.dificultad}</span></div>
                            </article>`
    });

    listadoContador.innerText = `Total temas: ${temas.length}`
    

    listado.innerHTML += contenidoLista;


   
}












