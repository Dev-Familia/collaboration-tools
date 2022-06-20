import { UserID } from 'features/users/User'
import { createUUID } from 'services/generators/uuid'

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
  createdBy: UserID
  createdAt: string
  updatedBy: UserID
  updatedAt: string
}

export type EditableDecisionProps = {
  title: string
  description: string
}

type CustomDecisionProps = EditableDecisionProps & {
  createdBy: UserID
  updatedBy?: UserID
}

export const createDecision = (params: CustomDecisionProps): Decision => ({
  id: createUUID(),
  ...params,
  state: DecisionState.ProblemDefinition,
  isArchived: false,
  createdAt: new Date().toISOString(),
  updatedBy: params.updatedBy ?? params.createdBy,
  updatedAt: new Date().toISOString(),
})

export const updateDecision = (
  decision: Decision,
  updatedProps: Partial<CustomDecisionProps>,
): Decision =>
  Object.assign(decision, {
    ...updatedProps,
    updatedAt: new Date().toISOString(),
  })
