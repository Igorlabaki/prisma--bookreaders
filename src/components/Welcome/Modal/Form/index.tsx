import Input from './Input';
import Button from './Button';
import { useState } from 'react';
import {AiOutlineClose} from "react-icons/ai"
import { ErrorContainer, FormContainer } from './styles';
import useModalContext from '../../../../hook/useModalContext';
import {useForm}  from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ButtonContainer } from './Button/styles';
import useUserContext from '../../../../hook/useUserContext';
import { InputContainer } from './Input/styles';

interface FormProps{
    title:string
}

export default function Form({title} : FormProps) {

    const {handleCloseLoginModal,handleCloseRegisterModal,isLoginModalOpen,handleOpenRegisterModal,isRegisterModalOpen,handleOpenLoginModal} = useModalContext()
    const {login,registerUser} = useUserContext()

    const schema = yup.object({
        email:      yup.string().required('Email is required').email('This is not a valid email'),
        username:   yup.string().required('Username is required'),
        password:    yup.string().required('Password is required').min(6, 'Password must be at least 6 characters.').max(12, 'Password limit chars is 12'),
    }).required();

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
 
   const onLogin    = (data)     => login(data.email,data.password);
   const onRegister = (data)     => registerUser(data.email,data.username,data.password);
    
    function handleLoginModal(){
        if(isLoginModalOpen){
            return (
                <FormContainer onSubmit={handleSubmit(onLogin)}>
                    <button className='close-button' onClick={handleCloseLoginModal}><AiOutlineClose/></button>
                    <h1>Login</h1>
                        {
                            errors.email || errors.password ? 
                            <ErrorContainer>
                                <p>{errors.email?.message}</p>
                                <p>{errors.password?.message}</p>
                            </ErrorContainer> : null
                        }
                    <div>
                        <InputContainer>
                            <label>Email:</label>
                            <input type='email' {...register("email")}  className={errors.email ? 'border-error' : null}/>
                        </InputContainer>
                        <InputContainer>
                            <label>Password:</label>
                            <input type='password' {...register("password")} className={errors.password ? 'border-error' : null}/>
                        </InputContainer>
                    </div>
                    <div className='redirect-text'>
                        <p className="mt-8">
                        Are you new here? 
                        <button  onClick={(e) => {
                            e.preventDefault() 
                            handleCloseLoginModal()
                            handleOpenRegisterModal()
                        }}>Create an account here.
                        </button>
                        </p>
                    </div>
                    <ButtonContainer type='submit'>
                        <p>{'Confirm'}</p>
                    </ButtonContainer>      
                </FormContainer>
            )
                
        }else if(isRegisterModalOpen){
            return (
                <FormContainer  onSubmit={handleSubmit(onRegister)}>
                    <button className='close-button' onClick={handleCloseRegisterModal}><AiOutlineClose/></button>
                    <h1>Register</h1>
                    <div>
                        {
                            errors.email || errors.username || errors.password ? 
                            <ErrorContainer>
                                <p>{errors.email?.message}</p>
                                <p>{errors.username?.message}</p>
                                <p>{errors.password?.message}</p>
                            </ErrorContainer> : null
                        }
                        <InputContainer>
                            <label>Email:</label>
                            <input type='email' {...register("email")} className={errors.email ? 'border-error' : null}/>
                        </InputContainer>
                        <InputContainer>
                            <label>Username:</label>
                            <input type='text' {...register("username")} className={errors.username ? 'border-error' : null}/>
                        </InputContainer>
                        <InputContainer>
                            <label>Password:</label>
                            <input type='password' {...register("password")} className={errors.password ? 'border-error' : null}/>
                        </InputContainer>
                    </div>
                    <div className='redirect-text'>
                        <p className="mt-8">
                        Do you already have an account? 
                        <button  onClick={(e) => {
                            e.preventDefault() 
                            handleCloseRegisterModal()
                            handleOpenLoginModal()
                        }}>Click here.
                        </button>
                        </p>
                    </div>
                    <ButtonContainer type='submit'>
                        <p>{'Confirm'}</p>
                    </ButtonContainer>     
                </FormContainer>
            )
        }
    }

    return (
        <>
            {handleLoginModal()}
        </>
    )
}