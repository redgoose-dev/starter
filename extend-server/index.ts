import * as http from 'http';
import { ViteDevServer } from 'vite';

/**
 * extend server
 *
 * @param {ViteDevServer} server
 */
function extendServer(server: ViteDevServer): void
{
  // sample route
  server.middlewares.use('/foo', (req: http.IncomingMessage, res: http.ServerResponse): void => {
    // return your mock data.
    res.end('this is foo.')
  });
}

export default extendServer;
