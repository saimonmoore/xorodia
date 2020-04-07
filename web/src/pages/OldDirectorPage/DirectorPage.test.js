import { render, cleanup } from '@testing-library/react'

import DirectorPage from './DirectorPage'

describe('DirectorPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<DirectorPage />)
    }).not.toThrow()
  })
})
