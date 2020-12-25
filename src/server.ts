import { green } from 'chalk';
import jsonServer from 'json-server';
import path from 'path';
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));

server.use(router)

server.listen(3000, () => {
  console.log(green('JSON server is running'))
})