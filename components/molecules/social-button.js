import React from 'react'
import Button from '@material-ui/core/Button/index'

export default function SocialButton({ title, color, className, icon, type, handleButton }) {
  return (
    <Button
      variant="contained"
      color={color}
      size="large"
      className={className}
      type={type}
      onClick={() => {
        handleButton()
      }}>
      <span>{icon}</span>
      <span className="uppercase text-l ml-4">{title}</span>
    </Button>
  )
}
