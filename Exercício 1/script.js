window.addEventListener("load", function(){
    const inputEvento = document.querySelector("#inputEvento");
    const inputTime = document.querySelector("#inputTime");
    const button = document.querySelector("#addButton");
    
    
    array = [];
    class tarefa {
        constructor (evento, tempo){
            this.evento = evento;
            this.tempo = tempo;
        }
    }
    button.addEventListener("click", function(){
        
        const Lista = document.querySelector("#lista");
        let evento = inputEvento.value;
        let tempo = inputTime.value;
        let novoEvento = new tarefa(evento, tempo);
        array.push(novoEvento);       
        
        array.sort(function(tempo1, tempo2){
            if(tempo1.tempo > tempo2.tempo){
                return 1
            }
            else if(tempo1.tempo < tempo2.tempo){
                return -1
            }
            else {
                return 0
            }
        
        });   
    Lista.innerHTML = '' 
    array.forEach(item => {
        const novoElemento = document.createElement("li");
        novoElemento.textContent = `${item.evento}, ${item.tempo}`;
        Lista.appendChild(novoElemento);
    });

})

})