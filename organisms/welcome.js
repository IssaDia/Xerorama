import React from 'react'
import WelcomeText from '../components/atoms/welcome-text'
import WelcomeLink from '../components/molecules/welcome-link'
import WelcomeLinkContainer from './welcome-link-container'

export default function Welcome() {
  return (
    <div className="panel h-screen flex items-center justify-center">
      <WelcomeText />
      <WelcomeLinkContainer />
    </div>
  )
}
