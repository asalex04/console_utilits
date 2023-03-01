import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

const rl = readline.createInterface({ input, output })

export default async function getUserName() {
    const name = await rl.question('May I have your name? ')
    console.log(`Hello, ${name}`)
    rl.close()
}
