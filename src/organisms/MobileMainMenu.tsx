import { HamburgerIcon } from '@chakra-ui/icons'
import { Button, Flex, useDisclosure, Text, Stack } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

import BottomPanel from 'molecules/BottomPanel'

import { MainMenuProps } from './MainMenu'

const MobileMainMenu: React.FC<MainMenuProps> = ({ linkItems }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalFocusRef = React.useRef(null)
  const bottomPanelProps = { isOpen, onClose, finalFocusRef }

  return (
    <Flex
      as="nav"
      w="100%"
      p={4}
      justifyContent="space-between"
      alignItems="baseline"
    >
      <Text
        fontSize="xl"
        bgGradient="linear(to-b, gray.800, purple.700)"
        bgClip="text"
      >
        Collaboration Tools
      </Text>
      <Button ref={finalFocusRef} onClick={onOpen} textColor="purple.700">
        <HamburgerIcon />
      </Button>
      <BottomPanel {...bottomPanelProps}>
        <Stack spacing={4}>
          {linkItems.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={({ isActive }): React.CSSProperties => ({
                fontWeight: isActive ? 'bold' : 'normal',
              })}
            >
              {link.name}
            </NavLink>
          ))}
        </Stack>
      </BottomPanel>
    </Flex>
  )
}

export default MobileMainMenu
