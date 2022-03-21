import {createContext,Dispatch,ReactNode,SetStateAction,useState} from 'react'
import axios from 'axios'
import { Books, Users, UsersBooks } from '@prisma/client'
import usePostsContext from '../../hook/usePostsContext'

interface ContextProvider {
    children: ReactNode
}

interface MemberContext{
    member?:        any
    lastRead?:        any
    averagePages?:        any
    longestBook?:        any
    lastBookPosted?:        any
    shortestBook?:        any
    memberBooks?:   any[]
    getLongestBook?: any
    getShortestBook?: any
    getAveragePages?: any
    pagesRead?:     number
    isLoading?:     boolean
    getPagesRead?:     () => void
    getList?:     () => void
    getMember?:     (id:string) => void
    getBooksMember?:(id:string) => void
}

export const MemberContext = createContext<MemberContext>({

})

export function MemberContextProvider({children}: ContextProvider){

    const [member, setMember]   = useState<any>(null)
    const [memberBooks, setMemberBooks]   = useState<any[]>(null)
    const [lastBookPosted,setLastBookPosted]= useState<any>()
    const [booksRead, setBookRead] = useState()
    const [pagesRead, setPagesRead] = useState<number>(0)
    const [averagePages,setAveragePages]    = useState(0)
    const [longestBook,setlongestBook]      = useState()
    const [shortestBook,setShortestBook]    = useState()
    const [lastRead,setLastRead]    = useState()
    const [isLoading,setIsLoading]    = useState(true)

    const {getUserPots} = usePostsContext()

    async function  getBooksMember(id:string){
        setIsLoading(true)
        try {
            const response  = await fetch('/api/user/get-books-member',{
                method:'POST',
                body: JSON.stringify(id)
            }) 
            const result    = await response.json()
            setMemberBooks(result)
            getUserPots(id)
            getList()
        } catch (error) {  
            console.log(error)   
        }
        setTimeout(() => setIsLoading(false),3000)
    }

    function  getPagesRead(){
        let counter = 0
        memberBooks?.map((item) => {
            counter =  item.book.pageCount.valueOf() + counter
        })
        setPagesRead(counter)
    }

    async function  getMember(id:string){
        try {
            const response  = await fetch('/api/user/get-member',{
                method:'POST',
                body: JSON.stringify(id)
            }) 
            const result    = await response.json()
            setMember(result)
            getBooksMember(id)
        } catch (error) {
            console.log(error)      
        }
    }

    const getLongestBook = () => {
        function compare(a,b) {
            if (a.book.pageCount < b.book.pageCount)
               return 1;
            if (a.book.pageCount > b.book.pageCount)
              return -1;
            return 0;
        }

        setlongestBook(memberBooks?.sort(compare)[0])

    }

    const getShortestBook = () => {
        function compare(a,b) {
            if (a.book.pageCount < b.book.pageCount)
               return -1;
            if (a.book.pageCount > b.book.pageCount)
              return 1;
            return 0;
        }
        setShortestBook(memberBooks?.sort(compare)[0])
    }

    const getAveragePages = () => {
        let list = []
        memberBooks?.map((item) => list.push(item.book.pageCount))
        var soma = 0;
        for(var i = 0; i < list.length; i++) {
            soma += list[i];
        }
        const average = Math.ceil(soma / list.length)
        setAveragePages(average)
    }

    const getLastRead = () => {
        function compare(a,b) {
            if (a.book.created_at < b.book.created_at)
               return 1;
            if (a.book.created_at > b.book.created_at)
              return -1;
            return 0;
        }
        setLastRead(memberBooks?.sort(compare)[0])
    }

    const getList = () => {
        getPagesRead()
        getAveragePages()
        getLongestBook()
        getShortestBook()
        getLastRead()
    }




    return(
        <MemberContext.Provider value={{  
            getMember,
            getBooksMember,
            getList,
            lastRead,
            lastBookPosted,
            getPagesRead,
            pagesRead,
            getLongestBook,
            getShortestBook,
            getAveragePages,
            member,
            memberBooks,
            shortestBook,
            averagePages,
            longestBook,
            isLoading
        }}>
            {children}
        </MemberContext.Provider>
    )
}