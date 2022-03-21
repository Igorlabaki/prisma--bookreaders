import { useEffect }            from "react";
import { TiPlus }               from 'react-icons/ti';
import { useRouter }            from "next/router";

import { BookContainer, SearchContainer, TextContainer,UserReviewContainer } from "./style";
import useBookContext from "../../../../../hook/useBookContext";
import usePaginationContext from "../../../../../hook/usePaginationContext";
import usePostsContext from "../../../../../hook/usePostsContext";
import useModalContext from "../../../../../hook/useModalContext";
import ModalComponent from "./Modal";
import useUserContext from "../../../../../hook/useUserContext";
import { BoxComponent } from "../../../util/Box";
import { PaginationComponent } from "../../../util/pagination";


interface SearchProps{
    search?:any
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

export function SearchListComponent({search}: SearchProps){

    const {getAllBooks,booksList,getBook} = useBookContext()
    const {currentPage, setCurrentPage, elementsPerPage} = usePaginationContext()
    const {} = usePostsContext()
    const {user} = useUserContext()
    const {handleOpenPostBookModal} = useModalContext()
    const router = useRouter()
    
    useEffect(() => {
        getAllBooks(search.list)
    }, [search.list])
    
    const indexOfLastBook   = currentPage       * elementsPerPage
    const indexOfFirstPost  = indexOfLastBook       - elementsPerPage
    const currentBooks      = booksList.slice(indexOfFirstPost,indexOfLastBook)
    
    return(
        <SearchContainer>
            {currentBooks.map((book: book) => 
                <BoxComponent title={book.volumeInfo.title} key={book.id}>
                    <BookContainer>
                    {
                        book.volumeInfo.imageLinks ?
                            <img src={book.volumeInfo.imageLinks?.thumbnail} alt="" />
                        :
                            <img src="/images/photos/book-default.jpg" alt="" />

                    }
                    <TextContainer>
                        <h3>{book.volumeInfo?.subtitle}</h3>
                            <p><strong>Author:</strong>&nbsp;{book.volumeInfo?.authors?.at(0)}</p>
                            <p><strong>Category:</strong>&nbsp;{book.volumeInfo?.categories?.at(0)}</p>
                            <p>{book.volumeInfo?.description?.slice(0,500)}</p>
                            <div>
                                <p><strong>Published:<strong/></strong>&nbsp;{book.volumeInfo?.publishedDate}</p>
                                <p><strong>Pages:<strong/></strong>&nbsp;{book.volumeInfo?.pageCount}</p>
                            </div>
                    </TextContainer>
                    <UserReviewContainer>
                        <p onClick={() => 
                            {router.push(`/search/id/${book.id}`)}
                        }>More details</p>
                        <button 
                            onClick={(e) => {
                                e.preventDefault(); 
                                getBook(book.id)
                                handleOpenPostBookModal()
                            }
                        }
                        >
                            <TiPlus/> <span>Add in your list</span> 
                        </button>
                        <ModalComponent/>
                    </UserReviewContainer>
                    </BookContainer>
                </BoxComponent>
            )}
            <PaginationComponent type="books"/>
        </SearchContainer>
    )
}
