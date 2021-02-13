import React, { useState } from 'react'
import PropTypes from 'prop-types'

import InputForm from '../components/atoms/login-form/input-form'
import SimpleLink from '../components/atoms/login-form/simple-link'
import SubtitleText from '../components/atoms/login-form/subtitle-text'
import TitleText from '../components/atoms/login-form/title-text'
import BasicButton from '../components/molecules/basic-button'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { useForm, FormProvider } from 'react-hook-form'

import { useAuth } from '../src/contexts/auth-provider-firebase'
import { useRouter } from 'next/router'

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

export default function SignupFirebase() {
  const methods = useForm({
    resolver: yupResolver(validationSchema)
  })
  const { handleSubmit, register, errors } = methods
  const [submitting, setSubmitting] = useState(false)
  const { signup } = useAuth()
  const router = useRouter()

  const onSubmit = async (data) => {
    try {
      console.log(data.email)
      await signup(data.email, data.password)
      router.push('/dashboard')
    } catch (error) {
      console.log(error)
    }
    setSubmitting(true)
  }
  return (
    <div className="m-auto mt-36 border-indigo-600 w-1/2 h-96 space-y-4">
      <TitleText text="Create new account" />
      <SubtitleText text="Use your email to create new account" />
      <div className="flex flex-col space-y-6">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <InputForm
                label="Email Adress"
                name="email"
                type="email"
                ref={register}
                inputRef={register}
              />
              {errors.email && <span className="text-red-700 text-xs">{errors.email.message}</span>}
            </div>
            <div>
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
            </div>
            <div>
              <InputForm
                label="Confirm Password"
                name="passwordConfirmation"
                type="password"
                ref={register}
                inputRef={register}
              />
            </div>
            {errors.passwordConfirmation && (
              <span className="text-red-700 text-xs">{errors.passwordConfirmation.message}</span>
            )}
            <div className="w-full">
              <BasicButton
                title="Sign Up Now"
                color="primary"
                className="h-12 w-full"
                type="submit"
                disabled={submitting}
              />
            </div>
          </form>
        </FormProvider>
        <div className="flex justify-center">
          <SubtitleText className="text-greyDarkXero" text="Have an account?" />
          <SimpleLink text="Sign In" url="/" className="text-blue-900" />
        </div>
      </div>
    </div>
  )
}
