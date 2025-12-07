import { getInput, measureSolveTime } from "./ui.js";


function askRiddle(riddleObj) {
    console.log(riddleObj.name);
    console.log(riddleObj.taskDescription);
    if (riddleObj.choices) {
        riddleObj.choices.forEach((choice, i) => {
            console.log(`${i + 1}. ${choice}`);
        });
    }
    let correctAnswer = ``
    while (!correctAnswer) {
        let answer = getInput("Enter your answer: ").trim()
        correctAnswer = checkAns(answer, riddleObj);
    }
}



function checkAns(answer, riddle) {
    if (riddle.choices) 
        return (answer - 1) + "" === riddle.correctAnswer
    return answer === riddle.correctAnswer
}

function riddlesrun(riddles, player) {
    riddles.forEach(riddle => {
        let time = measureSolveTime(askRiddle, riddle)
        player.times.push(time)
    })
}

export {
    riddlesrun,
    askRiddle
}

