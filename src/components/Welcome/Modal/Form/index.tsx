import Input from './Input';
import Button from './Button';
import { useState } from 'react';
import {AiOutlineClose} from "react-icons/ai"
import { FormContainer } from './styles';
import useModalContext from '../../../../hook/useModalContext';
import { Users } from '@prisma/client';

interface FormProps{
    title:string
}

export default function Form({title} : FormProps) {

    const {renderText,handleCloseLoginModal,handleCloseRegisterModal} = useModalContext()
    
    const [passwordInput            , setpasswordInput]                         = useState("")
    const [emailInput               , setemailInput]                            = useState("")
    const [username                 , setUsername]                              = useState("")
    
   const userInput = {
       email:    emailInput,
       password: passwordInput,
       username: username
   }

    const loginForm         = title.includes("Login")
    
    function handleCloseModal(){
        if(loginForm){
            return (
                <button className='close-button' onClick={handleCloseLoginModal}><AiOutlineClose/></button>
            )
        }else{
            return (
                <button className='close-button' onClick={handleCloseRegisterModal}><AiOutlineClose/></button>
            )
        }
    }

    function handleButtonsAuth(){
        if(loginForm){
            return (
                <Button loginButton={true}  userInput={userInput}/>
            )
        }else{
            return (
                <Button registerButton  userInput={userInput}/>
            )
        }
    }


    return (
        <FormContainer>
            {handleCloseModal()}
            <h1>{title}</h1>
            <div>
                <Input label="Email"            type="email"        onChange={setemailInput}                value={emailInput}           required/>
                <Input label="Username"         type="text"         onChange={setUsername}               value={username}          required noRender={loginForm}/>
                <Input label="Password"         type="password"     onChange={setpasswordInput}             value={passwordInput}        required/>
            </div>
            {renderText(title)}
            {handleButtonsAuth()}
        </FormContainer>
    )
}