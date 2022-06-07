export { basePath } from '../next.config'

export type LinkItem = { name: string; path: string }

export enum Paths {
  Home = '/',
  Team = '/team',
  Decisions = '/decisions',
  StoryMap = '/story-map',
  Retros = '/retros',
}

export const mainLinks: readonly LinkItem[] = [
  { name: 'Team', path: Paths.Team },
  { name: 'Decisions', path: Paths.Decisions },
  { name: 'Story Map', path: Paths.StoryMap },
  { name: 'Retros', path: Paths.Retros },
] as const
