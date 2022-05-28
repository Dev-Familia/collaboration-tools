import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Decisions from './pages/Decisions'
import Home from './pages/Home'
import Retros from './pages/Retros'
import StoryMap from './pages/StoryMap'
import Team from './pages/Team'

export type LinkItem = { name: string; path: string }

export enum Paths {
  Home = '/',
  Team = '/team',
  Decisions = '/decisions',
  StoryMap = '/story-map',
  Retros = '/retros',
}

export const mainLinks: readonly LinkItem[] = [
  // { name: 'Team', path: Paths.Team },
  { name: 'Decisions', path: Paths.Decisions },
  // { name: 'Story Map', path: Paths.StoryMap },
  // { name: 'Retros', path: Paths.Retros },
] as const

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path={Paths.Home} element={<Home />} />
    <Route path={Paths.Team} element={<Team />} />
    <Route path={Paths.Decisions} element={<Decisions />} />
    <Route path={Paths.StoryMap} element={<StoryMap />} />
    <Route path={Paths.Retros} element={<Retros />} />
  </Routes>
)
export default AppRoutes
