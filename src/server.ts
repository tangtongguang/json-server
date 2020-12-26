import { green } from 'chalk';
import jsonServer from 'json-server';
import path from 'path';
import addRoute from './router'
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
server.use(middlewares);

addRoute(server)
// Add custom routes before JSON Server router

server.use(router)
server.listen(3000, () => {
  console.log(green('JSON server is running'))
})