import {AppProps} from 'next/app'
import { BookContextProvider } from '../Context/book/bookContext'
import { FollowContextProvider } from '../Context/follow/followContext'
import { MemberContextProvider } from '../Context/member/memberContext'
import { ModalContextProvider } from '../Context/Modal/ModalContext'
import { PaginationContextProvider } from '../Context/Pagination/paginationContext'
import { PostsContextProvider } from '../Context/posts/postsContext'
import { UserContextProvider } from '../Context/user/UserContext'

import {GlobalStyle} from '../styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
  <UserContextProvider>
    <PostsContextProvider>
    <ModalContextProvider>
    <MemberContextProvider>
      <FollowContextProvider>
        <BookContextProvider>
          <PaginationContextProvider>
            <GlobalStyle/>
            <Component {...pageProps} />
          </PaginationContextProvider>
        </BookContextProvider>
      </FollowContextProvider>
    </MemberContextProvider>
    </ModalContextProvider>
  </PostsContextProvider>
  </UserContextProvider>
  )
}

export default MyApp
