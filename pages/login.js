import { Formik, Field } from 'formik'
import React from 'react'
import Layout from '../components/layout'
import axios from 'axios'

export default function Register() {
  return (
    <Layout title="Login | Xerorama">
      <Formik
        initialValues={{ email: '', password: '' }}
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
                />
              </div>
            </div>
            <div className="w-full text-center">
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </Layout>
  )
}
