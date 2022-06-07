import { Box, Text, Link, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'

import NavLink from '@/atoms/NavLink'

import { MainMenuProps } from './MainMenu'

const DesktopMainMenu: React.FC<MainMenuProps> = ({ linkItems }) => (
  <Flex as="nav" gap="4" p="4" w="100%" maxW="1024">
    <Text bgGradient="linear(to-b, gray.800, purple.700)" bgClip="text">
      Collaboration Tools
    </Text>
    <Spacer />
    {linkItems.map((link) => (
      <NavLink key={link.path} href={link.path}>
        <Link as={Box}>{link.name}</Link>
      </NavLink>
    ))}
  </Flex>
)

export default DesktopMainMenu
