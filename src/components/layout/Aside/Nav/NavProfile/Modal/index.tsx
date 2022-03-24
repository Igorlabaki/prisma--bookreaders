import Modal                from 'react-modal';
import { AiOutlineClose }   from 'react-icons/ai';
import { CgProfile }        from 'react-icons/cg';
import { MdAddAPhoto }      from 'react-icons/md';
import { ButtonContainer, ModalContainer, PhotoContainer, UploadContainer } from './style';
import useModalContext from '../../../../../../hook/useModalContext';
import useUserContext from '../../../../../../hook/useUserContext';


export default function PhotoModalComponent() {

    const {isPhotoModalOpen, handleClosePhotoModal} = useModalContext()
    const {user} = useUserContext()

    return (
        <ModalContainer>
            <Modal 
                isOpen={isPhotoModalOpen}  
                onRequestClose={handleClosePhotoModal}
                overlayClassName="react-modal-photo-overlay"
                className="react-modal-photo-content"
                ariaHideApp={false}
            >
             <ButtonContainer  onClick={handleClosePhotoModal}><AiOutlineClose/></ButtonContainer>
             <UploadContainer>
                <h2>Upload photo</h2>

                <form>
                    <div>
                        <span>
                            <img src={user?.avatar} alt="" />
                            <p>Choose your photo</p> 
                            
                        </span>
                        <input
                        type="file" 
                        
                        />
                    </div>
                    <button type='submit' onClick={
                        (e)=> {
                            e.preventDefault()
                            
                        }
                    }>
                        Confirm
                    </button>
                </form>
             </UploadContainer>
            </Modal>
        </ModalContainer>
    )
    
    
}
