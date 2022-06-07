import React from 'react'

import { GridLinkItems } from '@/organisms/GridLinks'
import { Paths } from '@/routes'
import MainPage from '@/templates/MainPage'

const Index: React.FC = () => {
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

export default Index
