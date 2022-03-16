import {AppProps} from 'next/app'
import { BookContextProvider } from '../Context/book/bookContext'
import { ModalContextProvider } from '../Context/Modal/ModalContext'
import { PostsContextProvider } from '../Context/posts/postsContext'
import { UserContextProvider } from '../Context/user/UserContext'
import {GlobalStyle} from '../styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
  <UserContextProvider>
    <ModalContextProvider>
      <BookContextProvider>
        <PostsContextProvider>
          <GlobalStyle/>
          <Component {...pageProps} />
        </PostsContextProvider>
      </BookContextProvider>
    </ModalContextProvider>
  </UserContextProvider>
  )
}

export default MyApp
