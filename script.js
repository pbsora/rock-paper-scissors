let pscore = 0
let pcscore = 0
let message = document.getElementById('message')



let keepScore = (winner) => {
    if(winner == 'player'){
        let playerScore = document.getElementById('playerScore')
        pscore++
        playerScore.innerText = pscore
    }else{
        let pcScore = document.getElementById('pcScore')
        pcscore++
        pcScore.innerText = pcscore
    }
    if(pscore == 5){
        message.innerText = 'You won the game'
        alert('You won the game')
        document.location.reload()
    }else if(pcscore == 5){
        message.innerText = 'The PC won the game'
        alert('The PC won the game')
        document.location.reload()
    }
}


function getComputerChoice(){
    let num = Math.floor(Math.random() * 3) + 1
    let pc = ''
    
    if(num == 1){
        pc = 'Paper'

    } else if (num == 2) {
        pc = 'Scissors'
    } else {
        pc = 'Rock'
    }
    return pc
}

//Get rock and play round
let rock = document.getElementById('rock')
rock.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    playRound(computerSelection, 'Rock')
})

//Get paper and play round
let paper = document.getElementById('paper')
paper.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    playRound(computerSelection, 'Paper')
})

//Get scissors and play round
let scissors = document.getElementById('scissors')
scissors.addEventListener('click', () => {
    let computerSelection = getComputerChoice();
    playRound(computerSelection, 'Scissors')
})

function playRound(computerSelection, playerSelection){

    
    if(computerSelection == playerSelection){
        message.innerText = ("Oof, that was a tie")
    }   
    else if(playerSelection == "Rock" && computerSelection == "Scissors"){
        message.innerText = (`You won, the computer used ${computerSelection}`)
        keepScore('player')
    }else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        message.innerText = (`Too bad, the computer used ${computerSelection}`)
        keepScore('pc')
    }
    else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        message.innerText = (`You won, the computer used ${computerSelection}`)
        keepScore('player')
    }else if(playerSelection == "Paper" && computerSelection == "Scissors"){
        message.innerText = (`Too bad, the computer used ${computerSelection}`)
        keepScore('pc')
    }
    else if(playerSelection == "Paper" && computerSelection == "Rock"){
        message.innerText = (`You won, the computer used ${computerSelection}`)
        keepScore('player')
    }else if(playerSelection == "Rock" && computerSelection == "Paper"){
        message.innerText = (`Too bad, the computer used ${computerSelection}`)
        keepScore('pc')
    }
}




/*
for (let i = 0; i < 5; i++){
    let computerSelection = getComputerChoice()
    let player = prompt("What will you play").toLowerCase() 
    let playerSelection = player.charAt(0).toUpperCase() + player.slice(1)
    playRound(computerSelection, playerSelection)
    
}*/
