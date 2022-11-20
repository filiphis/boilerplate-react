import type { AppProps } from 'next/app'
import Head from 'next/head'

import { GlobalStyle } from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
        <meta name="description" content="Descrição do projeto" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
