import Form from './Form';
import Modal from 'react-modal';
import { ButtonContainer, Input, ModalContainer, Title } from './style';
import useModalContext from '../../../hook/useModalContext';
import { signIn } from "next-auth/react"
import { IoLogoGithub, IoMdMail } from 'react-icons/io';
import InputComponent from './Form/Input';
interface ModalComponent{
    providers:any
    token:any
}

export default function ModalComponent({providers,token}:ModalComponent) {

    const {isLoginModalOpen,isRegisterModalOpen,handleCloseLoginModal,handleCloseRegisterModal} = useModalContext()
    function handleTypeModal(){
        return(
            <>
                { isLoginModalOpen ? 
                    ( <ModalContainer >
                            <Modal 
                                isOpen={isLoginModalOpen}  
                                onRequestClose={handleCloseLoginModal}
                                overlayClassName="react-modal-auth-overlay"
                                className="react-modal-auth-content"
                                ariaHideApp={false}
                            >
                            <form method='POST' action='/api/auth/signin/email'>
                                <Title>Sign In</Title>
                                <label>Email:</label>
                                <input
                                    name='csrfToken'
                                    type='hidden'
                                    defaultValue={token}
                                    >
                                </input>
                                <input
                                    name='email'
                                    type='email'
                                    id='email'
                                    >
                                </input>
                                <button type='submit'>Sign in with</button>
                            </form>   
                             {Object.values(providers).map((provider:any) => (
                                <div key={provider.name}>
                                    <ButtonContainer className={provider.name} onClick={() => signIn(provider.id)}>
                                        {provider.name.includes('GitHub') ? <IoLogoGithub fontSize={30}/> : null}
                                        {provider.name.includes('Email') ? <IoMdMail fontSize={30}/> : null}
                                       <p> Sign in with {provider.name}</p>
                                    </ButtonContainer>
                                </div>
                            ))}
                            </Modal>
                        </ModalContainer>) 
                    :
                    null
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
