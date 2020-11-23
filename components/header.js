import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
library.add(fas)

export default function Header() {
  return (
    <>
      <h1>Hello</h1>
      <nav
        data-testid="navbar-element"
        className="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
            <FontAwesomeIcon icon={['fas', 'brain']} />
            <p data-testid="brandName-element" className="font-noticia">
              Xerorama
            </p>
          </a>
        </div>
      </nav>
    </>
  )
}
