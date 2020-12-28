import { green } from 'chalk';
import jsonServer from 'json-server';
import path from 'path';
import addRoute from './router'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const PORT = 3000;

const swaggerDefinition = {
  info: {
    // API informations (required)
    title: 'Hello World', // Title (required)
    version: '1.0.0', // Version (required)
    description: 'A sample API', // Description (optional)
  },
  host: `localhost:${PORT}`, // Host (optional)
  basePath: '/', // Base path (optional)
};


// Options for the swagger docs
const options = {
  // Import swaggerDefinitions
  swaggerDefinition,
  // Path to the API docs
  // Note that this path is relative to the current directory from which the Node.js is ran, not the application itself.
  apis: [path.join(__dirname, './controllers/*.ts'),
    //'./examples/app/parameters.yaml'
  ],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJsdoc(options);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})
addRoute(server)

// Serve swagger docs the way you like (Recommendation: swagger-tools)
server.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Add custom routes before JSON Server router

server.use(router)


server.listen(PORT, () => {
  console.log(green('JSON server is running'))
})