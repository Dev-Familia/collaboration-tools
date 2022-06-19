import { Box } from '@chakra-ui/react'
import React from 'react'

type RoundStateProps = {
  borderColor: string
  color?: string
  isHalf?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const RoundState: React.FC<RoundStateProps> = ({
  borderColor,
  color = 'transparent',
  isHalf = false,
  size = 'md',
}) => {
  const sizeValue = { sm: 3, md: 4, lg: 5 }[size]

  const colorProps = isHalf
    ? { bgGradient: `linear-gradient(to-r, ${color} 50%, transparent 50%)` }
    : { bg: color }

  return (
    <Box
      w={sizeValue}
      h={sizeValue}
      rounded="full"
      borderWidth="3px"
      borderColor={borderColor}
      {...colorProps}
    ></Box>
  )
}

export default RoundState
