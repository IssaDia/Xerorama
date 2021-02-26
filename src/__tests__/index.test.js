import { render } from '@testing-library/react'
import Header from '../../components/header'
import Layout from '../../components/layout'

describe('Components', () => {
  test('it renders Layout', () => {
    render(<Layout />)
  })
  test('it renders Header', () => {
    render(<Header />)
  })
})
