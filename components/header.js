import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import navLinks from '../config/navLinks'
import NavLink from './atoms/nav-link'
import Link from 'next/link'

config.autoAddCss = false
library.add(fas)

export default function Header({ appTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <nav
      data-testid="navbar-element"
      className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <a className="text-white no-underline hover:text-white hover:no-underline">
            <FontAwesomeIcon icon={['fas', 'brain']} data-testid="logo-element" />
            <p data-testid="brandName-element" className="brandName text-xl font-modak">
              {appTitle}
            </p>
          </a>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          id="nav-toggle"
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`${
          isExpanded ? 'block' : 'hidden'
        } w-full flex-grow lg:flex lg:items-center lg:w-auto pt-6 lg:pt-0`}
        id="nav-content">
        <ul className="list-reset lg:flex justify-end flex-1 items-center">
          {navLinks.map((navLink, index) => (
            <li className="mr-3 text-white" key={index}>
              <NavLink path={navLink.path} label={navLink.label} icon={navLink.icon} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

Header.propTypes = {
  appTitle: PropTypes.string
}
