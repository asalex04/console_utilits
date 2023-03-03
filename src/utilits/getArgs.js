import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const getArgs = () => {
    const { argv } = yargs(hideBin(process.argv))
        .scriptName('date')
        .example(
            '$0 current --month',
            'Returns the current month in format ISO.',
        )
        .option('y', { alias: 'year' })
        .option('m', { alias: 'month' })
        .option('d', { alias: 'date' })
        .option('h', { alias: 'help', describe: ('Show help.') })
        .alias('version', 'v')
        .command({ command: 'current', describe: 'get date' })
        .command({ command: 'add', describe: 'move date forward' })
        .command({ command: 'sub', describe: 'move date back' })
        .epilog('copyright 2023');
    return argv
}
export default getArgs
