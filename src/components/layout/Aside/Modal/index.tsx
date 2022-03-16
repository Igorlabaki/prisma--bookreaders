import Modal                from 'react-modal';
import { AiOutlineClose }   from 'react-icons/ai';
import useModalContext      from '../../../../hook/useModalContext';
import { ButtonContainer, ModalContainer, PhotoContainer, UploadContainer } from './style';
import useUserContext from '../../../../hook/useUserContext';

export default function PhotoModalComponent() {

    const {user} = useUserContext()
    const {isPhotoModalOpen, handleClosePhotoModal} = useModalContext()
    /*const {uploadPhoto,changeAvatarHandler,avatar,isLoading}  = useUpdateUserContext()*/

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
                <PhotoContainer src={user.avatar} alt="user photo" />
             </UploadContainer>
            </Modal>
        </ModalContainer>
    )
    
    
}
