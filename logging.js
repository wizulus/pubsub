const Log4js = require('log4js')

const logLevels = ['all', 'trace', 'debug', 'info', 'warn', 'error', 'fatal', 'mark', 'off']
exports.logLevels = logLevels
/** @typedef {'all'|'trace'|'debug'|'info'|'warn'|'error'|'fatal'|'mark'|'off'} LogLevel */

let logLevel = process.env.LOG_LEVEL || 'info'
if (!logLevels.includes(logLevel)) {
  console.warn(`Invalid log level: ${logLevel}. Valid levels are: ${logLevels.join(', ')}.`)
  logLevel = 'info'
}

const log4js = Log4js.configure({
  appenders: {
    out: {
      type: 'stdout'
    }
  },
  categories: {
    default: {
      appenders: ['out'],
      level: logLevel
    }
  }
})

function getLogger (name) {
  return log4js.getLogger(name)
}

exports.getLogger = getLogger
