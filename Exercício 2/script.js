const inputName = document.querySelector("#name");
const inputDoc = document.querySelector("#doc");
const form = document.querySelector("form");
let lista = document.querySelector("ul");
let btn = document.querySelector("#btn");
let array = [];
class clienteBanco  {
    constructor(nome, documento, saldo){
        this.nome = nome;
        this.documento = documento;
        this.saldo = saldo;
    } 
}
btn.addEventListener("click", function(){
    nome = inputName.value;
    documento = inputDoc.value;
    saldo = 0;
    let novoCliente = new clienteBanco(nome, documento, saldo);
    array.push(novoCliente);
    lista.innerHTML = '';
    array.forEach(cliente => {
        novoItem = document.createElement("li");
        lista.appendChild(novoItem);
        novoItem.textContent = `Cliente: ${cliente.nome} | Documento: ${cliente.documento} | Saldo: ${cliente.saldo}   `
        let buttonSacar = document.createElement("button")
        let buttonDepositar = document.createElement("button");
        buttonSacar.textContent = "Sacar 100";
        buttonDepositar.textContent = "Depositar 100";
        novoItem.appendChild(buttonSacar);
        novoItem.appendChild(buttonDepositar);
    });
})