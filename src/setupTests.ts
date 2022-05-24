import '@testing-library/jest-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { render, RenderResult } from '@testing-library/react'

export function renderWithTheme(element: JSX.Element): RenderResult {
  return render(element, { wrapper: ChakraProvider })
}
