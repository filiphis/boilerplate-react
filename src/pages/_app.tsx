import type { AppProps } from 'next/app'
import Head from 'next/head'

import { GlobalStyles } from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
        <meta name="description" content="Descrição do projeto" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
