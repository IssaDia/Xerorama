import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

export default withRouter(function NavLink(props) {
  console.log(props)
  return (
    <Link href={props.path}>
      <div className={`${props.router.pathname === props.path ? 'active' : ''}`}>
        <div className="">{props.icon}</div>
        <span className="">{props.label}</span>
      </div>
    </Link>
  )
})
