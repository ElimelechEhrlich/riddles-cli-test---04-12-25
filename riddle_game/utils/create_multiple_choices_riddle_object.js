
function create_multiple_choices_riddle(id, name, taskDescription, choices, correctAnswer) {
    const choices_riddle = {
        id, 
        name, 
        taskDescription, 
        choices: [],
        correctAnswer
    }
    return choices_riddle
}

export default create_multiple_choices_riddle