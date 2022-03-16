import {NavItem} from './NavItem'
import { NavContainer } from './style'
import {BiWorld} from 'react-icons/bi'
import {FaUserFriends} from 'react-icons/fa'
import {ImBooks} from 'react-icons/im'
import { FaUserAlt } from 'react-icons/fa'

export  function NavDefault() {
    return (
        <NavContainer>
            <NavItem text="Discover"    hrefprops="/discover"    icon={<BiWorld fontSize={30} color={'rgba(29, 53, 87)'}/>}/>
            <NavItem text="Bookshelf"  hrefprops="/book-shelfe" icon={<ImBooks  fontSize={30} color={'rgba(29, 53, 87)'}/>}/>
            <NavItem text="BookClub"    hrefprops="/book-club"   icon={<FaUserFriends  fontSize={30} color={'rgba(29, 53, 87)'}/>}/>
            <NavItem text="Profile"     hrefprops="/profile"     icon={<FaUserAlt  fontSize={25} color={'rgba(29, 53, 87)'}/>}/>
        </NavContainer>
    )
  } 