import React from 'react'

import DecisionItem from 'components/organisms/DecisionItem'
import ItemList from 'components/organisms/ItemList'
import ToolPage from 'components/templates/ToolPage'
import { Decision, DecisionState } from 'features/decisions/Decision'

const Decisions: React.FC = () => {
  const sampleDecisions: Decision[] = [
    {
      id: '1',
      title: 'Venue for the event',
      description: 'Description',
      state: DecisionState.Closed,
      isArchived: true,
      createdAt: '2022-02-11',
      updatedAt: '2022-03-04',
    },
    {
      id: '2',
      title: 'New backend developer for second team',
      description: 'Description',
      state: DecisionState.FinalEvaluation,
      isArchived: false,
      createdAt: '2022-02-15',
      updatedAt: '2022-03-14',
    },
    {
      id: '3',
      title: 'Select marketing agency for collaboration with client X',
      description: 'Description',
      state: DecisionState.CriteriaAdjustment,
      isArchived: false,
      createdAt: '2022-02-18',
      updatedAt: '2022-03-18',
    },
    {
      id: '4',
      title: 'Choosing clients for Q3',
      description: 'Description',
      state: DecisionState.ResistanceInvestigation,
      isArchived: true,
      createdAt: '2022-02-24',
      updatedAt: '2022-03-24',
    },
    {
      id: '5',
      title: 'Change decision process for remote teams',
      description: 'Description',
      state: DecisionState.ResultsDefinition,
      isArchived: true,
      createdAt: '2022-03-01',
      updatedAt: '2022-04-01',
    },
    {
      id: '6',
      title: 'Choosing clients for Q4',
      description: 'Description',
      state: DecisionState.ProblemDefinition,
      isArchived: false,
      createdAt: '2022-03-10',
      updatedAt: '2022-04-10',
    },
  ]

  return (
    <ToolPage>
      {/* <h1>Decisions</h1> */}
      <ItemList>
        {sampleDecisions.map((decision) => (
          <DecisionItem key={decision.id} decision={decision} />
        ))}
      </ItemList>
      {/* <p>Add decision</p> */}
    </ToolPage>
  )
}

export default Decisions
