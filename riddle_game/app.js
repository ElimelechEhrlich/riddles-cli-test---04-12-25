import create_player from "./utils/create_player_object.js"
import riddles from "./riddles/riddles.js"
import input from "analiza-sync"
import check_answer from "./utils/check_answer.js"
import { time } from "console"



function app_running() {
    console.log(`Welcome to the Riddle Game!`)
    const name = input("What is your name? ")
    const player = create_player(name)
    player.times.push(Date.now())
    for (let i = 0; i < riddles.length; i++) {
        check_answer(i)
    }
    console.log(player)
}
app_running()