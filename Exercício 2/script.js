const inputName = document.querySelector("#name");
const inputDoc = document.querySelector("#doc");
let lista = document.querySelector("#div");
let btn = document.querySelector("#btn");
let array = [];
let funcSacar = function(saldo){
    saldo = parseFloat(saldo-100);
    return saldo;
}
let funcDepositar = function(saldo){
    saldo = parseFloat(saldo+100);
    return saldo;
}
class clienteBanco  {
    constructor(nome, documento, saldo){
        this.nome = nome;
        this.documento = documento;
        this.saldo = saldo;
    } 
}
btn.addEventListener("click", () => {
    nome = inputName.value;
    documento = inputDoc.value;
    saldo = 0;
    let novoCliente = new clienteBanco(nome, documento, saldo);
    array.push(novoCliente);
    lista.innerHTML = '';
    array.forEach(cliente => {
        let novoNome = document.createElement("p");
        let novoDoc =  document.createElement("p");
        let novoSaldo = document.createElement("p");
        lista.appendChild(novoNome);
        novoNome.textContent = `Cliente: ${cliente.nome}`;
        lista.appendChild(novoDoc);
        novoDoc.textContent = `Documento: ${cliente.documento}`;
        lista.appendChild(novoSaldo);
        novoSaldo.textContent = `Saldo: ${cliente.saldo}`;
        let divBtn = document.createElement("p");
        let buttonSacar = document.createElement("button")
        let buttonDepositar = document.createElement("button");
        buttonSacar.textContent = "Sacar 100";
        buttonDepositar.textContent = "Depositar 100";
        lista.appendChild(buttonSacar);
        lista.appendChild(buttonDepositar);
        buttonSacar.addEventListener("click", function(){
            saldo = funcSacar(cliente.saldo);
            cliente.saldo = saldo;
            console.log(saldo);
            novoSaldo.textContent = `Saldo: ${cliente.saldo}`;
    
        })
        buttonDepositar.addEventListener("click", function(){
            saldo = funcDepositar(cliente.saldo);
            cliente.saldo = saldo;
            console.log(saldo);
            novoSaldo.textContent = `Saldo: ${cliente.saldo}`;
        })
    });
})
