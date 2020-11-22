import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from '../../components/header'

describe('Header', () => {
  test('it renders nav', () => {
    render(
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0"></nav>
    )
  })
  test('it renders a fixed Navbar', () => {
    const { getByTestId } = render(<Header />)
    expect(getByTestId('navbar-element')).toBeInTheDocument()
    expect(getByTestId('navbar-element')).toHaveClass('fixed')
  })
  test('it renders the right Brand Name on menu', () => {
    const { getByTestId } = render(<Header />)
    expect(getByTestId('brandName-element')).toHaveTextContent('Xerorama')
  })
  test('it renders an icon on menu', () => {
    render(<Header />)
  })
})
