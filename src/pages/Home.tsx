import React from 'react'

import { GridLinkItems } from 'components/organisms/GridLinks'
import MainPage from 'components/templates/MainPage'
import { Paths } from 'Routes'

const Home: React.FC = () => {
  const appLinks: GridLinkItems = [
    // { name: 'Team', path: Paths.Team },
    { name: 'Team' },
    { name: 'Decisions', path: Paths.Decisions },
    { name: 'Story Map' },
    { name: 'Retros' },
    // { name: 'Story Map', path: Paths.StoryMap },
    // { name: 'Retros', path: Paths.Retros },
  ]
  return <MainPage title="Collaboration Tools" items={appLinks} />
}

export default Home
