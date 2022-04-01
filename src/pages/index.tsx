import { getProviders, getCsrfToken } from "next-auth/react"
import WelcomePage from "../components/Welcome"
import FooterComponent from "../components/Welcome/Footer"
import Header from "../components/Welcome/Header"
import ModalComponent from "../components/Welcome/Modal"
import { ContainerIntroText, WelcomeContainer } from "../components/Welcome/styles"

export default function Home({ providers,csrfToken}) {
  return (
    <>
            <WelcomeContainer>
              <Header/>
              <ContainerIntroText>
                <h1>Welcome to the BookReaders</h1>
                <h2>A social network made for those  who love to read</h2>
                <div>
                  <p>This project was developed in Next.Js, React, Typescript,Firebase and Styled Component</p>
                  <p>The goal is to simulate a social network with feed, rating and friends systems.</p>
                </div>
              </ContainerIntroText>
              <FooterComponent/>
              <ModalComponent providers={providers} token={csrfToken}/>
      </WelcomeContainer>
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  const csrfToken = await getCsrfToken()

  return {
    props: { providers,csrfToken},
  }
}