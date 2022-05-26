import { Box, Text, Link, Flex } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

import { MainMenuProps } from './MainMenu'

const DesktopMainMenu: React.FC<MainMenuProps> = ({ linkItems }) => (
  <Flex as="nav" gap={4} py={4}>
    <Text bgGradient="linear(to-b, gray.800, purple.700)" bgClip="text">
      Collaboration Tools
    </Text>
    <Box flexGrow={10}>&nbsp;</Box>
    {linkItems.map((link) => (
      <NavLink
        key={link.path}
        to={link.path}
        style={({ isActive }): React.CSSProperties => ({
          fontWeight: isActive ? 'bold' : 'normal',
        })}
      >
        <Link as={Box}>{link.name}</Link>
      </NavLink>
    ))}
  </Flex>
)

export default DesktopMainMenu
