import { HStack, Tooltip } from '@chakra-ui/react'
import React from 'react'

import RoundState from '@/atoms/RoundState'
import { DecisionState } from '@/features/decisions/Decision'

type DecisionItemProps = { state: DecisionState }

const DecisionDecisionState: React.FC<DecisionItemProps> = ({ state }) => {
  const ORANGE = 'orange.400' as const
  const GREEN = 'green.400' as const

  const [circle1Props, circle2Props] = {
    [DecisionState.ProblemDefinition]: [
      { borderColor: ORANGE },
      { borderColor: ORANGE },
    ],
    [DecisionState.CriteriaConsultation]: [
      { borderColor: GREEN },
      { borderColor: ORANGE },
    ],
    [DecisionState.SolutionsCreation]: [
      { borderColor: ORANGE, color: ORANGE, isHalf: true },
      { borderColor: ORANGE },
    ],
    [DecisionState.ResultsDefinition]: [
      { borderColor: GREEN, color: GREEN, isHalf: true },
      { borderColor: ORANGE },
    ],
    [DecisionState.FirstEvaluation]: [
      { borderColor: ORANGE, color: ORANGE },
      { borderColor: ORANGE },
    ],
    [DecisionState.ResistanceInvestigation]: [
      { borderColor: GREEN, color: GREEN },
      { borderColor: ORANGE },
    ],
    [DecisionState.CriteriaAdjustment]: [
      { borderColor: GREEN, color: GREEN },
      { borderColor: GREEN },
    ],
    [DecisionState.SolutionsAdjustment]: [
      { borderColor: GREEN, color: GREEN },
      { borderColor: ORANGE, color: ORANGE, isHalf: true },
    ],
    [DecisionState.ResultsAdjustment]: [
      { borderColor: GREEN, color: GREEN },
      { borderColor: GREEN, color: GREEN, isHalf: true },
    ],
    [DecisionState.FinalEvaluation]: [
      { borderColor: GREEN, color: GREEN },
      { borderColor: ORANGE, color: ORANGE },
    ],
    [DecisionState.Closed]: [
      { borderColor: GREEN, color: GREEN },
      { borderColor: GREEN, color: GREEN },
    ],
  }[state]

  return (
    <Tooltip hasArrow bg="purple.700" label={state}>
      <HStack spacing="1">
        <RoundState {...circle1Props} />
        <RoundState {...circle2Props} />
      </HStack>
    </Tooltip>
  )
}

export default DecisionDecisionState
