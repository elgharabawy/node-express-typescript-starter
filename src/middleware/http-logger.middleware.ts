import morgan from 'morgan'

import logger from '../common/logger'

const httpLogger = morgan('tiny',
  {
    stream: {
      write: (message) => logger.http(message.trim()),
    },
  }
)

export { httpLogger }