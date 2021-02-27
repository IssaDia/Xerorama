import { render } from '@testing-library/react'
import Header from '../../components/header'
import Layout from '../../components/layout'
import Login from '../../organisms/login'
import { useAuth } from '../../src/contexts/auth-provider-firebase'

describe('Components', () => {
  test('it renders Layout', () => {
    render(<Layout />)
  })
  test('it renders Header', () => {
    render(<Header />)
  })
  test('it renders Header', () => {
    render(<Login />)
  })
})
