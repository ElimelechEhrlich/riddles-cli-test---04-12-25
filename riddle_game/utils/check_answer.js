import correct_answer_check from "./correct_answer_check.js"
import print_choices from "./print_choises.js"
import riddles from "../riddles/riddles.js"
import input from "analiza-sync"
import check_type_of_riddle from "./check_type_of_riddle.js"

function check_answer(index) {
    const type = check_type_of_riddle(riddles[index])
        if (type) {
            console.log(`Riddle ${riddles[index]['id']}: ${riddles[index]['name']}\n${riddles[index]['taskDescription']}`);
            print_choices(riddles[index]['choices'])
            const answer = input('your answer: ')
            if (correct_answer_check(riddles[index], answer)){
                console.log `Correct!`
            }
            else {
                check_answer(index)
            } 
        }
        else {
            console.log(`Riddle ${riddles[index]['id']}: ${riddles[index]['name']}\n${riddles[index]['taskDescription']}`);
            const answer = input('your answer: ')
            if (correct_answer_check(riddles[index], answer)){
                console.log `Correct!`
                return
            }
            else {
                return check_answer(index)
            }
        }
    }


export default check_answer