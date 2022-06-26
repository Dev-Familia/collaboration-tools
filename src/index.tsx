import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

const theme = extendTheme({
  shadows: { outline: '0 0 0 3px var(--chakra-colors-purple-400)' },
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: 'purple.400',
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: 'purple.400',
      },
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
)
