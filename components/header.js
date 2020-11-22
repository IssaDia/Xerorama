import React from 'react'

export default function Header() {
  return (
    <>
      <h1>Hello</h1>
      <nav
        data-testid="navbar-element"
        className="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
            <span className="text-2xl pl-2">
              <i className="em em-grinning"></i>
              <p data-testid="brandName-element">Xerorama</p>
            </span>
          </a>
        </div>
      </nav>
    </>
  )
}
