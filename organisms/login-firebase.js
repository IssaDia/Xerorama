import React, { useState } from 'react'
import PropTypes from 'prop-types'

import InputForm from '../components/atoms/login-form/input-form'
import SimpleLink from '../components/atoms/login-form/simple-link'
import SubtitleText from '../components/atoms/login-form/subtitle-text'
import TitleText from '../components/atoms/login-form/title-text'
import BasicButton from '../components/molecules/basic-button'
import SocialButtonContainer from '../components/molecules/social-button-container'

import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, FormProvider } from 'react-hook-form'

import { useAuth } from '../src/contexts/auth-provider-firebase'
import { useRouter } from 'next/router'

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
export default function LoginFirebase() {
  const methods = useForm({
    resolver: yupResolver(validationSchema)
  })
  const { handleSubmit, register, errors } = methods
  const [submitting, setSubmitting] = useState(false)
  const { login, loginGoogle, loginFacebook, currentUser } = useAuth()
  const router = useRouter()

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password)
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
    <div className="m-auto mt-36 border-indigo-600 w-1/2 h-96 space-y-4">
      <TitleText text="Sign In" />
      <SubtitleText text="Sign in on the internal platform" />
      <SocialButtonContainer handleGoogle={handleGoogle} handleFacebook={handleFacebook} />
      <div className="flex justify-center">
        <SubtitleText className="text-greyDarkXero" text="or login with email address" />
      </div>
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
            <div className="w-full">
              <BasicButton
                title="Sign In Now"
                color="primary"
                className="h-12 w-full"
                type="submit"
                disabled={submitting}
              />
            </div>
          </form>
        </FormProvider>
      </div>
      <div className="flex justify-center">
        <SubtitleText className="text-greyDarkXero" text="Don't have an account?" />
        <SimpleLink text="Sign Up" url="/signup" className="text-blue-900" />
      </div>
    </div>
  )
}
