

const nome = "Gabriel"
function getEventoAleatorio(){
    const numb = Math.floor(Math.random()*3)

    let event;
    if(numb === 0){
        event = "Maratona"
    } else if(numb === 1){
        event = "Triathlon"
    } else if(numb === 2) {
        event = "Pentathlon"
    }

    return event
    
}
function getDiasTreino(evento){
    if (evento === "Maratona"){
        return 50;
    } else if(evento === "Triathlon"){
        return 100;
    } else if(evento === "Pentathlon"){
        return 200;
    }
}

const event = getEventoAleatorio()
const diasTreino = getDiasTreino(event)

function logEvento(nome, evento) {
    console.log(`${nome} vai participar do evento ${evento}`);
}
function logTempo(nome, diasTreino){
    console.log(`${nome} vai treinar por ${diasTreino} dias`)
}


console.log(`O evento escolhido é: ${event}`)
console.log(`Dias de treino necessarios: ${diasTreino}`)

logEvento(nome, event)
logTempo(nome, diasTreino)