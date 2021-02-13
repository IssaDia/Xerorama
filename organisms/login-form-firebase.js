import React, { useState, useRef } from 'react'
import { useAuth } from '../src/contexts/auth-provider-firebase'
import { useRouter } from 'next/router'

export default function LoginFormFirebase() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(false)

  const router = useRouter()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      router.push('/dashboard')
      setToast(true)
    } catch {
      setError('Failed to login')
    }
    setLoading(false)
    setToast(false)
  }
  return (
    <>
      {toast && (
        <div class="absolute right-0 top-0 m-5">
          <div class="flex items-center bg-green-500 border-l-4 border-green-700 py-2 px-3 shadow-md mb-2">
            <div class="text-green-500 rounded-full bg-white mr-3">
              <svg
                width="1.8em"
                height="1.8em"
                viewBox="0 0 16 16"
                class="bi bi-check"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                />
              </svg>
            </div>
            <div class="text-white max-w-xs ">Bienvenue sur Xerorama!</div>
          </div>
        </div>
      )}

      <div className="text-center mb-10">
        <h1 className="font-bold text-3xl text-gray-900">LOGIN</h1>
        <p>Enter your information to login</p>
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
            <label className="text-xs font-semibold px-1">Password</label>
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
