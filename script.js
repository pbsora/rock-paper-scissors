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
    console.log(pc)
}

getComputerChoice()