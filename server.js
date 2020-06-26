// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const { join } = require('path')

const dev = !process.env.NODE_ENV || process.env.NODE_ENV.trim() !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl;
    
    if (pathname.startsWith('/images/')) {
      app._validFilesystemPathSet = null;
      const path = join(__dirname, 'public', parsedUrl.pathname);
      app.serveStatic(req, res, path, parsedUrl);
    }
    else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})