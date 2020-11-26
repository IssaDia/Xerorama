import React from 'react'
import Layout from '../components/layout'
import { useFetchUser } from '../utils/user'

export default function Profile() {
  const { user, loading } = useFetchUser()
  return (
    <Layout>
      {user ? (
        <div>
          <p>Profile</p>
        </div>
      ) : (
        <p>Page Non dispo</p>
      )}
    </Layout>
  )
}
