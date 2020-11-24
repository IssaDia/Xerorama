import React from 'react'
import Head from 'next/head'
import Header from './header'

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>Xerorama</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Modak&family=Nerko+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div>{children}</div>
    </div>
  )
}
