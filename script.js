let humanScore = 0;
let computerScore = 0;


function getComputerChoice()
{
    let random_num = Math.floor(Math.random() * 3) + 1;
    switch(random_num)
    {
        case 1:
            return "paper";
            break;
        case 2:
            return "rock";
            break;
        case 3:
            return "scissors";
            break;
        default:
            return;
            break;        
    }
}

// function getHumanPrompt()
// {
//     let choice = prompt("Rock or Paper or Scissors");
//     return choice.toLowerCase();
// }

function playGame()
{
    const results = document.querySelector(".results")
    const playerScore = document.querySelector(".your-score")
    const comScore = document.querySelector(".com-score")
    function playRound(humanChoice, computerChoice)
{
    if (humanChoice == "rock" && computerChoice == "paper")
    {

        results.textContent = "You lose! Paper beats rock";
        results.style.backgroundColor = "red"
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock")
    {
        results.textContent = "You lose! Rock beats Scissors";
        results.style.backgroundColor = "red"
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors")
    {
        results.textContent = "You lose! Scissors beats Paper";
        results.style.backgroundColor = "red"
        computerScore++;
    }      
    else if (computerChoice == "paper" && humanChoice == "scissors")
    {
        results.textContent = "You Win! Scissors beats Paper";
        results.style.backgroundColor = "blue"
        humanScore++;
    }   
    else if (computerChoice == "scissors" && humanChoice == "rock")
    {
        results.textContent = "You Win! Rock beats Scissors";
        results.style.backgroundColor = "blue"
        humanScore++;
    }   
    else if (computerChoice == "rock" && humanChoice == "paper")
    {
        results.textContent = "You Win! Paper beats rock";
        results.style.backgroundColor = "blue"
        humanScore++;
    }
    else {
        results.textContent = "It's a Tie!";
        results.style.backgroundColor = "gray"
    }
    playerScore.textContent = ` Your Score: ${humanScore}`
    comScore.textContent = `Computer Score: ${computerScore}`
    if (humanScore === 5 || computerScore === 5) {
        results.textContent += " — Game Over!";
        rock_button.disabled = true;
        paper_button.disabled = true;
        scissors_button.disabled = true;
    }

}
const rock_button = document.querySelector(".rock");
const paper_button = document.querySelector(".paper");
const scissors_button = document.querySelector(".scissors");
const reset_button = document.querySelector(".reset")

rock_button.addEventListener('click', () => playRound("rock", getComputerChoice()));
paper_button.addEventListener('click', () => playRound("paper", getComputerChoice()));
scissors_button.addEventListener('click', () => playRound("scissors", getComputerChoice()));
reset_button.addEventListener('click', function() {
    humanScore = 0
    computerScore = 0
    results.textContent = "Reseted!"
    results.style.backgroundColor = "gray"
    playerScore.textContent = "Your Score:"
    comScore.textContent = "Computer Score:"
        rock_button.disabled = false;
        paper_button.disabled = false;
        scissors_button.disabled = false;
} )


}



playGame();