//busca no site pelo titulo e armazena NA VARIAVEL
let titulo = document.querySelector(".titulo");

//MOSTRA NA DEVTOOL O CONTEUDO DA VARIAVEL 
console.log(titulo.textContent);

//altera o conteudo da variavel
titulo.textContent = "Pica Grande Nutrição"


//mudança tabela
let paciente = document.querySelector("#primeiro-paciente");
console.log(paciente);

let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");

let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

let imc = peso / (altura*altura);
console.log(imc)

let tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;