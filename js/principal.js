import {rotar} from './carrusel.js'
setInterval(rotar,2000)

let elementos=''
const productos=document.querySelector('.products')
const url="https://fakestoreapi.com/products"
async function traer(){
    const respuesta= await fetch(url)
    const datos=await respuesta.json()
    elementos=Array.from(datos)
    let cont=0
    datos.forEach(producto=>{ //la estructura de la tarjeta depende de como la haya diseñado cada uno en el html
        productos.innerHTML+=` 
        <div class="card__product"> 
                <div class="card__product__title">
                    <h3>${producto.title}</h3>
                </div>
                <div class="card__product__image">
                    <img src="${producto.image}" alt="">
                </div>
                <div class="card__product__description">
                    <p>${producto.description}</p>
                </div>
                <div class="card__product__price">
                    $${producto.price}
                </div>
                <div class="card__product__button">
                    <button class="btn btn-buy" value=${cont}>COMPRAR</button>
                </div>
            </div>
        `
        cont++
    })

}
traer()

// const comprarModal=document.querySelector('.products')
// comprarModal.addEventListener('click',(event)=>{
//     if(event.target.className=="btn btn-buy"){
//         document.getElementById('modal').style.display='flex'
//         document.querySelector('#contenido').innerHTML=
//         `
//         <div class="card__product-modal"> 
//                 <div class="card__product__title-modal">
//                     <h3>${elementos[event.target.value].title}</h3>
//                 </div>
//                 <div class="card__product__image-modal">
//                     <img src="${elementos[event.target.value].image}" alt="">
//                 </div>
//                 <div class="card__product__description-modal">
//                     <p>${elementos[event.target.value].description}</p>
//                 </div>
//                 <div class="card__product__price-modal">
//                     $${elementos[event.target.value].price}
//                 </div>
//                 <div class="card__product__button-modal">
//                     <button class="btn btn-saled">COMPRAR</button>
//                     <button class="btn btn-cancel">CANCELAR</button>
//                 </div>
//             </div>
//         `
        
//     }
  /*
"event delegation" (delegación de eventos). Se trata de agregar el eventListener a un elemento padre en lugar de a los elementos hijos directos. Luego, se utiliza la propiedad event.target para filtrar los eventos y ejecutar el código solo cuando se hace clic en el elemento deseado.

La delegación de eventos es una técnica muy útil cuando se trabaja con elementos dinámicos o cuando se desea evitar agregar muchos eventListeners a múltiples elementos. Al agregar el eventListener a un elemento padre, se puede controlar todos los eventos de los elementos hijos en un solo lugar. Además, también puede mejorar el rendimiento al reducir la cantidad de eventListeners agregados al DOM.
  */
// })

// const ventana=document.querySelector('.ventana')
// ventana.addEventListener('click',(event)=>{
//     if(event.target.className=="btn btn-cancel"){
//         document.getElementById('modal').style.display='none'
//     }
//     if(event.target.className=="cerrar"){
//         document.getElementById('modal').style.display='none'
//     }
//     if(event.target.className=="btn btn-saled"){
//        alert(`Felicitaciones Haz comprado ${contenido.querySelector('.card__product__title-modal').innerText}` ) 
//     }
// })

addEventListener('click',(event)=>{
    if(event.target.className=='btn btn-buy'){
      modal.style.display='flex'
      contenido.innerHTML=
      `<div class="card__product-modal"> 
      <div class="card__product__title-modal">
          <h3>${elementos[event.target.value].title}</h3>
      </div>
      <div class="card__product__image-modal">
          <img src="${elementos[event.target.value].image}" alt="">
      </div>
      <div class="card__product__description-modal">
          <p>${elementos[event.target.value].description}</p>
      </div>
      <div class="card__product__price-modal">
          $${elementos[event.target.value].price}
      </div>
      <div class="card__product__button-modal">
          <button class="btn btn-sale" value=${event.target.value}>COMPRAR</button>
          <button class="btn btn-cancel" >CANCELAR</button>
      </div>
  </div>
`
}
    
const ventana=document.querySelector('.ventana')
ventana.addEventListener('click',event=>{
  event.stopPropagation()
    if(event.target.className=='btn btn-cancel'){
        modal.style.display='none'
    }
    if(event.target.className=='cerrar'){
        modal.style.display='none'
    }
 
    let nameProducto=document.querySelector('.card__product__title-modal').innerText
    if(event.target.className=='btn btn-sale'){
        localStorage.clear();
        localStorage.setItem('articulo',nameProducto)
        location='../html/compraRealizada.html'
        // alert(`Gracias por haber comprado ${nameProducto}`)
        // modal.style.display='none'
        }
    
})








    // if(event.target.className=="btn btn-buy"){
    //     document.getElementById('modal').style.display='flex'
    //     document.querySelector('#contenido').innerHTML=
    //     `
    //     <div class="card__product-modal"> 
    //             <div class="card__product__title-modal">
    //                 <h3>${elementos[event.target.value].title}</h3>
    //             </div>
    //             <div class="card__product__image-modal">
    //                 <img src="${elementos[event.target.value].image}" alt="">
    //             </div>
    //             <div class="card__product__description-modal">
    //                 <p>${elementos[event.target.value].description}</p>
    //             </div>
    //             <div class="card__product__price-modal">
    //                 $${elementos[event.target.value].price}
    //             </div>
    //             <div class="card__product__button-modal">
    //                 <button class="btn btn-buy">COMPRAR</button>
    //                 <button class="btn btn-cancel">CANCELAR</button>
    //             </div>
    //         </div>
    //     `
        
    // }
    // if(event.target.className=="cerrar"){
    //     document.getElementById('modal').style.display='none'
    // }

    
})

// const ventana=document.getElementById('ventana')
//     ventana.addEventListener('click',(e)=>{
//         console.log(e.target)
//     })
