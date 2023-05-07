const inputValor = document.querySelector("#inputValor");
const inputDescricao = document.querySelector("#inputDescricao");
const btn = document.querySelector("#btn");
const table = document.querySelector("table")
let saldo = parseFloat(0);
let aux = 0
array = [];
class Transacao {
    constructor (valor, descricao) {
        this.valor = valor;
        this.descricao = descricao;
    }
}
btn.addEventListener("click", () => {
    if(aux === 0){
        const trp = document.createElement("tr")
        table.appendChild(trp);
        const tdp = document.createElement("td");
        tdp.textContent  =  "Descrição"
        trp.appendChild(tdp);
        tdp2 = document.createElement("td")
        tdp2.textContent = "Valor"
        trp.appendChild(tdp2);
        tdSaldo = document.createElement("td");
        tdSaldo.textContent = "Saldo";
        trp.appendChild(tdSaldo);
    }
        console.log("Passou aqui");
        let valor = inputValor.value;
        let descricao = inputDescricao.value;
        let novaTransacao = new Transacao(valor, descricao);
        array.push(novaTransacao);
        const tr = document.createElement("tr");
        table.appendChild(tr);

        const td = document.createElement("td");
        tr.appendChild(td);
        td.textContent = (descricao);

        td2 = document.createElement("td");
        tr.appendChild(td2)
        if(valor<0){
            td2.style.color = "red"
        }else if(valor>0){
            td2.style.color = "green"
        }
        td2.textContent = valor;

        td3 = document.createElement("td");
        saldo += parseFloat(valor);
        console.log(saldo);
        if(saldo<0){
            td3.style.color = "red"
        }else if(saldo>0){
            td3.style.color = "green"
        }
        td3.textContent = saldo;
        tr.appendChild(td3)
        
        inputValor.value=''
        inputDescricao.value=''

        aux++;
    })