import Modal                from 'react-modal';
import { AiOutlineClose }   from 'react-icons/ai';
import useModalContext      from '../../../../../../hook/useModalContext';
import { ButtonContainer, ModalContainer, PhotoContainer, UploadContainer } from './style';
import useUserContext from '../../../../../../hook/useUserContext';
import { MdAddAPhoto } from 'react-icons/md';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PhotoModalComponent() {
    
    const {user} = useUserContext()
    const {isPhotoModalOpen, handleClosePhotoModal} = useModalContext()
    const [avatar, setAvatar]   = useState<File>()
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
    }, [avatar])
    
    async function uploadPhoto(avatar) {
      const formData = new FormData()
      formData.append('file', avatar)
      formData.append('upload_preset', 'ay9ot2av')
      setLoading(true)
      const data = await fetch(
          'https:/api.cloudinary.com/v1_1/ay9ot2av/image/upload',{
              method: 'POST',
              body: formData,
          }
      ).then(res => res.json())

      console.log(data)  
    }  
    const changeAvatarHandler = (e: any) => {
        setLoading(true)
        if(e.target.files[0]){
            setAvatar(e.target.files[0])
            console.log(avatar)
        }
        setLoading(false)
    }

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
                <form>
                    <div>
                        <span>
                            <MdAddAPhoto fontSize={30} color={"rgba(29, 53, 87)"}/> 
                            <p>Choose your photo</p> 
                        </span>
                        <input
                        type="file"
                        name={'file-avatar'}
                        onChange={changeAvatarHandler} 
                        />
                    </div>
                    <button type='submit' onClick={
                        (e)=> {
                            e.preventDefault()
                            uploadPhoto(avatar)
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
