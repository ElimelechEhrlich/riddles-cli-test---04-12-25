function check_type_of_riddle(riddle) {
    let choises_exist = false
    const found = (Object.keys(riddle).find((key) => key === 'choices'))
    if (found) { 
        choises_exist = true
    }
    return choises_exist
}

export default check_type_of_riddle