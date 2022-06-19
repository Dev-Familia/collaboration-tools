import { GridItem, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

import MotionDiv from 'components/atoms/MotionDiv'

export type GridLinkItem = {
  name: string
  path?: string
}

const gridItemProps = {
  w: ['80vw', '40vw', '35vw', '25vw'],
  h: ['20vh', '30vh'],
  border: '2px',
  borderColor: 'purple.400',
  borderRadius: '3vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const GridLink: React.FC<GridLinkItem> = ({ name, path }) => {
  if (path) {
    return (
      <Link to={path}>
        <MotionDiv
          bgGradient="linear(to-br, purple.700, purple.800)"
          whileHover={{
            scale: 1.1,
          }}
          {...gridItemProps}
        >
          <Heading fontSize="2xl">{name}</Heading>
        </MotionDiv>
      </Link>
    )
  }

  return (
    <GridItem
      bgGradient="linear(to-br, gray.500, purple.700)"
      {...gridItemProps}
    >
      <Heading fontSize="2xl">{name}</Heading>
    </GridItem>
  )
}

export default GridLink
