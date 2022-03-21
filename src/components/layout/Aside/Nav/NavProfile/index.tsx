import PhotoModalComponent  from "../../Modal";
import { CgProfile }        from "react-icons/cg";
import { ImBooks }          from "react-icons/im";
import { BsTrophyFill }     from "react-icons/bs";
import { MdLibraryBooks }   from "react-icons/md";
import { PhotoContainer,NavProfileContainer, InfoContainer, IconContainer, Container, TextContainer, MiddleContainer} from "./style";
import useModalContext from "../../../../../hook/useModalContext";
import useUserContext from "../../../../../hook/useUserContext";
import useMemberContext from "../../../../../hook/useMemberContext";

export function NavProfile(){

    const {user} = useUserContext()
    const {handleOpenPhotoModal} = useModalContext()
    const {member} = useMemberContext()
    /*const {pageRead,averagePages} =     useBookFirebaseContext()

    function handleUserPhoto(){
        return(
            <Container>
            { userAuth?.photoURL ? 
                <>
                    <PhotoContainer src={userAuth.photoURL} alt="user photo" onClick={handleOpenPhotoModal}/>
                    <MiddleContainer>
                        <TextContainer>Change Photo</TextContainer>
                    </MiddleContainer>
                </>
                :
                <IconContainer onClick={handleOpenPhotoModal}>
                    <CgProfile fontSize={178} color={'var(--blue-button)'}/>
                </IconContainer>
            }
            </Container>
        )
    }*/

    return(
        <>
            <NavProfileContainer>
                <PhotoContainer src={member?.avatar} alt="" />
                <PhotoModalComponent/>
                <InfoContainer>
                    <ImBooks fontSize={30} color={'gray'}/>
                    <MdLibraryBooks fontSize={28} color={'gray'}/>
                    <BsTrophyFill fontSize={25} color={'gray'}/>
                </InfoContainer>
            </NavProfileContainer>
        </>
    )
}