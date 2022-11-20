import { render, screen } from '@testing-library/react'

import Home from '.'

describe('Home component', () => {
  it('should render correctly', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', { name: /Index NEXT/i })
    ).toBeInTheDocument()
  })
})
