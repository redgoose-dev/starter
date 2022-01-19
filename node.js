import path from 'path';
import express from 'express';
import { createServer, build } from 'vite';
import expand from './expand/index.js';

const __dirname = path.resolve();

;(async () => {

  const configFile = __dirname + '/vite.config.js';

  switch (process.argv[2])
  {
    case 'dev':
      const server = await createServer({
        configFile,
        mode: 'development',
        server: { middlewareMode: 'ssr' }
      });
      expand(server);
      // await server.listen();
      // console.log(server.middlewares)
      // server.printUrls();
      break;

    case 'build':
      await build({
        configFile,
      });
      break;

    case 'preview':
      const previewServer = await createServer({
        configFile,
        mode: 'production',
      });
      expand(previewServer);
      break;

    default:
      console.group('Usage:');
      const filename = process.argv[1].split('/').slice(-1)[0];
      console.log(`${filename} [dev|build|preview]`);
      console.groupEnd();
      break;
  }

})();
