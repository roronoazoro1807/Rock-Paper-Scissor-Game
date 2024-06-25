let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "scissors", "paper"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was a draw");
    msg.innerText = "Game was a draw!";
    msg.style.backgroundColor = "#5C2FC2";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("User wins!");
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
    } else {
        console.log("You lose!");
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#C80036";
        compScore++;
    }
    updateScore();
};

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice = ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const updateScore = () => {
    document.getElementById("user-score").innerText = userScore;
    document.getElementById("comp-score").innerText = compScore;
};
