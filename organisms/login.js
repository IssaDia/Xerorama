import React, { useState } from 'react'
import { useAuth } from '../src/contexts/auth-provider-firebase'
import { useRouter } from 'next/router'

import { useForm, FormProvider } from 'react-hook-form'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import InputForm from '../components/atoms/login-form/input-form'
import BasicButton from '../components/molecules/basic-button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons'
import { SpaTwoTone } from '@material-ui/icons'

const validationSchema = yup.object({
  email: yup
    .string()
    .required('Please enter the required field')
    .matches(
      /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i
    ),
  password: yup
    .string()
    .required('Please enter the required field')
    .min(6, 'Must be 6 caracters minimum')
    .max(20, "Can't be more than 20 caracters")
})

export default function Login(props) {
  const methods = useForm({
    resolver: yupResolver(validationSchema)
  })
  const { handleSubmit, register, errors } = methods
  const [submitting, setSubmitting] = useState(false)
  const { login, loginGoogle, loginFacebook, currentUser } = useAuth()
  const router = useRouter()
  const [active, setActive] = useState(false)
  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password)
      router.push('/dashboard')
    } catch (error) {
      console.log(error)
    }
    setSubmitting(true)
  }
  const signIn = (e) => {
    e.preventDefault()
    setActive(!active)
    props.parentCallback(!active)
  }
  const signUp = (e) => {
    e.preventDefault()
    setActive(!active)
    props.parentCallback(!active)
  }

  const handleGoogle = async () => {
    try {
      await loginGoogle()
      currentUser && router.push('/dashboard')
    } catch (error) {
      console.log(error)
    }
    setSubmitting(true)
  }

  const handleFacebook = async () => {
    try {
      await loginFacebook()
      currentUser && router.push('/dashboard')
    } catch (error) {
      console.log(error)
    }
    setSubmitting(true)
  }

  return (
    <>
      <div className="form-container sign-in-container absolute h-full">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3 bg-white flex flex-col items-center justify-center h-full px-14">
            <h1 className="font-bold m-0">Sign in</h1>
            <div className="my-5">
              <span
                onClick={handleFacebook}
                className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1.5 h-10 w-10">
                <FontAwesomeIcon icon={faFacebook} />
              </span>
              <span
                onClick={handleGoogle}
                className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1.5 h-10 w-10">
                <FontAwesomeIcon icon={faGooglePlus} />
              </span>
            </div>
            <span className="text-xs">or use your account</span>
            <InputForm
              label="Email Adress"
              name="email"
              type="email"
              ref={register}
              inputRef={register}
              data-testid="mail-input"
            />
            <InputForm
              label="Password"
              name="password"
              type="password"
              ref={register}
              inputRef={register}
            />
            {errors.password && (
              <span className="text-red-700  text-xs">{errors.password.message}</span>
            )}
            <BasicButton
              title="Sign In Now"
              color="primary"
              className="h-12 w-full"
              type="submit"
              disabled={submitting}
            />
          </form>
        </FormProvider>
      </div>
      <div className="overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden">
        <div className="overlay text-white relative h-full bg-no-repeat bg-cover -left-full">
          <div className="overlay-panel overlay-left absolute flex items-center justify-center flex-col py-10 text-center top-0 h-full w-1/2">
            <h1 className="text-4xl font-black">Welcome Back!</h1>
            <p className="text-sm font-thin leading-5 tracking-wide my-5" data-testid="ancestor">
              To keep connected with us please login with your personal info
            </p>
            <button
              className="rounded-full py-2 px-12 border-2 tracking-wider uppercase bg-transparent border-white focus:outline-none"
              onClick={signIn}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right absolute flex items-center justify-center flex-col py-10 text-center top-0 h-full w-1/2 right-0">
            <h1 className="text-4xl font-black">Hello, Friend!</h1>
            <p className="text-sm font-thin leading-5 tracking-wide my-5">
              Enter your personal details and start journey with us
            </p>
            <button
              className="rounded-full py-2 px-12 border-2 tracking-wider uppercase bg-transparent border-white focus:outline-none"
              onClick={signUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
