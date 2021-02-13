import React from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../src/contexts/auth-provider-firebase'

function withAuth(WrappedComponent) {
  return function HOC() {
    const { currentUser } = useAuth()
    const router = useRouter()

    if (!currentUser) {
      router.push('/')
      return null
    }

    return <WrappedComponent />
  }
}

export default (WrappedComponent) => withAuth(WrappedComponent)
