import React from 'react'
import Button from '@material-ui/core/Button/index'

export default function SocialButton({ className, icon, type, handleButton }) {
  return (
    <Button
      variant="contained"
      size="large"
      className={className}
      type={type}
      onClick={() => {
        handleButton()
      }}>
      <span>{icon}</span>
    </Button>
  )
}
