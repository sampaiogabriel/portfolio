function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach(function (letra, i) {

    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 60 * i)

  });
}
const lettermain = document.querySelector('.letter-main');

lettermain.addEventListener("focus", ativar());

function ativar() {
  typeWrite(lettermain);
}
