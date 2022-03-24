import { info } from 'console'
import {createContext,Dispatch,ReactNode,SetStateAction,useState} from 'react'
import useMemberContext from '../../hook/useMemberContext'
import useUserContext from '../../hook/useUserContext'

interface FollowContextProvider {
    children: ReactNode
}
interface FollowContext{
    Follow?: boolean
    follow?: (followingId:string, followerId:string) => void
    unfollow?: (followingId:string, followerId:string) => void
}

const initialState: FollowContext = {
  
}

export const FollowContext = createContext<FollowContext>(initialState)

export function FollowContextProvider( {children}: FollowContextProvider){

    const [Follow, setFollow] = useState()
    const {getMember} = useMemberContext()
    const {user,getUser} = useUserContext()


    async function follow(followingId:string, followerId:string){
        const info ={
            followerId,
            followingId
        }
        try {
            const response = await fetch('/api/follows/follow',{
                method:'POST',
                body: JSON.stringify(info)
           }) 
           const result = await response.json()
           getUser(user.id)
        } catch (error) {
            console.log(error)
        }
    }

    async function unfollow(followingId:string, followerId:string){
        const info = {
            follower: followerId,
            following: followingId
        }
        try {
            const response = await fetch('/api/follows/unfollow',{
                method:'POST',
                body: JSON.stringify(info)
           }) 
           const result = await response.json()
           setFollow(result)
           getUser(user.id)
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <FollowContext.Provider value={{
            Follow,
            unfollow,
            follow,
        }}>
            {children}
        </FollowContext.Provider>
    )
}