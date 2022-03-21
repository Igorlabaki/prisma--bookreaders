import {createContext,Dispatch,ReactNode,SetStateAction,useState} from 'react'
import axios from 'axios'
import { Books } from '@prisma/client'
import usePostsContext from '../../hook/usePostsContext'

interface ContextProvider {
    children: ReactNode
}

interface book{
    id                   ?:string,
    searchInfo:{
        textSnippet ?:    string
    }
    volumeInfo: {
        title           ?: string
        subtitle        ?: string
        authors         ?: string[]
        publishedDate   ?: string,
        description     ?: string,
        pageCount       ?: number,
        categories      ?: string[]

        imageLinks:{
            smallThumbnail ?: string
            thumbnail       ?: string
        }
    }
}

interface BookContext{
    book:               book ,
    bookId?:              String 
    booksList?:         book[],
    booksSearch?:       book[], 
    authorsList?:       book[],
    isLoading?:           boolean,
    currentBookPage?:   number
    booksPerPage?:      number
    createBook?:        (bookInput:book,text: string,userId:string,typeList:string) => void
    setCurrentBookPage?:Dispatch<SetStateAction<number>>
    setBookId?          :Dispatch<SetStateAction<String>>
    setAuthorList?:Dispatch<SetStateAction<any>>
    getAllBooks?:       (bookSearch:any) => void
    getBooks?:          (bookSearch:any, maxResult?: number) => void
    getBookByAuthor?:   (bookSearch:any, author?: string) => void
    getBook?:           (id:any) => void
    bookDb?:           any
}

export const BookContext = createContext<BookContext>({
    book: null,
})

export function BookContextProvider({children}: ContextProvider){

    const {createBookPost} = usePostsContext()
   
    const [book, setBook]                       = useState<book | null>(null);
    const [bookDb, setBookDb]                       = useState<any>(null);
    const [booksList, setBooksList]             = useState<book[]>([]);
    const [booksSearch, setBooksSearch]         = useState<book[]>([]);
    const [isLoading, setIsLoading]                 = useState<boolean>(false);
    const [currentBookPage, setCurrentBookPage]         = useState<number>(1);
    const [booksPerPage, setBooksPerPage]       = useState<number>(5);
    const [authorsList, setAuthorList]          = useState<book[]>([]);
    const [bookId, setBookId]                       = useState<String>();


    async function  getBooks(bookSearch:any,maxResults = 10){
        const resp = await axios.get(`https://www.googleapis.com/books/v1/volumes/?q=${bookSearch}&key=AIzaSyCQPpX0QFUTs45EhUe1Ou5FNjEAjjvtYRQ&maxResults=${maxResults}`)
                   .then(resp => resp.data.items) 
        setBooksSearch(resp)
    }



    async function  getAllBooks(bookSearch:any){
        setIsLoading(true)
        const resp = await axios.get(`https://www.googleapis.com/books/v1/volumes/?q=${bookSearch}&key=AIzaSyCQPpX0QFUTs45EhUe1Ou5FNjEAjjvtYRQ&maxResults=40`)
                   .then(resp => resp.data.items) 
        setBooksList(resp)
        setIsLoading(false)
    }

    async function  getBook(id:any){
        const resp = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
                   .then(resp => resp.data)
        setBook(resp)
    }

    async function  getBookByAuthor(author:string){
        setIsLoading(true)
        const list = []
        setAuthorList(list)
        const authorTrim = author?.replace(' ' , '+')
        const url = `q=a+inauthor:${authorTrim}`
  
        const resp = await axios.get(`https://www.googleapis.com/books/v1/volumes?${url}&key=AIzaSyCQPpX0QFUTs45EhUe1Ou5FNjEAjjvtYRQ`)
                   .then(resp => setAuthorList(resp.data.items))
        setTimeout(() => setIsLoading(false), 2000)
    }
    
    async function  createBook (bookInput: book,text: string,userId:string,typeList:string){
        setIsLoading(true)
        let info = {
            book: bookInput,
            list: typeList,
            userId: userId
        }
        try {
            const response = await fetch('/api/book/create-book',{
                method:'POST',
                body: JSON.stringify(info)
            })
            const result    = await response.json()
            createBookPost(
                text,
                result.id,
                userId,
            )
        } 
        catch (error) {
            console.log(error) 
        }
        setTimeout(() => setIsLoading(false),3000)
    }

    async function  updateListBook(typeList:string, bookId: string){
        setIsLoading(true)
        const info = {
            typeList: typeList,
            bookId: bookId
        }
        try {
            const response = await fetch('/api/book/update-list-book',{
                method:'POST',
                body: JSON.stringify(info)
            })
            const result    = await response.json()
        } 
        catch (error) {
            console.log(error) 
        }
        setTimeout(() => setIsLoading(false),3000)
    }



    return(
        <BookContext.Provider value={{  
            book,
            booksList,
            booksSearch,
            authorsList,
            isLoading,
            currentBookPage,
            setCurrentBookPage,
            getBookByAuthor,
            createBook,
            booksPerPage,
            getBook,
            getBooks,
            getAllBooks,
            setAuthorList,
            bookId,
            setBookId,
            bookDb
        }}>
            {children}
        </BookContext.Provider>
    )
}