import { render, screen } from '@testing-library/react'

import { Main } from '.'

describe('Component Main', () => {
  it('should render the heading', () => {
    render(<Main title="React Avançado" description="React" />)

    expect(
      screen.getByRole('heading', { name: 'React Avançado' })
    ).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    const { container } = render(
      <Main title="React Avançado" description="React" />
    )

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
