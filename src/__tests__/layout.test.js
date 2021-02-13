import React from 'react'
import { render } from '@testing-library/react'
import Head from 'next/head'
import Header from '../../components/header'

jest.mock('../../utils/user.js');
describe('Layout', () => {
  test('it renders Head', () => {
    render(<Head />)
  })
})
