//-console.log("Hello, Word");
/*
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.getElementsByClassName("parrafito");
const parid = document.getElementById("id");
const input = document.querySelector("input");

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

//* Modificar Elementos en Html dede JavaScript

h1.innerHTML = "Patito <br> feo";
console.log(h1.getAttribute("class"));
h1.setAttribute("class", "rojo");

h1.classList.add("pink");
h1.classList.remove("rojo");

input.value ="752";

const img = document.createElement("img");
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);

pid.innerHTML = "";
pid.append(img);
*/

const h1 = document.querySelector("h1");
const form = document.querySelector('#form');
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

form.addEventListener("submit", sumarInputValues);

function sumarInputValues(){
    event.preventDefault();
    const sumaInputs = (Number(input1.value) + Number(input2.value));
    pResult.innerText = "El Resultado es: " + sumaInputs;
}