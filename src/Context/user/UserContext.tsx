import { Users } from '@prisma/client'
import { useRouter } from 'next/router'
import {createContext,ReactNode,useState} from 'react'

interface UserContextProvider {
    children: ReactNode
}

interface UserContext{
    user?:          Users
    error?:         String
    login?:         (user:Users) => void
    registerUser?:  (user:Users) => void
}

const initialState: UserContext = {

}

export const UserContext = createContext<UserContext>(initialState)

export function UserContextProvider( {children}: UserContextProvider){

    const router = useRouter()
    const [user, setUser]   = useState<Users>(null)
    const [error, setError] = useState<String>('')

    async function registerUser(userInput:Users){
        try {
            const response = await fetch('/api/user/register-user',{
                method:'POST',
                body: JSON.stringify(userInput)
           }) 

           const result = await response.json()
           setUser(result)
           router.push('/home')
        } catch (error) {
            console.log(error)
        }
    }

    async function login(userInput:Users){
        try {
            const response = await fetch('/api/user/login-user',{
                method:'POST',
                body: JSON.stringify(userInput)
           }) 
           const result = await response.json()
           setUser(result)
           router.push('/home')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <UserContext.Provider value={{
            user,
            error,
            login,
            registerUser
        }}>
            {children}
        </UserContext.Provider>
    )
}