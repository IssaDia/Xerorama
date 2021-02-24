import React, { useState } from 'react'
import { useAuth } from '../src/contexts/auth-provider-firebase'
import { useRouter } from 'next/router'

import { useForm, FormProvider } from 'react-hook-form'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import InputForm from '../components/atoms/login-form/input-form'
import BasicButton from '../components/molecules/basic-button'

const validationSchema = yup.object({
  email: yup.string().required('Please enter the required field'),
  password: yup
    .string()
    .required('Please enter the required field')
    .min(6, 'Must be 6 caracters minimum')
    .max(20, "Can't be more than 20 caracters"),
  passwordConfirmation: yup
    .string()
    .required('Please enter the required field')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .min(6, 'Must be 6 caracters minimum')
    .max(20, "Can't be more than 20 caracters")
})

export default function Login(props) {
  const methods = useForm({
    resolver: yupResolver(validationSchema)
  })
  const { handleSubmit, register, errors } = methods
  const [submitting, setSubmitting] = useState(false)
  const { signup } = useAuth()
  const router = useRouter()
  const [active, setActive] = useState(false)
  const onSubmit = async (data) => {
    try {
      await signup(data.email, data.password)
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

  return (
    <>
      <div className="form-container sign-in-container">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <h1 className="font-bold m-0">Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
            </div>
            <span className="text-xs">or use your account</span>
            <InputForm
              label="Email Adress"
              name="email"
              type="email"
              ref={register}
              inputRef={register}
            />
            <InputForm
              label="Confirm Password"
              name="passwordConfirmation"
              type="password"
              ref={register}
              inputRef={register}
            />
            <BasicButton
              title="Sign Up Now"
              color="primary"
              className="h-12 w-full"
              type="submit"
              disabled={submitting}
            />
          </form>
        </FormProvider>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1 className="font-bold">Welcome Back!</h1>
            <p className="text-sm font-thin leading-5 tracking-wide my-5">
              To keep connected with us please login with your personal info
            </p>
            <button className="ghost" onClick={signIn}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className="font-bold m-0">Hello, Friend!</h1>
            <p className="text-sm font-thin leading-5 tracking-wide my-5">
              Enter your personal details and start journey with us
            </p>
            <button className="ghost" onClick={signUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
