import express, { Application } from 'express'
import userController from './controllers/userController'
const router = express.Router();

router.get('/echo', userController.all)
export default function (server: Application) {
  server.use('/users', router)
}
