import { Flex } from '@chakra-ui/react'
import React from 'react'

import MainMenu from 'organisms/MainMenu'
import { mainLinks } from 'Routes'

type ToolPageProps = {
  children: React.ReactNode
}

const ToolPage: React.FC<ToolPageProps> = ({ children }) => (
  <Flex
    direction="column"
    align="center"
    h="100vh"
    w="100vw"
    bgGradient={'linear(to-br, gray.100, purple.100)'}
    color="gray.800"
    textAlign="center"
  >
    <MainMenu linkItems={mainLinks} />
    <main>{children}</main>
  </Flex>
)

export default ToolPage
