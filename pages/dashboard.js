import React, { useState } from 'react'
import Layout from '../components/layout'
import { AuthProvider, useAuth } from '../src/contexts/auth-provider-firebase'
import { useRouter } from 'next/router'
import withAuth from '../organisms/with-auth'

function Dashboard() {
  const [error, setError] = useState('')
  const { currentUser, logout } = useAuth()
  const router = useRouter()

  async function handleLogout(e) {
    e.preventDefault()
    setError('')
    try {
      await logout()
      router.push('/')
    } catch {
      setError('Failed to logout')
    }
  }

  return (
    <AuthProvider>
      <Layout title="Dashboard | Xerorama">
        <p>{currentUser.email}</p>
        <button onClick={handleLogout}>
          <a>Logout</a>
        </button>
      </Layout>
    </AuthProvider>
  )
}

export default withAuth(Dashboard)
