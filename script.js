let pscore = 0
let pcscore = 0


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
        console.log("Oof, that was a tie")
    }   
    else if(playerSelection == "Rock" && computerSelection == "Scissors"){
        alert(`You won, the computer used ${computerSelection}`)
        keepScore('player')
    }else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        alert(`Too bad, the computer used ${computerSelection}`)
        keepScore('pc')
    }
    else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        alert(`You won, the computer used ${computerSelection}`)
        keepScore('player')
    }else if(playerSelection == "Paper" && computerSelection == "Scissors"){
        alert(`Too bad, the computer used ${computerSelection}`)
        keepScore('pc')
    }
    else if(playerSelection == "Paper" && computerSelection == "Rock"){
        alert(`You won, the computer used ${computerSelection}`)
        keepScore('player')
    }else if(playerSelection == "Rock" && computerSelection == "Paper"){
        alert(`Too bad, the computer used ${computerSelection}`)
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
