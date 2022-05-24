import { Grid } from '@chakra-ui/react'
import React from 'react'

import GridLink, { GridLinkItem } from '../molecules/GridLink'

export type GridLinkItems = GridLinkItem[]
type GridLinkProps = {
  items: GridLinkItems
}

const GridLinks: React.FC<GridLinkProps> = (props) => (
  <Grid
    templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
    gap={[5, 5, 10]}
    color="gray.100"
    pb={8}
  >
    {props.items.map((item) => (
      <GridLink key={item.name} {...item} />
    ))}
  </Grid>
)

export default GridLinks
