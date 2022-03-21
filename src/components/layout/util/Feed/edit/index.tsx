import { Comments, Posts } from '@prisma/client'
import { useState } from 'react'
import {BsThreeDots,BsTrash} from 'react-icons/bs'
import {MdOutlineModeEditOutline} from 'react-icons/md'
import usePostsContext from '../../../../../hook/usePostsContext'
import useUserContext from '../../../../../hook/useUserContext'
import { ModalEditComponent } from '../../Modal/editPostModal'

import { ItemEditContainer } from './styles'

interface EditProps{
    post?: Posts
    comment?:Comments
}

export function EditComponent({post,comment}: EditProps){

    const {user}        = useUserContext()
    const {deletePost,deleteComment}  = usePostsContext()

    const [modal, setModal] = useState(false)

    function handleOpenModal(){
        setModal(true)
    }

    function handleCloseModal(){
        setModal(false)
    }
    return (
        <>
                {
                    post?.user_id == user.id ?
                    <div><BsThreeDots onClick={handleOpenModal}/></div> 
                    : 
                    comment?.user_id == user.id ?
                    <div><BsThreeDots onClick={handleOpenModal}/></div> : null
                }
                {
                    modal  && post?
                    <ModalEditComponent onClose={handleCloseModal}>
                        <ItemEditContainer >
                            <i><MdOutlineModeEditOutline/></i>
                            <p> Edit</p>
                        </ItemEditContainer>
                        <ItemEditContainer onClick={() => deletePost(post.id)}>
                                <i><BsTrash/></i>
                                <p>Delete</p>
                        </ItemEditContainer>
                    </ModalEditComponent> 
                    :
                    modal  && comment?
                    <ModalEditComponent onClose={handleCloseModal}>
                        <ItemEditContainer >
                            <i><MdOutlineModeEditOutline/></i>
                            <p> Edit</p>
                        </ItemEditContainer>
                        <ItemEditContainer onClick={() => deleteComment(comment.id)}>
                                <i><BsTrash/></i>
                                <p>Delete</p>
                        </ItemEditContainer>
                    </ModalEditComponent> : null
                }                      
        </>
    )
}