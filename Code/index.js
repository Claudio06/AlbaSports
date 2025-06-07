
 
const d  = document;
d.addEventListener('DOMContentLoaded' , ()=>{
nave(),
nosotros(),
// letter(),
galeria(),
btntop()

}) 
const nave = () => {
  const mmovil = d.getElementById('hamburger') , close = d.getElementById('close'),
  lista = d.querySelector('.lista_navbar') , linkAll = d.querySelectorAll('#link_nav');
  console.log(mmovil);
   mmovil.addEventListener('click', () => {
    lista.classList.toggle('activa');
    
})
linkAll.forEach((link) => {
  link.addEventListener('click', ()=>{
    lista.classList.remove('activa');
  })
  
  
});

  
close.addEventListener('click', () =>{
  lista.classList.remove('activa');
})

}
const nosotros = ()=>{
  const container = document.getElementById("sobre-nosotros-container");
  
    container.innerHTML = `
      <section id="sobre-nosotros" class="sobre-section">
        <div class="sobre-container">
          <h2>Sobre Nosotros</h2>
          <div class="sobre-bloques">
  
            <div class="bloque">
              <img src="Imagenes/mision.png" alt="Misión" widht = "100px" height="100px">
              <h3>Nuestra Misión</h3>
              <p>Impulsar el rendimiento de cada persona a través de indumentaria deportiva cómoda, duradera y con diseño moderno. Vivimos el deporte como un estilo de vida.</p>
            </div>
  
            <div class="bloque">
              <img src="Imagenes/proceso.svg" alt="Proceso">
              <h3>Cómo Trabajamos</h3>
              <p>Seleccionamos materiales de alta calidad, trabajamos con proveedores confiables y mantenemos una comunicación constante con nuestros clientes. Cada prenda es pensada para acompañarte en movimiento.</p>
            </div>
  
            <div class="bloque">
              <img src="Imagenes/equipo.png" alt="Promesa">
              <h3>Nuestra Promesa</h3>
              <p>Ofrecerte atención cercana, productos confiables y entregas puntuales. Nos comprometemos con tu satisfacción en cada paso del camino.</p>
            </div>
  
          </div>
        </div>
      </section>
    `;
  
  
}

// const letter = ()=>{
//   const typed = new Typed('.strong', {
//     strings: ["alto rendimiento", "conford" , "durabilidad", "diseño moderno" , "alto rendimiento"],
//     typeSpeed: 40
//   });

// }



const galeria = ()=>{
  const swiper1= d.querySelector('#galeria')
  swiper1.insertAdjacentHTML('beforebegin' , `<h2 class="title_galeria">Las mas pedidas</h2>
`);
 
 const fotos = fetch("imagenes.json").then((res) => res.json()).then((data) => {
  
 data.forEach((foto)=>{
swiper1.innerHTML +=`
<a
  data-fancybox="gallery"
  data-src="${foto.imagen}"
  data-caption="${foto.nombre}"
>
<figure class="product-card" data-aos="fade-up">
<img  src="${foto.imagen}" width="250px" height="200px" alt="${foto.nombre}"/>

</a>`


/* <figure class="product-card" data-aos="fade-up">
//      <img src="${foto.imagen}" alt="${foto.nombre}"/>
//    <figcaption">${foto.nombre}</figcaption>
//    <p>${foto.descripcion}</p>
//  </figure> */
 
 

 })
 

}
  )}
 

const btntop = () =>{
const scroll = d.getElementById('btnup');
const navBar = d.querySelector('.navbar');
scroll.addEventListener('click', ()=>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });


})
window.addEventListener('scroll', () => {
console.log(navBar.scrollTop);
  if (window.scrollY> 250) {
    scroll.classList.add('activo');
  } else {
    scroll.classList.remove('activo');

  }




  if(window.scrollY > 450){
    navBar.classList.add('nav-color');
  } else{
    navBar.classList.remove('nav-color');
  }
})

  }