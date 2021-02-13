import PropTypes from 'prop-types'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

config.autoAddCss = false
library.add(fas)
export default function Header() {
  const appTitle = 'Xerorama'

  return (
    <section className="text-gray-900">
      <nav className="p-8 bg-blueXero" data-testid="navbar-element">
        <div>
          <div className="text-black no-underline hover:text-black hover:no-underline w-12 h-12">
            <FontAwesomeIcon icon={['fas', 'brain']} data-testid="logo-element" />
          </div>
        </div>
      </nav>
    </section>
  )
}

Header.propTypes = {
  appTitle: PropTypes.string
}
