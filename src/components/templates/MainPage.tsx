import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

import GridLinks, { GridLinkItems } from 'components/organisms/GridLinks'

type MainPageProps = {
  title: string
  items: GridLinkItems
}

const MainPage: React.FC<MainPageProps> = ({ title, items }) => (
  <Flex
    direction="column"
    align="center"
    justify="center"
    minH="100vh"
    w="100vw"
    bgGradient={'linear(to-br, gray.100, purple.100)'}
    color="gray.800"
    textAlign="center"
  >
    <Heading
      as="h1"
      size={['2xl', '3xl', '2xl']}
      bgGradient="linear(to-b, gray.800, purple.700)"
      bgClip="text"
      py={[8, 8, 12]}
    >
      {title}
    </Heading>
    <GridLinks items={items} />
  </Flex>
)

export default MainPage
