import { render, cleanup } from '@testing-library/react'

import ChoirPage from './ChoirPage'

describe('ChoirPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<ChoirPage />)
    }).not.toThrow()
  })
})
