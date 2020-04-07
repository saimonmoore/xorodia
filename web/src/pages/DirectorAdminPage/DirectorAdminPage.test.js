import { render, cleanup } from '@testing-library/react'

import DirectorAdminPage from './DirectorAdminPage'

describe('DirectorAdminPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<DirectorAdminPage />)
    }).not.toThrow()
  })
})
