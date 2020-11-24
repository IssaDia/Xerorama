import { render, screen } from '@testing-library/react'
import WelcomeText from '../../components/atoms/welcome-text'
import WelcomeLink from '../../components/molecules/welcome-link'
import WelcomeLinkContainer from '../../organisms/welcome-link-container'

describe('Welcome', () => {
  test('it renders Welcome Text', () => {
    render(<WelcomeText />)
  })
  test('it renders Welcome Links', () => {
    render(<WelcomeLink />)
  })
  test('it renders Welcome Link Container', () => {
    render(<WelcomeLinkContainer />)
  })
  test('Welcome component renders a text', () => {
    render(<WelcomeText />)
    const { getByTestId } = screen
    expect(getByTestId('welcome-text')).toHaveTextContent('Welcome To Xerorama!')
  })
  test('Welcome component renders two a links', () => {
    const { getAllByTestId } = render(<WelcomeLinkContainer />)
    expect(getAllByTestId('welcome-link')).toHaveLength(2)
  })
})
