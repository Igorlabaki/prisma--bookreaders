import Link             from 'next/link'
import { useState } from 'react'
import { MenuComponent } from './Modal/Menu'
import { SearchInput }  from './SearchInput'
import {GrLogout}       from 'react-icons/gr'
import { ModalComponent } from '../Header/Modal'
import { ItemComponent } from './Modal/Menu/Item'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import {ArrowButtonContainer, HeaderComponent, LogoContainer, MenuContainer, PhotoContainer} from './style'
import useModalContext  from '../../../hook/useModalContext'
import useUserContext from '../../../hook/useUserContext'

export function Header(){

    const {user} = useUserContext()
    const {isConfigModalOpen} = useModalContext()
    const [modal, setModal] = useState(false)

    function handleDropDownMenu(){
        return(
            <>
                {modal ? 
                    <ArrowButtonContainer onClick={handleCloseModal}>
                        <IoIosArrowUp/>
                    </ArrowButtonContainer>
                    :
                    <ArrowButtonContainer onClick={handleOpenModal}>
                        <IoIosArrowDown/>
                    </ArrowButtonContainer>
                }
            </>
         )
    }

    function handleOpenModal(){
      setModal(true)
    }
  
    function handleCloseModal(){
      setModal(false)
    }

    return(
        <HeaderComponent>
           <Link href="/home"><LogoContainer src="/images/logo/logo-color.png" alt="" /></Link>
           <SearchInput/>
           <MenuContainer>
                <p>{user?.username}</p>
                <PhotoContainer src={user?.avatar} alt="user photo" />
                {handleDropDownMenu()}
                {
                    modal ? 
                    <ModalComponent onClose={handleCloseModal} >  
                        <MenuComponent>
                            <>
                                <ItemComponent text="Logout"  icon={<GrLogout   fontSize={20}/>}/>
                            </>
                        </MenuComponent>
                    </ModalComponent>
                    :
                    null
                }
           </MenuContainer>
        </HeaderComponent>
    )
}