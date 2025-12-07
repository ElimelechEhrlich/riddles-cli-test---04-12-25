import { calcState, showStats, create_player } from "./utils/utils_player.js"
import { riddlesrun } from "./utils/utils_riddles.js"
import riddles from "./riddles/riddles.js"
import getInput from "./utils/ui.js";

function app_running() {
    console.log(`Welcome to the Riddle Game!`)
    const player = create_player(getInput("What is your name? "))
    riddlesrun(riddles, player)
    showStats(calcState(player))
};

app_running()


