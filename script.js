const text = `Quiero que sepas algo que quizá no te digo todas las veces que debería:

Te amo. ❤️

Y no hablo solamente de los momentos bonitos, de las risas o de los días en los que todo sale bien. Te quiero también en los días difíciles, cuando necesitamos paciencia, cuando tenemos que aprender algo nuevo el uno del otro y cuando simplemente necesitamos estar juntos.

Me encanta tenerte en mi vida. Me encanta tu forma de ser, tus detalles, tus ocurrencias y esas pequeñas cosas que quizá tú no notas, pero que para mí significan muchísimo.

Gracias por cada abrazo, cada conversación, cada sonrisa y cada momento que hemos compartido. Gracias por dejarme formar parte de tu vida y por permitirme construir recuerdos contigo.

No sé qué nos tenga preparado el futuro, pero sí sé algo: quiero seguir caminándolo contigo.

Porque entre tantas personas, tantos lugares y tantos caminos posibles, encontrarte a ti ha sido una de las cosas más bonitas que me han pasado.

Y si alguna vez dudas de lo importante que eres para mí, vuelve a esta carta.

Aquí estará mi respuesta:

Te elijo. Te quiero. Y te amo. ❤️`;

function abrirCarta() {
  const carta = document.getElementById("carta");
  carta.classList.remove("hidden");
  document.getElementById("inicio").style.display = "none";

  escribirTexto();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function escribirTexto() {
  const elemento = document.getElementById("message");
  let i = 0;
  const velocidad = 24;

  function escribir() {
    if (i < text.length) {
      elemento.textContent += text.charAt(i);
      i++;
      setTimeout(escribir, velocidad);
    }
  }

  escribir();
}

function mostrarAmor() {
  document.getElementById("secret").classList.remove("hidden");
  lanzarCorazones(18);
}

function lanzarCorazones(cantidad) {
  const contenedor = document.querySelector(".hearts");

  for (let i = 0; i < cantidad; i++) {
    setTimeout(() => {
      const heart = document.createElement("span");
      heart.className = "floating-heart";
      heart.textContent = Math.random() > .5 ? "♥" : "❤";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.fontSize = (14 + Math.random() * 25) + "px";
      heart.style.animationDuration = (5 + Math.random() * 5) + "s";

      contenedor.appendChild(heart);

      setTimeout(() => heart.remove(), 11000);
    }, i * 120);
  }
}

// Corazones suaves de fondo
setInterval(() => lanzarCorazones(1), 1800);
