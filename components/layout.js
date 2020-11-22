import React from 'react'
import Head from 'next/head'
import Header from './header'

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>Xerorama</title>
      </Head>
      <Header />
      <div>{children}</div>
    </div>
  )
}
