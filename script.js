const selections = ["rock", "paper", "scissors"];

const score = [0, 0]; //player score at [0], computer score at[1]

function computerPlay(){
    
    return selections[Math.floor( Math.random() * 3)];
}

function playRound(player, computer){

    let playerWin;
    let result;
    let playerId = selections.indexOf(player);
    let computerId = selections.indexOf(computer);

    let capSelections = ["Rock", "Paper", "Scissors"];

    if (playerId === computerId){

        result = `Tie! ${capSelections[playerId]} ties to ${selections[computerId]}.`;

    } else if (playerId == 0 && computerId == 2 || playerId == 1 && computerId == 0 || playerId == 2 && computerId == 1){

        result = `You win! ${capSelections[playerId]} beats ${selections[computerId]}.`;
        score[0]++;

    } else {

        result = `You lose! ${capSelections[computerId]} beats ${selections[playerId]}.`;
        score[1]++;

    }

    return result;
}


function game(){

    for (let i = 0; i < 5; i++){

        const computerSelection = computerPlay();
        let playerSelection;

        while (!selections.includes(playerSelection)){

            playerSelection = prompt("Pick rock, paper or scissors.");
            
            if (playerSelection != null){

                playerSelection = playerSelection.toLowerCase();
            }
        }

        console.log(`Round ${i+1}: ${playRound(playerSelection, computerSelection)}`);

    }

    if (score[0] > score[1]){
        console.log(`You win! ${score[0]} to ${score[1]}.`);
    } else if (score[0] < score[1]){
        console.log(`Computer wins! ${score[1]} to ${score[0]}.`);
    } else {
        console.log(`Tie! ${score[0]} to ${score[1]}.`)
    }
}

game();