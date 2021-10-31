const chalk = require('chalk');
const sym = require('log-symbols');

const redI = chalk.red.inverse;
const greenI = chalk.green.inverse;
const yellowI = chalk.yellow.inverse;
const blueI = chalk.blue.inverse;
const red = chalk.red;
const green = chalk.green;
const yellow = chalk.yellow;
const blue = chalk.blue;

module.exports = options => {
	const defaultOptions = {
		type: `error`,
		msg: `You forgot to specify all options`,
		name: ``
	};
	const opts = {...defaultOptions, ...options};
	const {type, msg, name} = opts;

	const printName = name ? name : type.toUpperCase();

	if (type === `error`) {
		console.log(`\n${sym.error} ${redI(` ${printName} `)} ${red(msg)}\n`);
	} else if (type === `success`) {
		console.log(`\n${sym.success} ${greenI(` ${printName} `)} ${green(msg)}\n`);
	} else if (type === `warning`) {
		console.log(`\n${sym.warning} ${yellowI(` ${printName} `)} ${yellow(msg)}\n`);
	} else if (type === `info`) {
		console.log(`\n${sym.info} ${blueI(` ${printName} `)} ${blue(msg)}\n`);
	}
};
