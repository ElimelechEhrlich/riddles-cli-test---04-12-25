import riddles from "../riddles/riddles.js"

const print_choices = choices => {
    for (let i = 0; i < choices.length; i++) {
        console.log(`${i} : ${choices[i]}`)
    }
}

export default print_choices