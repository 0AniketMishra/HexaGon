import '../styles/globals.css'
import { AppProps } from 'next/app';

import {SessionProvider} from 'next-auth/react'

function MyApp({ Component, pageProps, session}: any) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp