import Modal                from 'react-modal';
import useBookContext from '../../../../../../hook/useBookContext';
import useModalContext from '../../../../../../hook/useModalContext';
import usePostsContext from '../../../../../../hook/usePostsContext';
import { ButtonContainer, CheckBoxContainer, ModalContainer } from './styles';
import moment from "moment";
import { useEffect, useState } from 'react';
import { MdCheckBox } from 'react-icons/md';
import useUserContext from '../../../../../../hook/useUserContext';
import { Books } from '@prisma/client';


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


export default function ModalComponent() {

    const {isPostBookModalOpen, handleClosePostBookModal} = useModalContext()
    const {user} = useUserContext()
    const {book,bookId,createBook} = useBookContext()

    useEffect(() => {
    
    }, [])

    const {createBookPost} = usePostsContext()

    const [text, setText] = useState('')
    const [bookChoice, setBookChoice] = useState('')
    const [read, setRead] = useState(Boolean)
    
    const [selected,setSelected]=useState(null)
    
    return (
        <Modal 
            isOpen={isPostBookModalOpen}  
            onRequestClose={handleClosePostBookModal}
            overlayClassName="react-modal-auth-overlay"
            className="react-modal-auth-content"
            ariaHideApp={false}
        >
            <ModalContainer>
                <img src={book?.volumeInfo.imageLinks?.thumbnail} alt="" />
                <div>
                    <h3>{book?.volumeInfo.title}</h3>
                    <CheckBoxContainer>
                    <label>Wicth list ?</label>
                    <select id="lists" name="lists" value={selected} onChange={(e) => setSelected(e.target.value)}>
                        <option value="read">Read List</option>
                        <option value="reading">Currently Reading List</option>
                        <option value="wantRead">WantRead</option>
                    </select>
                    </CheckBoxContainer>
                    <p>What do you think about?</p>
                    <textarea placeholder={"Enter your review..."} value={text} onChange={(e) => setText(e.target.value)}></textarea>
                    <ButtonContainer>
                        <button 
                            onClick={(e) => {
                                e.preventDefault(); 
                                createBook(
                                    book,
                                    text,
                                    user.id,
                                    selected
                                );
                                handleClosePostBookModal()
                            }
                        }
                        >
                            Post
                        </button>
                    </ButtonContainer>
                </div>
            </ModalContainer>
        </Modal>
    )
    
    
}
