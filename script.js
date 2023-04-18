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


function playRound(computerSelection, playerSelection){

    if(computerSelection == playerSelection){
        console.log("Oof, that was a tie")
    }
    
    else if(playerSelection == "Rock" && computerSelection == "Scissors"){
        console.log(`You won, the computer used ${computerSelection}`)
    }else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        console.log(`Too bad, the computer used ${computerSelection}`)
    }

    else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        console.log(`You won, the computer used ${computerSelection}`)
    }else if(playerSelection == "Paper" && computerSelection == "Scissors"){
        console.log(`Too bad, the computer used ${computerSelection}`)
    }

    else if(playerSelection == "Paper" && computerSelection == "Rock"){
        console.log(`You won, the computer used ${computerSelection}`)
    }else if(playerSelection == "Rock" && computerSelection == "Paper"){
        console.log(`Too bad, the computer used ${computerSelection}`)
    }

}



for (let i = 0; i < 5; i++){
    let computerSelection = getComputerChoice()
    let player = prompt("What will you play").toLowerCase() 
    let playerSelection = player.charAt(0).toUpperCase() + player.slice(1)
    playRound(computerSelection, playerSelection)
    
}
