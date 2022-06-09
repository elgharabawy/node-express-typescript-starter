import winston from 'winston'

const { combine, timestamp, json } = winston.format

const logger = winston.createLogger({
  level: 'http',
  format: combine(timestamp(), json()),
  transports: [
    // prod transports
  ]
})

// add transports accordingly
// Winston supports (console, file, http, stream)

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }))
}

export { logger as default }