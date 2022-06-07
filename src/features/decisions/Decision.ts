import { createUUID } from '@/services/generators/uuid'

export enum DecisionState {
  ProblemDefinition = 'Problem definition',
  CriteriaConsultation = 'Criteria consultation',
  SolutionsCreation = 'Solutions creation',
  ResultsDefinition = 'Results definition',
  FirstEvaluation = 'First evaluation',
  ResistanceInvestigation = 'Resistance investigation',
  CriteriaAdjustment = 'Criteria adjustment',
  SolutionsAdjustment = 'Solutions adjustment',
  ResultsAdjustment = 'Results adjustment',
  FinalEvaluation = 'Final evaluation',
  Closed = 'Closed',
}

export type Decision = {
  id: string
  title: string
  description: string
  state: DecisionState
  isArchived: boolean
  createdAt: string
  updatedAt: string
}

export type EditableDecisionProps = {
  title: string
  description: string
}

export const createDecision = (params: EditableDecisionProps): Decision => ({
  id: createUUID(),
  ...params,
  state: DecisionState.ProblemDefinition,
  isArchived: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
})

export const updateDecision = (
  decision: Decision,
  updatedProps: Partial<EditableDecisionProps>,
): Decision =>
  Object.assign(decision, {
    ...updatedProps,
    updatedAt: new Date().toISOString(),
  })
