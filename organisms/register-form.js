import { Formik, Field } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Merci de spécifier votre prénom'),
  lastName: Yup.string().required('Merci de spécifier votre nom'),
  email: Yup.string()
    .trim()
    .email('Votre mail est invalide')
    .required('Merci de spécifier votre email')
    .matches(
      /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i
    ),
  password: Yup.string()
    .required('Merci de spécifier un mot de passe ')
    .min(8, 'Mot de passe trop court - doit contenir un minimum de 8 caractéres.'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Les mots de passes ne correspondent pas'
  )
})

export default function RegisterForm() {
  return (
    <Formik
      initialValues={{
        email: '',
        firstName: '',
        lastName: '',
        category: '',
        password: '',
        passwordConfirmation: ''
      }}
      validationSchema={validationSchema}
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
              <div className="block">
                <span className="text-gray-700">Vous êtes : </span>
                <div className="mt-2">
                  <div>
                    <label className="inline-flex items-center">
                      <Field type="radio" name="category" value="1" />
                      <span className="ml-2">Mentor</span>
                    </label>
                  </div>
                  <div>
                    <label className="inline-flex items-center">
                      <Field type="radio" name="category" value="2" />
                      <span className="ml-2">Apprenant</span>
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
          <div className="w-full px-3">
            <div className="flex items-center border-b border-gray-900 py-2">
              <Field
                id="passwordConfirmation"
                name="passwordConfirmation"
                type="password"
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordConfirmation}
                placeholder="Confirmez le mot de passe"
                autoComplete="true"
              />
            </div>
            {touched.passwordConfirmation && errors.passwordConfirmation ? (
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <span className="helper-text text-red-400">{errors.passwordConfirmation}</span>
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
