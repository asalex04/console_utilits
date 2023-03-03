import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import startGame from './utils/game.js';
import getDate from './utils/date.js';

const rl = readline.createInterface({ input, output })
export let NAME = ''

export default async function getUserName() {
    const name = await rl.question('May I have your name? ')
    console.log(`Hello, ${name}`)
    NAME = name
    const choise = await rl.question(
        'What do you want? To get date or play game?\nprint "date" or "game": ',
    )
    choise === 'game' ? await startGame() : await getDate()
    rl.close()
}
