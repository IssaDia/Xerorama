import { Formik, Field } from 'formik'
import React from 'react'
import Layout from '../components/layout'

export default function Register() {
  return (
    <Layout title="Registration | Xerorama">
      <Formik
        initialValues={{ email: '', firstName: '', lastName: '', category: '', password: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
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
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  placeholder="Tapez votre Prénom"
                />
              </div>
              {touched.firstName && errors.firstName ? (
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <span className="helper-text text-red-400">{errors.firstName}</span>
                </div>
              ) : null}
            </div>
            <div className="w-full px-3">
              <div className="flex items-center border-b border-gray-900 py-2">
                <Field
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  placeholder="Tapez votre Nom"
                />
              </div>
              {touched.lastName && errors.lastName ? (
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <span className="helper-text text-red-400">{errors.lastName}</span>
                </div>
              ) : null}
            </div>
            <div className="w-full px-3">
              <div className="px-3 mb-6 md:mb-0">
                <div class="block">
                  <span class="text-gray-700">Vous êtes : </span>
                  <div class="mt-2">
                    <div>
                      <label class="inline-flex items-center">
                        <Field type="radio" name="category" value="1" checked />
                        <span class="ml-2">Mentor</span>
                      </label>
                    </div>
                    <div>
                      <label class="inline-flex items-center">
                        <Field type="radio" name="category" value="2" />
                        <span class="ml-2">Apprenant</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {touched.category && errors.category ? (
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <span className="helper-text text-red-400">{errors.category}</span>
              </div>
            ) : null}
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
                  placeholder="Tapez votre @"
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
