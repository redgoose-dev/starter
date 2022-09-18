import api from './api/index.js'

/**
 * server
 *
 * @param {Express} app
 */
function server(app)
{
  app.use('/api', api)
  app.use('/foo', (req, res) => res.end('page-foo'))
}

export default server
