import { useMediaQuery } from '@chakra-ui/react'
import React from 'react'

import { LinkItem } from 'Routes'

import DesktopMainMenu from './DesktopMainMenu'
import MobileMainMenu from './MobileMainMenu'

export type MainMenuProps = {
  linkItems: readonly LinkItem[]
}

const MainMenu: React.FC<MainMenuProps> = ({ linkItems }) => {
  const isMobile = useMediaQuery('(max-width: 480px)')
  if (isMobile[0]) return <MobileMainMenu linkItems={linkItems} />

  return <DesktopMainMenu linkItems={linkItems} />
}

export default MainMenu
