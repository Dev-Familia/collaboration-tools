import { LockIcon } from '@chakra-ui/icons'
import { Grid, GridItem, SlideFade, Text } from '@chakra-ui/react'
import React from 'react'

import { Decision } from '@/features/decisions/Decision'
import DecisionItemState from '@/molecules/DecisionItemState'

type DecisionItemProps = { decision: Decision }

const DecisionItem: React.FC<DecisionItemProps> = ({ decision }) => {
  return (
    <SlideFade in offsetX="500">
      <Grid
        px="4"
        py="2"
        gridColumnGap="4"
        gridRowGap="2"
        maxW="1024"
        w="100%"
        bgColor="gray.100"
        borderColor="purple.400"
        borderWidth="2px"
        rounded="10px"
        templateColumns={'1fr max-content max-content max-content'}
        justifyItems="stretch"
        alignItems="center"
        justifyContent="stretch"
      >
        <GridItem as={Text} colSpan={[4, 1]} fontSize="sm" textAlign="left">
          {decision.title}
        </GridItem>
        <GridItem alignSelf="center" justifySelf="end" lineHeight="0">
          {decision.isArchived ? <LockIcon color="gray.600" /> : ''}
        </GridItem>
        <GridItem>
          <DecisionItemState state={decision.state} />
        </GridItem>
        <GridItem as={Text} fontSize="xs" color="gray.600">
          {decision.updatedAt}
        </GridItem>
      </Grid>
    </SlideFade>
  )
}

export default DecisionItem
