const heading = document.querySelector(".header__texto h2")
heading.textContent = "Nuevo Heading"

const enlaces = document.querySelectorAll(".navegacion a")
 enlaces[0].textContent = " Nuevo texto enlace"

// Create Element

const nuevoEnlace = document.createElement("A")


// agregar href
nuevoEnlace.href = "nuevo-enlace.html";

//agregar texto
nuevoEnlace.textContent ="Prueba";

//agregar clase
nuevoEnlace.classList.add ("navegacion__enlace")

//agregarlo al documento
const navegacion = document.querySelector(".navegacion")
navegacion.appendChild(nuevoEnlace)

console.log(nuevoEnlace)


//Eventos

console.log(1)

window.addEventListener("load",function(){

    console.log(2)
})
 // o puede ser 
 function imprimir(){
     console.log(7)
 }

 window.addEventListener("load",imprimir)//load espera que el html y los archivos que dependan de el estén descargados

window.onload = function(){

    console.log(3)
}


document.addEventListener("DOMContentLoaded",function(){//solo espera se descargue el html, no le importa si descargó css y imágenes

console.log(4)


});




console.log(5)


// otras funciones de window

window.onscroll function() {

}


//