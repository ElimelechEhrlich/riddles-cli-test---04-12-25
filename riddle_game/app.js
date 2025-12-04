import create_player from "./utils/create_player_object.js"
import riddles from "./riddles/riddles.js"
import input from "analiza-sync"
import check_answer from "./utils/check_answer.js"



function app_running() {
    console.log(`Welcome to the Riddle Game!`)
    const name = input("What is your name? ")
    const player = create_player(name)
    for (let i = 0; i < riddles.length; i++) {
        check_answer(i)
    }
}

app_running()