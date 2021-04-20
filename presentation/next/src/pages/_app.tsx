/* eslint-disable no-underscore-dangle */
import { FC, useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '~/next/shared/styles/theme'
import LoadFont from '~/next/shared/utils/fonts/font-load'

const MyApp: FC<AppProps> = ({ Component, pageProps, router }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }

    LoadFont('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap', 'Roboto')
    LoadFont('https://fonts.googleapis.com/icon?family=Material+Icons&display=swap', 'Material Icons')
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Boilerplate BDDD Frontend" />
        <title>Boilerplate BDDD Frontend</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} {...router} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
