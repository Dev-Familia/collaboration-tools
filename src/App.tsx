import { Box } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from 'Routes'

const App: React.FC = () => (
  <Box
    bgGradient={'linear(to-br, gray.100, purple.100)'}
    minH="100vh"
    color="gray.800"
    textAlign="center"
  >
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Box>
)

export default App
