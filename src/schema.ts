import { genPosts } from "./schema/posts";
import { genUsers } from "./schema/users";


export default {
  users: genUsers(5),
  posts: genPosts(5)
}