// function load() {
//     var app = document.getElementById('app');
//     var loader = document.getElementById('loading');
//     app.style.display = 'none';
//     setTimeout(ocultarLoader, 2000);
//     function ocultarLoader() {
//       loader.style.display = 'none';
//       app.style.display = 'block';
      
//     }
    
  
//   }
//   window.onload = load;

window.addEventListener('load', precargaImagenes);

function precargaImagenes() {

    var img1 = new Image();
    img1.src = 'img/banner-home.jpg';

    var img2 = new Image();
    img2.src = 'img/banner-locales.jpg';

    var img3 = new Image();
    img3.src = 'img/banner-planta.jpg';

    var img4 = new Image();
    img3.src = 'img/banner-franquicias.jpg';

    var img4 = new Image();
    img3.src = 'img/banner-contacto.jpg';


    //Cuando se terminan de cargar las imágenes se le agrega la clase "close" a #wrap-preload.
    var preload = document.getElementById('wrap-preload');

    preload.classList.add('close');

    console.log('Sitio cargado!');

}