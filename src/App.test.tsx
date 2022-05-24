import { screen } from '@testing-library/react'
import React from 'react'

import App from './App'
import { renderWithTheme } from './setupTests'

test('renders grid link for Decisions', () => {
  renderWithTheme(<App />)
  const linkElement = screen.getByText(/Decisions/i)
  expect(linkElement).toBeInTheDocument()
})
