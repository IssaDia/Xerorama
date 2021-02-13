import React, { useState, useRef } from 'react'
import { useAuth } from '../src/contexts/auth-provider-firebase'
import { useRouter } from 'next/router'

export default function SigninFormFirebase() {
  const emailRef = useRef()
  const passwordConfirmRef = useRef()
  const passwordRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password does not match!')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordConfirmRef.current.value)
      router.push('/dashboard')
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)
  }
  return (
    <>
      <div className="text-center mb-10">
        <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
        <p>Enter your information to register</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <label htmlFor="" className="text-xs font-semibold px-1">
              Email
            </label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
              </div>
              <input
                type="email"
                ref={emailRef}
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                placeholder="johnsmith@example.com"
              />
            </div>
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-12">
            <label htmlFor="" className="text-xs font-semibold px-1">
              Password
            </label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
              </div>
              <input
                type="password"
                ref={passwordRef}
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-12">
            <label htmlFor="" className="text-xs font-semibold px-1">
              Confirm Password
            </label>
            <div className="flex">
              <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
              </div>
              <input
                type="password"
                ref={passwordConfirmRef}
                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
              />
            </div>
          </div>
        </div>
        <div className="flex -mx-3">
          <div className="w-full px-3 mb-5">
            <button
              disabled={loading}
              className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
              REGISTER NOW
            </button>
          </div>
          {error && (
            <div>
              <p>{error}</p>
            </div>
          )}
        </div>
      </form>
    </>
  )
}
