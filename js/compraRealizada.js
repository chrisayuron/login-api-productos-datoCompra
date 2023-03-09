const articulo=localStorage.getItem('articulo')
console.log(articulo)
productoComprado.innerText=articulo
regresar.addEventListener('click',()=>location='../html/principal.html')