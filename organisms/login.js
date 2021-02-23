import React, { useState } from 'react'

export default function Login(props) {
  const [active, setActive] = useState(false)
  console.log(props)
  function signIn(e) {
    e.preventDefault()
    setActive(!active)
    props.parentCallback(active)
  }
  function signUp(e) {
    e.preventDefault()
    setActive(!active)
    props.parentCallback(active)
  }
  return (
    <>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="social">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform">
        <div className="overlay bg-formRoseXero bg-no-repeat bg-cover bg-left-top text-white relative -left-full h-full w-full transition-transform">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={signIn}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" onClick={signUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
