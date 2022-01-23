const heading = document.querySelector(".header__texto h2")
heading.textContent = "Nuevo Heading"

const enlaces = document.querySelectorAll(".navegacion a")
 enlaces[0].textContent = " Nuevo texto enlace"



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