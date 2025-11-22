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

function getHumanPrompt()
{
    let choice = prompt("Rock or Paper or Scissors");
    return choice.toLowerCase();
}

function playGame()
{
    function playRound(humanChoice, computerChoice)
{
    if (humanChoice == "rock" && computerChoice == "paper")
    {
        console.log("You lose! Paper beats rock");
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock")
    {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors")
    {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }      
    else if (computerChoice == "paper" && humanChoice == "scissors")
    {
        console.log("You Win! Scissors beats Paper");
        humanScore++;
    }   
    else if (computerChoice == "scissors" && humanChoice == "rock")
    {
        console.log("You Win! Rock beats Scissors");
        humanScore++;
    }   
    else if (computerChoice == "rock" && humanChoice == "paper")
    {
        console.log("You Win! Paper beats rock");
        humanScore++;
    }
    else {
        console.log("It's a Tie!");
    }
}

    for(let i = 0; i < 5; i++)
    {
    let humanChoice = getHumanPrompt();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    }
    console.log("Your Score is " + humanScore);
    console.log("Computer's Score is " + computerScore);
}
playGame();