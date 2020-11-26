import PropTypes from 'prop-types'
import React from 'react'

export default function WelcomeLinktext({ text }) {
  return <p className="text-xs lg:text-sm">{text}</p>
}

WelcomeLinktext.propTypes = {
  text: PropTypes.string
}
