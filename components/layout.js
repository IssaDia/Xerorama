import React from 'react'
import Head from 'next/head'
import Header from './header'

export default function Layout({ children, title = 'Home | Xerorama' }) {
  const appTitle = 'Xerorama'
  return (
    <div className="h-full">
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
    </div>
  )
}
