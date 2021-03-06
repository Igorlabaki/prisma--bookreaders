import useModalContext from "../../../hook/useModalContext";
import { Button } from "./Button";
import { Container } from "./style";


export default function Header() {

  const {handleOpenLoginModal,handleOpenRegisterModal} = useModalContext()

  return (
    <Container>
      <img src="/images/logo/logo-white.png" alt="logo" />
      <div>
        <Button text="Sign in"    onClick={handleOpenLoginModal}/>
      </div>
    </Container>
  )
}