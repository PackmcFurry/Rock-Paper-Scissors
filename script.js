// function to generate a random number from 1-3
function getComputerChoice(){
        const minceiled = Math.ceil(1)
        const maxfloored = Math.floor(3)
        let RandomNum = Math.floor(Math.random() * (maxfloored - minceiled + 1) + minceiled)

        if(RandomNum == 1){
            return("rock")
        } else if (RandomNum == 2){
            return("paper")
        } else {
            return("scissors")
        }
}


// Function that compares both choices, and says who's the winner
function playround(HumanChoice, ComputerChoice){
    let pointResult = document.createElement("div")
    pointResult.classList.add("result")

    if(HumanChoice == ComputerChoice){
        pointResult.textContent = `TIED! You picked ${HumanChoice} and i picked ${ComputerChoice}`
        container.appendChild(pointResult)
        scoreBoard.textContent = "Tied!"
    } 
    else if (HumanChoice == "rock" && ComputerChoice == "scissors" || HumanChoice == "paper" && ComputerChoice == "rock" || HumanChoice == "scissors" && ComputerChoice == "paper"){
        pointResult.textContent = `YOU WON! You bastard, you picked ${HumanChoice} and i got fooled into picking ${ComputerChoice}`
        container.appendChild(pointResult)
        scoreBoard.textContent = "Won!"
        humanPoints++   
        HPScore.textContent = humanPoints
    }
    else if (ComputerChoice == "rock" && HumanChoice == "scissors" || ComputerChoice == "paper" && HumanChoice == "rock" || ComputerChoice == "scissors" && HumanChoice == "paper"){
        pointResult.textContent = `YOU LOST! You cant outsmart a machine picking something so obvious as ${HumanChoice} while i have ${ComputerChoice} in my arsenal`
        container.appendChild(pointResult)
        scoreBoard.textContent ="Lost!"
        computerPoints++  
        CPScore.textContent = computerPoints  
    }

    if(computerPoints == 5 || humanPoints == 5){
        finishGame()
    } 
}

function finishGame(){
    if (humanPoints > computerPoints){
        alert(`Congratulations! You won! With the end result being ${humanPoints}X${computerPoints}`)
    } else {
        alert(`What a shame! You lost! With the end result being ${humanPoints}X${computerPoints}`)
    }

    computerPoints = 0
    humanPoints = 0
    CPScore.textContent = computerPoints 
    HPScore.textContent = humanPoints
    container.innerHTML = ''
    scoreBoard.textContent = "Result"
}

const HCRock = document.getElementById("rock")
const HCPaper = document.getElementById("paper")
const HCScissors = document.getElementById("scissors")

const container = document.getElementById("container")

const HPScore = document.getElementById("HP")
const CPScore = document.getElementById("CP")

const scoreBoard = document.getElementById("result")

let humanPoints = 0
let computerPoints = 0

HCRock.addEventListener("click", () => playround("rock", getComputerChoice()))
HCPaper.addEventListener("click", () => playround("paper", getComputerChoice()))
HCScissors.addEventListener("click", () => playround("scissors", getComputerChoice()))