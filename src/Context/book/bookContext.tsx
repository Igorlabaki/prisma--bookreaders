import {createContext,Dispatch,ReactNode,SetStateAction,useState} from 'react'
import axios from 'axios'

interface ContextProvider {
    children: ReactNode
}

interface Book{
    id                   ?:string,
    searchInfo?:{
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

        imageLinks?:{
            smallThumbnail ?: string
            thumbnail       ?: string
        }
    }
}


interface BookContext{
    book:               Book 
    booksList?:         Book[],
    booksSearch?:       Book[], 
    authorsList?:       Book[],
    loading?:           boolean,
    currentBookPage?:   number
    booksPerPage?:      number
    setCurrentBookPage?:Dispatch<SetStateAction<number>>
    setAuthorList?:Dispatch<SetStateAction<any>>
    getAllBooks?:       (bookSearch:any) => void
    getBooks?:          (bookSearch:any, maxResult?: number) => void
    getBookByAuthor?:   (bookSearch:any, author?: string) => void
    getBook?:           (id:any) => void
}

export const BookContext = createContext<BookContext>({
    book: null,
})

export function BookContextProvider({children}: ContextProvider){
   
    const [book, setBook]                       = useState<Book | null>(null);
    const [booksList, setBooksList]             = useState<Book[]>([]);
    const [booksSearch, setBooksSearch]         = useState<Book[]>([]);
    const [loading, setLoading]                 = useState<boolean>(false);
    const [currentBookPage, setCurrentBookPage] = useState<number>(1);
    const [booksPerPage, setBooksPerPage]       = useState<number>(5);
    const [authorsList, setAuthorList]          = useState<Book[]>([]);

    async function  getBooks(bookSearch:any,maxResults = 10){
        const resp = await axios.get(`https://www.googleapis.com/books/v1/volumes/?q=${bookSearch}&key=AIzaSyCQPpX0QFUTs45EhUe1Ou5FNjEAjjvtYRQ&maxResults=${maxResults}`)
                   .then(resp => resp.data.items) 
        setBooksSearch(resp)
    }

    async function  getAllBooks(bookSearch:any){
        setLoading(true)
        const resp = await axios.get(`https://www.googleapis.com/books/v1/volumes/?q=${bookSearch}&key=AIzaSyCQPpX0QFUTs45EhUe1Ou5FNjEAjjvtYRQ&maxResults=40`)
                   .then(resp => resp.data.items) 
        setBooksList(resp)
        setLoading(false)
    }

    async function  getBook(id:any){
        const resp = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
                   .then(resp => resp.data)
        setBook(resp)
    }

    async function  getBookByAuthor(author:string){
        setLoading(true)
        const list = []
        setAuthorList(list)
        const authorTrim = author?.replace(' ' , '+')
        const url = `q=a+inauthor:${authorTrim}`
  
        const resp = await axios.get(`https://www.googleapis.com/books/v1/volumes?${url}&key=AIzaSyCQPpX0QFUTs45EhUe1Ou5FNjEAjjvtYRQ`)
                   .then(resp => setAuthorList(resp.data.items))
        setTimeout(() => setLoading(false), 2000)
    }

    return(
        <BookContext.Provider value={{  
            book,
            booksList,
            booksSearch,
            authorsList,
            loading,
            currentBookPage,
            setCurrentBookPage,
            getBookByAuthor,
            booksPerPage,
            getBook,
            getBooks,
            getAllBooks,
            setAuthorList
        }}>
            {children}
        </BookContext.Provider>
    )
}