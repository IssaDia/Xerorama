import React from 'react'
import SocialButton from './social-button'
import FacebookIcon from '../../src/icons/facebook'
import GoogleIcon from '../../src/icons/google'

export default function SocialButtonContainer({ handleGoogle, handleFacebook }) {
  return (
    <div className="flex flex-row">
      <div className="w-1/2 flex justify-center m-4">
        <SocialButton
          title="Login with Facebook"
          color="primary"
          className="h-12 w-full"
          icon={<FacebookIcon />}
          handleButton={handleFacebook}
        />
      </div>
      <div className="w-1/2 flex justify-center m-4">
        <SocialButton
          title="Login with Google"
          className="h-12 w-full"
          icon={<GoogleIcon />}
          handleButton={handleGoogle}
        />
      </div>
    </div>
  )
}
