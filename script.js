let humanpoints = 0
let computerpoints = 0


// function to generate a random number from 1-3
function getComputerChoice(){
        const minceiled = Math.ceil(1)
        const maxfloored = Math.floor(3)
        let RandomNum = Math.floor(Math.random() * (maxfloored - minceiled + 1) + minceiled)

        console.log(RandomNum)

        if(RandomNum == 1){
            return("rock")
        } else if (RandomNum == 2){
            return("paper")
        } else {
            return("scissors")
        }
}


// Function that ask the player to input their play
function getHumanChoice(){
    let humanplay = window.prompt("Rock-Paper-Scissors, GO!")
    return (humanplay)
}

// Function that compares both choices, and says who's the winner
function playroud(HumanChoice, ComputerChoice){
    HumanChoice = HumanChoice.toLowerCase()
    console.log(HumanChoice)
    console.log(ComputerChoice)

    if(HumanChoice == ComputerChoice){
        console.log(`TIED! You picked ${HumanChoice} and i picked ${ComputerChoice}`)
    } 
    else if (HumanChoice == "rock" && ComputerChoice == "scissors" || HumanChoice == "paper" && ComputerChoice == "rock" || HumanChoice == "scissors" && ComputerChoice == "paper"){
        console.log(`YOU WON! You bastard, you picked ${HumanChoice} and i got fooled into picking ${ComputerChoice}`)
    }
    else if (ComputerChoice == "rock" && HumanChoice == "scissors" || ComputerChoice == "paper" && HumanChoice == "rock" || ComputerChoice == "scissors" && HumanChoice == "paper"){
        console.log(`YOU LOST! You cant outsmart a machine picking something so obvious as ${HumanChoice} while i have ${ComputerChoice} in my arsenal`)
    }
}

const HumanSelection = getHumanChoice()
const ComputerSelection = getComputerChoice()

playroud(HumanSelection, ComputerSelection) 