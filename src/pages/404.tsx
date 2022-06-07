import { Heading } from '@chakra-ui/react'
import React from 'react'

import NavLink from '@/atoms/NavLink'
import ToolPage from '@/templates/ToolPage'

const Index: React.FC = () => {
  return (
    <ToolPage>
      <Heading
        as="h3"
        size="xl"
        bgGradient="linear(to-b, gray.800, purple.700)"
        bgClip="text"
        py={[8, 8, 12]}
      >
        Nothing here
      </Heading>
      <NavLink href={'/'}>
        <Heading size="lg">Go to home</Heading>
      </NavLink>
    </ToolPage>
  )
}

export default Index
