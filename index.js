const jsonServer = require('json-server')
const server = jsonServer.create()
const routerLookAfter = jsonServer.router('feracode/look-after.json')
const routerVUTTR = jsonServer.router('vuttr/vuttr.json')
const evolucionalJoBTest = jsonServer.router('evolucional/job-test.json')
const middlewares = jsonServer.defaults()

const getAuth = name => (process.env[name] || process.env.AUTHORIZATION);

// Use port from Heroku, fall back to default port
const port = process.env.PORT || 3000;

const AuhMiddleware = (authorization) => (req, res, next) => {
  if (req.headers['authorization'] === authorization) {
    return next();
  }
  return res.status(401).send();
}


routerLookAfter.render = (req, res) => {
  res.status(500).jsonp({
    error: "error message here"
  })
}

server.use(middlewares)

server.use(
  jsonServer.rewriter({
    '/evolucional/job-test/student/*': '/evolucional/job-test/students/$1',
  })
)

server.use('/feracode/look-after', AuhMiddleware(getAuth('AUTH_FERACODE')), routerLookAfter);
server.use('/vuttr', AuhMiddleware(getAuth('AUTH_VUTTR')), routerVUTTR);
server.use('/evolucional/job-test', AuhMiddleware(getAuth('AUTH_EVOLUCIONAL')), evolucionalJoBTest);

server.listen(port, () => {
  console.log('JSON Server is running')
});