// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const serveStatic = require('serve-static')

const dev = !process.env.NODE_ENV || process.env.NODE_ENV.trim() !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const handleStaticFiles = serveStatic("files")

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl;
    
    console.log('call');
    handleStaticFiles(req, res, () => {
      console.log('next');
      handle(req, res, parsedUrl)
    });
  }).listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})