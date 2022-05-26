import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react'
import React from 'react'

type BottomPanelProps = {
  children: React.ReactNode
  finalFocusRef: React.RefObject<HTMLElement>
  isOpen: boolean
  onClose: () => void
}

const BottomPanel: React.FC<BottomPanelProps> = ({
  children,
  ...bottomPanelProps
}) => (
  <Drawer placement="bottom" {...bottomPanelProps}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerBody py={4}>{children}</DrawerBody>
    </DrawerContent>
  </Drawer>
)

export default BottomPanel
