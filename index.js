const jsonServer = require('json-server')
const server = jsonServer.create()
const routerLookAfter = jsonServer.router('feracode/look-after.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.use('/feracode/look-after', routerLookAfter);

server.listen(process.env.PORT ||3000, () => {
  console.log('JSON Server is running')
})