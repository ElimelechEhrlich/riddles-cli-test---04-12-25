import riddles from "../riddles/riddles.js"

function correct_answer_check(riddle, choice) {
    return choice == riddle['correctAnswer']
}

export default correct_answer_check