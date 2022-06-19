import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

import MainMenu from 'components/organisms/MainMenu'
import { mainLinks } from 'Routes'

type ToolPageProps = {
  children: React.ReactNode
}

const ToolPage: React.FC<ToolPageProps> = ({ children }) => (
  <Flex
    direction="column"
    align="center"
    minH="100vh"
    w="100vw"
    bgGradient={'linear(to-br, gray.100, purple.100)'}
    color="gray.800"
    textAlign="center"
  >
    <MainMenu linkItems={mainLinks} />
    <Box as="main" w="90vw" maxW="1024px">
      {children}
    </Box>
  </Flex>
)

export default ToolPage
