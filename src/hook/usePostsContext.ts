import { useContext } from "react";

import {PostsContext} from '../Context/posts/postsContext'

const usePostsContext = () => useContext(PostsContext)

export default usePostsContext