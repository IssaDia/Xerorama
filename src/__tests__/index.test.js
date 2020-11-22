import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Layout from '../../components/layout'
import Header from '../../components/header'

describe('Layout', () => {
  test('it renders Layout', () => {
    render(<Layout />)
  })
})
