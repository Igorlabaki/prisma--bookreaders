import {AppProps} from 'next/app'
import { BookContextProvider } from '../Context/book/bookContext'
import { FollowContextProvider } from '../Context/follow/followContext'
import { MemberContextProvider } from '../Context/member/memberContext'
import { ModalContextProvider } from '../Context/Modal/ModalContext'
import { PaginationContextProvider } from '../Context/Pagination/paginationContext'
import { PostsContextProvider } from '../Context/posts/postsContext'
import { UserContextProvider } from '../Context/user/UserContext'
import { SessionProvider } from 'next-auth/react';

import {GlobalStyle} from '../styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
  <SessionProvider session={pageProps.session}>
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
  </SessionProvider>
  )
}

export default MyApp
