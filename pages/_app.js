import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import { extendTheme } from "@chakra-ui/react"

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: "",
          color: "",
        },
      },
    },  
  })
  return (<ChakraProvider theme={theme}><Component {...pageProps} /></ChakraProvider>)
}

export default MyApp
