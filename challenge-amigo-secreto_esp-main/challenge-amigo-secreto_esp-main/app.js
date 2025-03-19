// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeNombres = []



function sortearAmigo(lista) {
  numeroMaximo =  lista.length -1
  numeroAleatorio = parseInt(Math.random()*numeroMaximo)+1
  amigoSorteado = lista[numeroAleatorio]
  asignarTexto("#resultado", `el amigo sorteado es ${amigoSorteado}`)
  listaDeNombres = []
  
    
}

function asignarTexto(elemento, texto) {
    elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto 
    return
    
}


function limpiarCuadro() {
    document.querySelector("#amigo").value =""
    
    
}

function agregarAmigo(lista) {
    

   let nombreAgregado = document.getElementById("amigo").value 

    if(nombreAgregado === ""){
        alert("agrega un valor valido")

    }else{
     lista.push(nombreAgregado)
     nombreAgregado = asignarTexto("#listaAmigos", nombreAgregado)
     console.log(listaDeNombres)
     limpiarCuadro()
     return  }
  
    
}



