import { Posts, Users } from '@prisma/client'
import {createContext,Dispatch,ReactNode,SetStateAction,useState} from 'react'
import useUserContext from '../../hook/useUserContext'


interface ContextProvider {
    children: ReactNode
}

interface PostsContext{
    error?:                 string,
    isLoading?:             boolean,
    posts?:                 any[]
    userPosts?:             any[]
    createPost?:            (post: object) => void,
    getAllPosts?:           () => void,
    currentPostPage?:       number
    postsPerPage?:          number
    setCurrentPostPage?:    Dispatch<SetStateAction<number>>
}

export const PostsContext = createContext<PostsContext>({
    isLoading:  null
})

export function PostsContextProvider({children}: ContextProvider){

    const {user} = useUserContext()
    
    const [posts, setPosts]                 = useState([]);
    const [post, setPost]                   = useState<Object>();
    const [error,setError]                  = useState(null)
    const [userPosts, setUserPosts]         = useState([]); 
    const [isLoading,setIsLoading]          = useState(false)
    const [currentPostPage, setCurrentPostPage] = useState<number>(1);
    const [postsPerPage, setPostsPerPage]   = useState<number>(5);

    function showError(msg,time = 3000){
        setError(msg)
        setTimeout(() => setError(null),time )
    }

   
    async function  createPost (postInput: Posts){
        if(postInput.text != ""){
            setIsLoading(true)
            try {
                const response = await fetch('/api/post/create-post',{
                    method:'POST',
                    body: JSON.stringify(postInput)
               }) 
               const result = await response.json()

               setPosts(result)
            } catch (error) {
                    
            }
            setTimeout(() => setIsLoading(false),3000)
        }else{
            showError('',3000)
        }
    }

    async function  getAllPosts (){
        setIsLoading(true)
        try {
            const response = await fetch('/api/post/getAllPosts',{ method:'GET' }) 
            const result = await response.json()
            setPosts(result)
        } catch (error) {
            console.log(error)          
        }
        setTimeout(() => setIsLoading(false),3000)
    }




    return(
        <PostsContext.Provider value={{
            createPost, 
            setCurrentPostPage,
            getAllPosts,
            currentPostPage,
            postsPerPage,
            isLoading,
            error,
            posts,
            userPosts
        }}>
            {children}
        </PostsContext.Provider>
    )
}