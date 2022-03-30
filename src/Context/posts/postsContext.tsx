import { Books, Comments, Posts } from '@prisma/client'
import {createContext,Dispatch,ReactNode,SetStateAction,useState} from 'react'
import useUserContext from '../../hook/useUserContext'


interface ContextProvider {
    children: ReactNode
}

interface PostsContext{
    error                   ?:string,
    isLoading               ?:boolean,
    posts                   ?:any[]
    comments                ?:any[]
    userPosts               ?:any[]
    createPost              ?:(post: object)  => void,
    createComment           ?:(post: object)  => void,
    createLike              ?:(post: object,userId:String)  => void,
    createBookPost          ?:(postText: String,bookInputId:String,userInputId:String)  => void,
    deletePost              ?:(postId: String) => void,
    deleteComment           ?:(postId: String) => void,
    deleteLike              ?:(likeId: String) => void,
    getAllPosts?:           () => void,
    getUserPots?:           (userId:String) => void,
    currentPostPage?:       number
    postsPerPage?:          number
    setCurrentPostPage?:    Dispatch<SetStateAction<number>>
}

export const PostsContext = createContext<PostsContext>({
    isLoading:  null
})

export function PostsContextProvider({children}: ContextProvider){

    const {user} = useUserContext()
    
    const [posts, setPosts]                 = useState<Posts[]>([]);
    const [userPosts, setUserPosts]                 = useState<Posts[]>([]);
    const [comments, setComments]           = useState<Comments[]>([]);
    const [post, setPost]                   = useState<Object>();
    const [error,setError]                  = useState(null)
    const [isLoading,setIsLoading]          = useState(false)
    const [currentPostPage, setCurrentPostPage] = useState<number>(1);
    const [postsPerPage, setPostsPerPage]   = useState<number>(5);

    function showError(msg,time = 3000){
        setError(msg)
        setTimeout(() => setError(null),time )
    }

    async function  getAllPosts (){
        setIsLoading(true)
        try {
            const response  = await fetch('/api/post/getAllPosts') 
            const result    = await response.json()
            setPosts(result)
        } catch (error) {
            console.log(error)  
            console.log(error.message)    
        }
        setTimeout(() => setIsLoading(false),3000)
    }

    async function  getUserPots (userId : string){
        setIsLoading(true)
        try {
            setUserPosts([])
            const response  = await fetch('/api/post/get-user-posts',{
                method:'POST',
                body:JSON.stringify(userId)
            }) 
            const result    = await response.json()
            setUserPosts(result)
        } catch (error) {
            console.log(error)          
        }
        setTimeout(() => setIsLoading(false),3000)
    }

    
    async function  createPost (postInput: Posts){
        if(postInput.text != ""){
            setIsLoading(true)
            try {
               await fetch('/api/post/create-post',{
                    method:'POST',
                    body: JSON.stringify(postInput)
               })
               getAllPosts()
            } 
            catch (error) {
                console.log(error) 
            }
            setTimeout(() => setIsLoading(false),3000)
        }else{
            showError('',3000)
        }
    }

     
    async function  createBookPost (postText: string, bookInputId:String, userInputId:String){
        if(postText != ""){
            setIsLoading(true)
            const postBookInput = {
                bookId: bookInputId,
                userId: userInputId,
                postText: postText,
            }
            try {
               await fetch('/api/post/create-book-post',{
                    method:'POST',
                    body: JSON.stringify(postBookInput)
               })
               getAllPosts()
            } 
            catch (error) {
                console.log(error) 
            }
            setTimeout(() => setIsLoading(false),3000)
        }else{
            showError('',3000)
        }
    }


    async function  createComment (postInput: Posts){
        if(postInput.text != ""){
            setIsLoading(true)
            try {
               await fetch('/api/post/create-comment',{
                    method:'POST',
                    body: JSON.stringify(postInput)
               })
               getAllPosts()
            } 
            catch (error) {
                console.log(error) 
            }
            setTimeout(() => setIsLoading(false),3000)
        }else{
            showError('',3000)
        }
    }

    async function  createLike (post: Posts,userId:String){
            setIsLoading(true)
            const inputLike = {
                idP : post.id,
                idU : userId
            }
            try {
               await fetch('/api/post/create-like',{
                    method:'POST',
                    body: JSON.stringify(inputLike)
               })
               getAllPosts()
            } 
            catch (error) {
                console.log(error) 
            }
            setTimeout(() => setIsLoading(false),3000)
    }

    async function  deletePost (postId: String){
        setIsLoading(true)
           
            try {
                await fetch('/api/post/delete-post',{
                    method:'POST',
                    body: JSON.stringify(postId)
                }) 
                getAllPosts() 
            } catch (error) {
                console.log(error) 
            }

        setTimeout(() => setIsLoading(false),3000)
    }

    async function  deleteComment (commentId: String){
        setIsLoading(true)
            try {
                await fetch('/api/post/delete-comments',{
                    method:'POST',
                    body: JSON.stringify(commentId)
                }) 
                getAllPosts() 
            } catch (error) {
                console.log(error) 
            }

        setTimeout(() => setIsLoading(false),3000)
    }

    async function  deleteLike (likeId: String){
        setIsLoading(true)
            try {
                await fetch('/api/post/delete-like',{
                    method:'POST',
                    body: JSON.stringify(likeId)
                }) 
                getAllPosts() 
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
            getUserPots,
            deletePost,
            deleteComment,
            createComment,
            createLike,
            deleteLike,
            createBookPost,
            comments,
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