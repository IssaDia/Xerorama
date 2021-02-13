import React from 'react'
import Button from '@material-ui/core/Button/index'

export default function BasicButton({ title, color, className, icon, type }) {
  return (
    <Button variant="contained" color={color} size="large" className={className} type={type}>
      <span>{icon}</span>
      <span className="uppercase text-l ml-4">{title}</span>
    </Button>
  )
}
