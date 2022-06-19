import { Stack } from '@chakra-ui/react'
import React from 'react'

type ItemListProps = {
  children: React.ReactNode
}

const ItemList: React.FC<ItemListProps> = ({ children }) => (
  <Stack py="4">{children}</Stack>
)

export default ItemList
