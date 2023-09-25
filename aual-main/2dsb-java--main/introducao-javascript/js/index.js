let titulo = document.querySelector(".titulo");
console.log(titulo.textContent);

titulo.textContent = "Fica Grande Nutrição";

let pacientes = document.querySelectorAll(".paciente");


for(i = 0; i <pacientes.length; i++){
  console.log(i)
  console.log(pacientes);

  let paciente = pacientes[i];
let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");

let peso = parseFloat(tdPeso.textContent); 
let altura = parseFloat(tdAltura.textContent); 

let tdImc = paciente.querySelector(".info-imc");

let pesoehVdd = true;
let alturaehVdd = true;

if (peso <= 0 || peso >= 1000) {
  console.log("Peso inválido");
  tdImc.textContent = "Peso inválido";
  pesoehVdd = false;
}

if (altura <= 0 || altura >= 3) {
  console.log("Altura inválida");
  tdImc.textContent = "Altura inválida";
  alturaehVdd = false;
}

if (pesoehVdd && alturaehVdd) { 
  let imc = peso / (altura * altura);
  tdImc.textContent = imc.toFixed(2); 
}
else{

  tdImc.textContent = "altura ou peso invalido!"
}

}

