

function create_player(name) {
    return {
        name, 
        times : []
    }
}

function addSolveTime(player, seconds) {
    player.times.push(seconds)
}

function calcState(player) {
    let sum = 0;
    player.times.forEach(time => {
        sum += time;
    })
    const avg =  sum / player.times.length
    return {
        name:player.name,
        sum,
        avg
    }
}

function showStats(state) {
    console.log(`name: ${state.name}, sum: ${state.sum}, avg: ${state.avg}`)
}

function measureSolveTime(fn, parmeter) {
    const start = Date.now() /1000
    fn(parmeter)
    const end = Date.now() /1000 - start
    return end
}


export {
    create_player,
    addSolveTime,
    calcState,
    showStats,
    measureSolveTime
}