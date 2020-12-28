
import { genUsers } from '../schema/users';

export default {
  /**
  * @swagger
  * /users/echo:
  *   get:
  *     description: Returns users
  *     tags:
  *      - Users
  *     produces:
  *      - application/json
  *     responses:
  *       200:
  *         description: let
  */
  async all(req: Request, res: any) {
    const data = await genUsers(5);
    res.jsonp({
      data
    })
  }

}




