import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const theme = extendTheme({ shadows: { outline: '0 0 0 3px #9F7AEA' } }) // color: purple.400

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
)
