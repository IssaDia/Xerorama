import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import axios from 'axios'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Votre mail est invalide')
    .required('Merci de spécifier votre email')
    .matches(
      /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i
    ),
  password: Yup.string()
    .required('Merci de spécifier un mot de passe ')
    .min(8, 'Mot de passe trop court - doit contenir un minimum de 8 caractéres.')
})

export default function LoginForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true)
        axios
          .post('/api/login', values)
          .then(function (response) {
            setTimeout(() => {
              setSubmitting(false)
            }, 100)
          })
          .catch(function (error) {
            console.log(error)
          })
      }}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="w-full px-3">
            <div className="flex items-center border-b border-gray-900 py-2">
              <Field
                id="email"
                name="email"
                type="email"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Tapez votre @"
              />
            </div>
            {touched.email && errors.email ? (
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <span className="helper-text text-red-400">{errors.email}</span>
              </div>
            ) : null}
          </div>
          <div className="w-full px-3">
            <div className="flex items-center border-b border-gray-900 py-2">
              <Field
                id="password"
                name="password"
                type="password"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Tapez votre mot de passe"
                autoComplete="true"
              />
            </div>
            {touched.password && errors.password ? (
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <span className="helper-text text-red-400">{errors.password}</span>
              </div>
            ) : null}
          </div>
          <div className="w-full text-center">
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </form>
      )}
    </Formik>
  )
}
