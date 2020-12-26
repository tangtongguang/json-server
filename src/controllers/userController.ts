import express from 'express'
const router = express.Router();
import { genUsers } from '../schema/users';
router.get('/echo', async (req, res) => {
  const data = await genUsers(5);
  res.jsonp({
    data
  })
})
export default router;