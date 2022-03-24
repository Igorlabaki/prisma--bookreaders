import { Users } from '@prisma/client'
import { useRouter } from 'next/router'
import {createContext,ReactNode,useState} from 'react'

interface UserContextProvider {
    children: ReactNode
}

interface UserContext{
    user?:          any
    error?:         String
    login?:         (email:string, password:string) => void
    registerUser?:  (email:string,username:string, password:string) => void
    getUser?:       (id:string) => void
}

const initialState: UserContext = {

}

export const UserContext = createContext<UserContext>(initialState)

export function UserContextProvider( {children}: UserContextProvider){

    const router = useRouter()
    const [user, setUser]   = useState<any>(null)

    const [error, setError] = useState<String>('')

    async function registerUser(email:string,username:string, password:string){
        const userInput = {
            email,
            username,
            password
        }
        try {
            const response = await fetch('/api/user/register-user',{
                method:'POST',
                body: JSON.stringify(userInput)
           }) 

           const result = await response.json()
           setUser(result)
           getUser(result.id)
           router.push('/discover')
        } catch (error) {
            console.log(error)
        }
    }

    async function login(email:string,password:string){
        const userInput = {
            email,
            password
        }
        try {
            const response = await fetch('/api/user/login-user',{
                method:'POST',
                body: JSON.stringify(userInput)
           }) 
           const result = await response.json()
           setUser(result)
           router.push('/discover')
        } catch (error) {
            console.log(error)
        }
    }

    async function  getUser(id:string){
        try {
            const response  = await fetch('/api/user/get-member',{
                method:'POST',
                body: JSON.stringify(id)
            }) 
            const result    = await response.json()
            setUser(result)
        } catch (error) {
            console.log(error)      
        }
    }




    return(
        <UserContext.Provider value={{
            user,
            error,
            login,
            registerUser,
            getUser
        }}>
            {children}
        </UserContext.Provider>
    )
}