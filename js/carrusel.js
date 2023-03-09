export function rotar(){
  if(indice<fotos.length){
    foto__carrusel.src=fotos[indice]
    indice++
  }else{
    indice=0
  }
}
const fotos=[
    '../images/carrusel/foto1.jpg',
    '../images/carrusel/foto2.jpg'
]
let indice=0

