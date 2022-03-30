import Form from './Form';
import Modal from 'react-modal';
import { ButtonContainer, ModalContainer, Title } from './style';
import useModalContext from '../../../hook/useModalContext';
import { signIn } from "next-auth/react"
import { IoLogoGithub } from 'react-icons/io';
interface ModalComponent{
    providers:any
}

export default function ModalComponent({providers}:ModalComponent) {

    const {isLoginModalOpen,isRegisterModalOpen,handleCloseLoginModal,handleCloseRegisterModal} = useModalContext()

    function handleTypeModal(){
        return(
            <>
                { isLoginModalOpen ? 
                    ( <ModalContainer>
                            <Modal 
                                isOpen={isLoginModalOpen}  
                                onRequestClose={handleCloseLoginModal}
                                overlayClassName="react-modal-auth-overlay"
                                className="react-modal-auth-content"
                                ariaHideApp={false}
                            >
                            <Title>Sign In</Title>
                             {Object.values(providers).map((provider:any) => (
                                <div key={provider.name}>
                                    <ButtonContainer className='github' onClick={() => signIn(provider.id)}>
                                        {provider.name.includes('GitHub') ? <IoLogoGithub fontSize={30}/> : null}
                                       <p> Sign in with {provider.name}</p>
                                    </ButtonContainer>
                                </div>
                            ))}
                            </Modal>
                        </ModalContainer>) 
                    :
                    isRegisterModalOpen ? 
                        <ModalContainer>
                            <Modal 
                                isOpen={isRegisterModalOpen}  
                                onRequestClose={handleCloseRegisterModal}
                                overlayClassName="react-modal-auth-overlay"
                                className="react-modal-auth-content"
                                ariaHideApp={false}
                            >
                                <Form title="Register"/>
                            </Modal>
                        </ModalContainer>
                    : ""
                }
            </>
        )
    }

    return (
        <>
            {handleTypeModal()}
        </>
    )
}
