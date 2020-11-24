import React from 'react'
import WelcomeLink from '../components/molecules/welcome-link'

export default function WelcomeLinkContainer() {
  return (
    <>
      <WelcomeLink text="Connexion" color="bg-blue-500" />
      <WelcomeLink text="Inscription" color="bg-pink-500" />
    </>
  )
}
