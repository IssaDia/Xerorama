import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import SignupFirebase from '../organisms/signup-firebase'

export default function Register() {
  return (
    <Layout title="SignUp | Xerorama">
      <Header />
      <SignupFirebase />
    </Layout>
  )
}
