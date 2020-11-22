import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Head from 'next/head'
import Header from '../../components/header'
import Layout from '../../components/layout'

describe('Layout', () => {
  test('it renders Head', () => {
    render(<Head />)
  })
  test('it renders Header', () => {
    render(<Header />)
  })
})
