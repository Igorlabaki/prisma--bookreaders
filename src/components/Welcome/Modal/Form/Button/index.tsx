import { Users } from "@prisma/client";
import useUserContext from "../../../../../hook/useUserContext";
import { ButtonContainer } from "./styles";


interface ButtonProps {
    userInput           ?: any
    loginButton         ?: boolean
    googleButton        ?: boolean
    registerButton      ?: boolean
    children            ?: JSX.Element
    onCLick             ?:() => void
}

export default function Button({children,userInput,loginButton}: ButtonProps) {

    const {login,registerUser} = useUserContext()

    function handleTypeButton(){
        return (
            <>
            {   
                loginButton ?
                    <ButtonContainer onClick={() => login(userInput)}>
                    <p>{'Confirm'}</p>
                    {children}
                    </ButtonContainer>      
                :
                    <ButtonContainer onClick={() => registerUser(userInput)}>
                    <p>{'Confirm'}</p>
                    {children}   
                    </ButtonContainer>    
            }
            </>
        )
    }

    return (
        <>
            {handleTypeButton()}
        </>
    )
}