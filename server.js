import fs from 'fs';
import path from 'path';
import express from 'express';
import { createServer } from 'vite';

const __dirname = path.resolve();

async function server()
{
  const app = express();
  const vite = await createServer({
    server: { middlewareMode: 'ssr' },
  });
  app.use(vite.middlewares);
  app.use('*', async (req, res) => {
    try
    {
      const url = req.originalUrl;
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf8'
      );
      template = await vite.transformIndexHtml(url, template);
      const { render } = await vite.ssrLoadModule('/src/entry-server.js');
      const appHtml = await render(url);
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);
      console.log(html)
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    }
    catch(e)
    {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });
  app.listen(3000);
}


server();
