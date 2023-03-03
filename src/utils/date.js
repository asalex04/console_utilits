import moment from 'moment'
import getArgs from '../utilits/getArgs.js';

const checkArr = ['month', 'y', 'd']

const dateFunctions = {
    month: moment().month(),
    y: moment().year(),
    d: moment().date(),
}

const args = getArgs()
const cmd = args._[0]

const getDate = () => {
    const actArgs = Object.entries(args)
        .filter(([key]) => checkArr.includes(key))
    if (actArgs.length === 0) {
        console.log(moment().format())
    } else {
        const [period, col] = actArgs[0]
        // eslint-disable-next-line no-nested-ternary
        cmd === 'current'
            ? console.log(dateFunctions[period])
            : cmd === 'add'
                ? console.log(moment().add(col, period).format())
                : console.log(moment().subtract(col, period).format())
    }
}

export default getDate
