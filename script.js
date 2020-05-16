const selections = ["Rock", "Paper", "Scissors"];

const score = [0, 0]; //player score at [0], computer score at[1]

//DOM
const container = document.querySelector("#container");
const p = document.createElement("p");
    p.textContent = "Pick one!";
    container.appendChild(p);

const buttons = [];

for (let i = 0; i < 3; i++) {
    buttons[i] = document.createElement("button");
    buttons[i].textContent = selections[i];
    buttons[i].addEventListener("click", () => {
        playRound(selections.indexOf(buttons[i].textContent), computerPlay());
    });
    container.appendChild(buttons[i]);
}

const scoreDiv = document.createElement("div");
container.appendChild(scoreDiv);

    const roundResult = document.createElement("p");
    scoreDiv.appendChild(roundResult);
    

    const h3 = document.createElement("h3");
    h3.innerText = "Score:";
    scoreDiv.appendChild(h3);

    const totalScore = document.createElement("p");
    scoreDiv.appendChild(totalScore);



//Game
function computerPlay(){
    return Math.floor( Math.random() * 3);
}

function playRound(playerId, computerId){

    //Checks to reset score
    if (score[0] == 5 || score[1] == 5){
        score[0] = 0;
        score[1] = 0;
    }

    //Compares inputs and prints round result
    if (playerId === computerId){

        roundResult.innerHTML = `Tie! ${selections[playerId]} ties to ${selections[computerId]}.`;

    } else if (playerId == 0 && computerId == 2 || playerId == 1 && computerId == 0 || playerId == 2 && computerId == 1){

        roundResult.innerHTML = `You win! ${selections[playerId]} beats ${selections[computerId]}.`;
        score[0]++;

    } else {

        roundResult.innerHTML = `You lose! ${selections[computerId]} beats ${selections[playerId]}.`;
        score[1]++;

    }

    totalScore.innerHTML = `${score[0]} - ${score[1]}`;

    //Checks for winner
    if (score[0] == 5){
        totalScore.innerHTML = `You win! ${score[0]} to ${score[1]}.`;
    } else if (score[1] == 5){
        totalScore.innerHTML = `Computer wins! ${score[1]} to ${score[0]}.`;
    }

    return;
}