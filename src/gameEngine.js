import readlineSync from 'readline-sync'
import { NAME } from './cli.js';

const gameEngine = async (TASK, getGameData) => {
    let attempts = 1
    console.log(`Привет ${NAME}`)
    console.log('Давай сыграем в игру "Загадай число"\n')
    let answer = await readlineSync.question(`${TASK}\n`)
    const question = getGameData()
    while (answer !== question) {
        console.log(answer)
        answer = (answer > question)
            ? readlineSync.question('Меньше\n')
            : readlineSync.question('Больше\n')
        attempts += 1
    }
    console.log(`Отгадано число ${answer} с ${attempts} раза`)
};
export default gameEngine
