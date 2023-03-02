import readlineSync from 'readline-sync'

const gameEngine = async (TASK, getGameData) => {
    console.log('Давай сыграем в игру "Загадай число"\n')
    let answer = await readlineSync.question(`${TASK}\n`)
    const question = getGameData()
    while (answer !== question) {
        answer = (answer > question)
            ? readlineSync.question('Меньше\n')
            : readlineSync.question('Больше\n')
    }
    console.log(`Отгадано число ${answer}`)
};
export default gameEngine
