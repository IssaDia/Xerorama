import PropTypes from 'prop-types'
import React from 'react'
import Head from 'next/head'
import Header from './header'
import { UserProvider, useFetchUser } from '../utils/user'
export default function Layout({ children, title = 'Home | Xerorama' }) {
  const appTitle = 'Xerorama'
  const { user, loading } = useFetchUser()
  return (
    <div className="h-full">
      <UserProvider value={{ user, loading }}>
        <Head>
          <title>{title}</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nerko+One&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Header appTitle={appTitle} />
        <div>{children}</div>
      </UserProvider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string
}
