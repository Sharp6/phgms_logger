var winston = require('winston');

var logger = new winston.Logger({
	transports: [
		new winston.transports.File({
			level: 'info',
			filename: '../logs/all.log',
			handleExceptions: true,
			json: true,
			maxsize: 20000000,
			maxFiles: 5,
			colorize: false
		}),
		new winston.transports.Console({
			level: 'info',
			handleExceptions: true,
			json: false,
			colorize: true
		})
	],
	exitOnError: false
});

module.exports = logger;