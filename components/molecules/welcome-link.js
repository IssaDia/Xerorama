import React from 'react'
import WelcomeLinktext from '../atoms/welcome-link-text'

export default function WelcomeLink({ text, color }) {
  return (
    <a
      data-testid="welcome-link"
      href="https://mistralcss.com"
      className={`panel--content ${color} h-16 w-24 mx-2 rounded-md text-white flex items-center justify-center text-2xl transform duration-200`}>
      <WelcomeLinktext text={text} />
    </a>
  )
}
