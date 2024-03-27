let win = 0, draw = 0, lose = 0;

function getComputerChoice(){
    let x = Math.floor(Math.random()*4);

    if( x === 0) return "rock";
    else if( x === 1) return "paper";
    return "scissors";
}

function playRound (playerSelection, computerSelection){
    // computerChoice = computerSelection;
    compChoice.textContent = "Computer's Choice: " + computerSelection;
    if(playerSelection == computerSelection) {
        draw++;
        return "draw";
    }

        else if (playerSelection == "rock"){
        if ( computerSelection == "paper") {
            lose++;
            return "lose";
        }
        win++;
        return "win";
    }
    else if(playerSelection == "paper"){
        if ( computerSelection == "scissors"){
            lose++;
            return "lose";
        }
        win++;
        return "win";
    }
    else if(playerSelection == "scissors"){
        if ( computerSelection == "rock") {
            lose++;
            return "lose";
        }
        win++;
        return "win";
    }
    else console.log("invalid input");
}

function showResult(playerSelection){
    var button = event.target;

    button.style.backgroundColor = "red";

    setTimeout(function() {
        button.style.backgroundColor = "";
    }, 90);

    console.log(playRound(playerSelection, getComputerChoice()));
    sbCount.textContent = win + "/" + draw + "/" + lose;
}

const container = document.querySelector("#container");
const buttons = document.createElement("div");
const compChoice = document.createElement("div");

container.appendChild(buttons);
container.appendChild(compChoice);

compChoice.classList.add("compChoice");
buttons.classList.add("buttons");

compChoice.textContent = "Computer's Choice: ";
const scoreBoard = document.createElement("div");
scoreBoard.classList.add("scoreBoard");
container.appendChild(scoreBoard);

const sbCount = document.createElement("div");
sbCount.classList.add("sbCount");
container.appendChild(sbCount);
sbCount.textContent = win + "/" + draw + "/" + lose;


const rockDiv = document.createElement("div");
const paperDiv = document.createElement("div");
const scissorsDiv = document.createElement("div");


const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");


rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

rockDiv.appendChild(rock);
paperDiv.appendChild(paper);
scissorsDiv.appendChild(scissors);

buttons.appendChild(rockDiv);
buttons.appendChild(paperDiv);
buttons.appendChild(scissorsDiv);

scoreBoard.textContent = "Win/Draw/Lose";

rock.addEventListener("click", function () {
    showResult("rock");
});
paper.addEventListener("click", function () {
    showResult("paper");
});
scissors.addEventListener("click", function () {
    showResult("scissors");
});


