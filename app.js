const previous = document.querySelector(".previous-display");
const current = document.querySelector(".current-display");
const button = document.querySelector(".calculator");
// ! global alan
let üstsatir = "";
let altsatir = "";
let operator = "";

button.addEventListener("click", (e) => {
  if (e.target.classList.contains("num")) {
    sayiyiAl(e.target.textContent);
    yazdir();
  }
  if (e.target.classList.contains("operator")) {
    choose(e.target.textContent);
    yazdir();
  }
  if (e.target.classList.contains("equal")) {
    hesapla();
    yazdir();
  }
  if (e.target.classList.contains("pm")) {
    if (!altsatir) return;
    altsatir *= -1;
    yazdir();
  }
  if (e.target.classList.contains("percent")) {
    if (!altsatir) return;
    altsatir = altsatir / 100;
    yazdir();
  }
  if (e.target.classList.contains("ac")) {
    altsatir = "";
    üstsatir = "";
    operator = "";
    yazdir();
  }
  if (e.target.classList.contains("delete")) {
    deleteNumber();
    yazdir();
  }
});

const sayiyiAl = (num) => {
  if (num === "0" && altsatir === "0") return;
  if (num !== "." && altsatir === "0") {
    altsatir = num;
    return;
  }

  if (num === "." && altsatir.includes(".")) return;
  if (altsatir.length > 10) return;
  altsatir += num;
};

const yazdir = () => {
  previous.textContent = `${üstsatir}${operator}`;
  current.textContent = altsatir;
};

const deleteNumber = () => {
  altsatir = altsatir.slice(0, -1);
};

const choose = (op) => {
  if (üstsatir !== "") {
    hesapla();
  }
  operator = op;
  üstsatir = altsatir;
  altsatir = "";
};

const hesapla = () => {
  let calculation = 0;
  const sayi1 = Number(üstsatir);
  const sayi2 = Number(altsatir);
  console.log(sayi1);
  console.log(sayi2);
  switch (operator) {
    case "+":
      calculation = sayi1 + sayi2;
      break;
    case "-":
      calculation = sayi1 - sayi2;
      break;
    case "x":
      calculation = sayi1 * sayi2;
      break;
    case "÷":
      calculation = sayi1 / sayi2;
      break;

    default:
      return;
  }
  altsatir = calculation;
  üstsatir = "";
  operator = "";
};
