import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import React from 'react'

const theme = extendTheme({ shadows: { outline: '0 0 0 3px #9F7AEA' } }) // color: purple.400

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Box
        bgGradient="linear(to-br, gray.100, purple.100)"
        minH="100vh"
        color="gray.800"
        textAlign="center"
      >
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default App
