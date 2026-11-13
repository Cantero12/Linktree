function flexToggle() {
  let nav = document.querySelector("#flexNav")
  nav.classList.toggle("flexToggle")

  let links = document.querySelectorAll(".link")
  links.forEach(link => link.classList.toggle("linkToggle"))
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

let autoplay = setInterval(() => plusSlides(1), 5000);
function resetAutoplay() {
  clearInterval(autoplay);
  autoplay = setInterval(() => plusSlides(1), 5000);
}

document.querySelectorAll(".prev, .next").forEach(el => {
  el.addEventListener("click", resetAutoplay);
});




/*donar*/
function abrirModal() {
  const fondo = document.createElement("div")
  fondo.classList.add("fondo-modal")

  const modal = document.createElement("div")
  modal.innerHTML = `<h1 class="titulos">Tu ayuda transforma las vidas de los perritos.</h1>
  <h2 class="titulos">Tu donación nos permite seguir rescatando perros en situación de calle y acompañarlos hasta encontrar una familia.</h2>
  <div class="form-con-foto">
    <form>
      <div>
        <label for="nombre">Nombre y Apellido:</label>
        <input id="nombre" type="text">
      </div>
      <div>
        <label for="email">E-mail:</label>
        <input id="email" type="email">
      </div>
      <div>
        <label for="monto">Monto a donar:</label>
        <select id="monto">
          <option value="Por favor, elige un monto">Por favor, elige un monto</option>
          <option value="$3.000">$3.000</option>
          <option value="$5.000">$5.000</option>
          <option value="$10.000">$10.000</option>
          <option value="$15.000">$15.000</option>
          <option value="$25.000">$25.000</option>
          <option value="$50.000">$50.000</option>
        </select>
      </div>
    </form>
    <button class="btn-enviar" onclick ="cambiarModal()"> Enviar donación </button>
    <img class="img-form" src="img/llegadaNina.jpeg" alt="nina">
  </div>`


  modal.classList.add("modal")
  fondo.appendChild(modal)
  document.body.appendChild(fondo)
}


function cambiarModal() {
  document.querySelector(".modal").innerHTML = `<h1 class="titulos">Gracias por tu donación!</h1>
  <p class="titulos">Tu aporte nos ayuda para poder comprar los alimentos de los perros, sus vacunas necesarias, medicamentos, tratamientos, lugar para que puedan dormir cómodos y para poder mantener nuestras instalaciones.<br>
  Gracias por ayudar a los perritos que forman parte de Huellitas!</p>
  <img class="img" src="img/gracias.jpg" alt="gracias por donar">
  <button class="btn-cerrar" onclick ="cerrarModal()"> Cerrar </button>`
}


function cerrarModal() {
  document.querySelector(".fondo-modal").remove()
}