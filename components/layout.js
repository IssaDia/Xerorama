import React from 'react'
import Head from 'next/head'
import Header from './header'

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>Xeroramas</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Nerko+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div>{children}</div>
    </div>
  )
}
