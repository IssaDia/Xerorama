import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fasBrain, faMapMarkerAlt, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const navLinks = [
  {
    label: 'Logout',
    path: '/api/logout'
  },
  {
    label: 'Profile',
    path: '/profile'
  },
  {
    label: 'Login',
    path: '/api/login'
  }
]

export default navLinks
