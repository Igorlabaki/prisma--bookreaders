import { useEffect }    from "react";
import { useRouter }    from 'next/router'
import { BookContainer, TextContainer, SearchContainer, AuthorBookContainer,AddBookContainer } from "./style";
import useBookContext   from "../../../../../hook/useBookContext";
import { TiPlus }               from 'react-icons/ti';
import usePostsContext from "../../../../../hook/usePostsContext";
import useModalContext from "../../../../../hook/useModalContext";
import ModalComponent from "../list/Modal";
import { BoxComponent } from "../../../util/Box";
import { LoadingComponent } from "../../../util/Loading";
import { FeedComponent } from "../../../util/Feed";
import { InputPostComponent } from "../../../util/inputPost";

interface SearchProps{
    id?:any
}

export function SearchComponent({id}: SearchProps){

    const {getBook,book,getBookByAuthor,authorsList,isLoading,setAuthorList} = useBookContext()
    const {handleOpenPostBookModal} = useModalContext()
    const router = useRouter()

    useEffect(() => {
        getBookByAuthor(book?.volumeInfo?.authors[0])
        getBook(id)
    }, [router.asPath])

    
    function handleBookRender(){
        if(book){
            return (
                <>
                    <BookContainer>
                    <AddBookContainer>
                        {
                            book?.volumeInfo?.imageLinks ?
                                <img src={book?.volumeInfo?.imageLinks?.thumbnail} alt="" />   
                            :
                                <img src='/images/photos/book-default' alt="" /> 
                        }
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
                                </AddBookContainer>
                        <TextContainer>
                            <h1>{book.volumeInfo.title}</h1>
                           
                                <h2>{book.volumeInfo.subtitle}</h2>
                            
                            <p><strong>Author:</strong>&nbsp;{book.volumeInfo.authors?.at(0)}</p>
                            <p><strong>Category:</strong>&nbsp;{book.volumeInfo?.categories?.at(0)}</p>
                            <div>
                                <p><strong>Published:<strong/></strong>&nbsp;{book.volumeInfo.publishedDate}</p>
                                <p><strong>Pages:<strong/></strong>&nbsp;{book.volumeInfo.pageCount}</p>
                            </div>
                            <div>{book.volumeInfo.description}</div>
                        </TextContainer>
                    </BookContainer>
                    <InputPostComponent/>
                    <BoxComponent title={`Others books written by ${book.volumeInfo?.authors[0]}`}>
                        {isLoading ? 
                            <>
                            <LoadingComponent/>
                            Carregando...
                            </>
                        :
                            <AuthorBookContainer>
                                {authorsList?.map((book,i) => {
                                    return (
                                            <div key={i} onClick={() => router.push(`/search/id/${book.id}`)}>
                                                {
                                                    book.volumeInfo?.imageLinks ?
                                                        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="" />   
                                                    :
                                                        <img src='/images/photos/book-default' alt="" /> 
                                                }
                                                <h4>{book.volumeInfo?.title}</h4>
                                            </div>
                                )}
                                )}
                                <ModalComponent/>
                            </AuthorBookContainer>
                        }
                    </BoxComponent>
                </>
            )
        }else{
            <BookContainer>
                <p>Sorry Something went wrong!</p>
            </BookContainer>
        }
    }

    return(
        <SearchContainer>
            {handleBookRender()}
        </SearchContainer>
    )
}
