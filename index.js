const jsonServer = require('json-server')
const server = jsonServer.create()
const routerLookAfter = jsonServer.router('feracode/look-after.json')
const routerVUTTR = jsonServer.router('vuttr/vuttr.json')
const middlewares = jsonServer.defaults()

const getAuth = name => (process.env[name] || process.env.AUTHORIZATION);

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

server.use('/feracode/look-after', AuhMiddleware(getAuth('AUTH_FERACODE')), routerLookAfter);
server.use('/vuttr', AuhMiddleware(getAuth('AUTH_VUTTR')), routerVUTTR);

server.listen(process.env.PORT ||3000, () => {
  console.log('JSON Server is running')
});