import React from 'react'

import DecisionItem from 'components/organisms/DecisionItem'
import ItemList from 'components/organisms/ItemList'
import NewDecisionItem from 'components/organisms/NewDecisionItem'
import ToolPage from 'components/templates/ToolPage'
import { useDecisionStore } from 'hooks/stores/decisions'

const Decisions: React.FC = () => {
  const [decisions, setDecisions] = useDecisionStore()
  const newDecisionsProps = { decisions, setDecisions }

  return (
    <ToolPage>
      <h1>Decisions</h1>
      <ItemList>
        {decisions.map((decision) => (
          <DecisionItem key={decision.id} decision={decision} />
        ))}
      </ItemList>
      <NewDecisionItem {...newDecisionsProps} />
    </ToolPage>
  )
}

export default Decisions
