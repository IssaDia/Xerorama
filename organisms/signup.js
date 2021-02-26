import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import FacebookIcon from '../src/icons/facebook'
import GoogleIcon from '../src/icons/google'

import { useAuth } from '../src/contexts/auth-provider-firebase'
import { useRouter } from 'next/router'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { useForm, FormProvider } from 'react-hook-form'

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

export default function Signup() {
  const { login, loginGoogle, loginFacebook, currentUser } = useAuth()
  const methods = useForm({
    resolver: yupResolver(validationSchema)
  })
  const { handleSubmit, register, errors } = methods
  const [submitting, setSubmitting] = useState(false)
  const { signup } = useAuth()
  const router = useRouter()

  const onSubmit = async (data) => {
    try {
      await signup(data.email, data.password)
      router.push('/dashboard')
    } catch (error) {
      console.log(error)
    }
    setSubmitting(true)
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
    <div className="form-container sign-up-container absolute h-full">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 bg-white flex flex-col items-center justify-center h-full px-14">
          <h1 className="font-bold m-0">Create Account</h1>

          <div className="my-5">
            <Link href="/">
              <a
                onClick={handleFacebook}
                className="social border border-gray-300 rounded-full inline-flex justify-center items-center mx-1.5 h-10 w-10">
                <span>
                  <img src={GoogleIcon} />
                </span>
              </a>
            </Link>
            <Link href="/" className="social">
              <a
                onClick={handleGoogle}
                className="social border border-gray-300 rounded-full inline-flex justify-center items-center mx-1.5 h-10 w-10">
                <span>{GoogleIcon}</span>
              </a>
            </Link>
          </div>
          <span className="text-xs">or use your email for registration</span>
          <InputForm
            label="Email Adress"
            name="email"
            type="email"
            ref={register}
            inputRef={register}
          />
          {errors.email && <span className="text-red-700 text-xs">{errors.email.message}</span>}

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
          <InputForm
            label="Confirm Password"
            name="passwordConfirmation"
            type="password"
            ref={register}
            inputRef={register}
          />
          {errors.passwordConfirmation && (
            <span className="text-red-700 text-xs">{errors.passwordConfirmation.message}</span>
          )}
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
  )
}
