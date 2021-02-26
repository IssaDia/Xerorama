import React, { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import auth from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [isLogin, setIsLogin] = useState(false)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    auth.signOut()
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('Deconnexion Google réussie')
      })
      .catch((error) => {
        console.log(error)
      })
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('Deconnexion Facebook réussie')
      })
      .catch((error) => {
        console.log(error)
      })
    setCurrentUser('')
  }

  function loginGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        console.log('Authentification Google réussie')
        setCurrentUser(user)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function loginFacebook() {
    var provider = new firebase.auth.FacebookAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        console.log('Authentification Facebook réussie')
        setCurrentUser(user)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false)
      setCurrentUser(user)
      router.push('/dashboard')
      console.log(user)
    })
    return unsubscribe
  }, [])
  const value = {
    currentUser,
    signup,
    login,
    logout,
    loginGoogle,
    loginFacebook
  }
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
