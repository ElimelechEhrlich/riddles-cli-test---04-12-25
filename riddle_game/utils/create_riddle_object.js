
function create_riddle(id, name, taskDescription, correctAnswer) {
    const riddle = {
        id,
        name, 
        taskDescription, 
        correctAnswer
    }
    return riddle
}

export default create_riddle