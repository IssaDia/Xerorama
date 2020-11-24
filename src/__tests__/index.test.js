import { render } from '@testing-library/react'
import Layout from '../../components/layout'
import Welcome from '../../organisms/welcome'

describe('Layout', () => {
  test('it renders Layout', () => {
    render(<Layout />)
  })
  test('it renders HomepageWidget', () => {
    render(<Welcome />)
  })
})
