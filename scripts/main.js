const contador = document.getElementById("count-el");
let counter = 0;
let conteosAnteriores = 0;
let resetBtn = null; // la declaramos aqui en el scope fuera para luego dentro
//de la funcion no hacer const

//mucho cuidado con la declaracoin de variables cuando
// se hace const en los componentes, ya que luego
// si necesitamos que esa variable cambie de valor no se puede
// actualizar

document.getElementById("increment-btn");
document.getElementById("save-btn");

//primera forma: declaramos la funcion y luego la ejecutanos en linea en el boton del index.html
function increment() {
  counter++;
  contador.textContent = counter;
}

function decrement() {
  counter--;
  contador.textContent = counter;
}

const resultado = document.createElement("p");
resultado.classList.add("resultado");
document.body.appendChild(resultado);

function save() {
  let counting = counter + " - ";

  resultado.textContent += counting;

  if (!resetBtn) {
    reset();
  }
}

//segunda forma

// const incrementBtn = document.getElementById("increment-btn");
// const saveBtn = document.getElementById("save-btn");

//usamos la funcion

// incrementBtn.addEventListener("click",increment)

function reset() {
  resetBtn = document.createElement("button");
  resetBtn.classList.add("resetBtn");
  resetBtn.textContent = "RESET";
  document.body.appendChild(resetBtn);
  resetBtn.addEventListener(
    "click",
    () => (
      (contador.textContent = "0"),
      (resetBtn.style.display = "none"),
      (resetBtn = null),
      (resultado.textContent = " ")
    )
  );
}
