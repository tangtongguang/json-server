import { Application } from 'express'

import userRouter from './controllers/userController'
export default function (server: Application) {
  server.use('/users', userRouter)
}