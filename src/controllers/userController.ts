import express from 'express'
const router = express.Router();
import { genUsers } from '../schema/users';



/**
  * @swagger
  * /users:
  *   get:
  *     description: Returns users
  *     tags:
  *      - Users
  *     produces:
  *      - application/json
  *     responses:
  *       200:
  *         description: users
  */
router.get('/echo', async (req, res) => {
  const data = await genUsers(5);
  res.jsonp({
    data
  })
})


export default router;