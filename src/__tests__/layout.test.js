import { render } from '@testing-library/react'
import Head from 'next/head'
import Header from '../../components/header'

describe('Layout', () => {
  test('it renders Head', () => {
    render(<Head />)
  })
  test('it renders Header', () => {
    render(<Header />)
  })
})
