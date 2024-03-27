function getComputerChoice(){
    let x = Math.floor(Math.random()*4);

    if( x === 0) return "rock";
    else if( x === 1) return "paper";
    return "scissors";
}

function playRound (playerSelection, computerSelection){
    if(playerSelection == computerSelection) return "draw";
    else if (playerSelection == "rock"){
        if ( computerSelection == "paper") return "lose";
        return "win";
    }
    else if(playerSelection == "paper"){
        if ( computerSelection == "scissors") return "lose";
        return "win";
    }
    else if(playerSelection == "scissors"){
        if ( computerSelection == "rock") return "lose";
        return "win";
    }
    else console.log("invalid input");
}

let playerSelection = prompt("rock, paper or scissors?");
console.log(playRound(playerSelection.toLowerCase(), getComputerChoice()));


