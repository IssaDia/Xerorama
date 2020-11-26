import PropTypes from 'prop-types'
import React from 'react'
import WelcomeLinktext from '../atoms/welcome-link-text'
import Link from 'next/link'

export default function WelcomeLink({ text, color, path }) {
  return (
    <Link href={`/${path}`}>
      <a
        data-testid="welcome-link"
        className={`panel--content ${color} h-16 w-24 mx-2 rounded-md text-white flex items-center justify-center text-2xl transform duration-200`}>
        <WelcomeLinktext text={text} />
      </a>
    </Link>
  )
}

WelcomeLink.propTypes = {
  color: PropTypes.string,
  path: PropTypes.string,
  text: PropTypes.string
}
