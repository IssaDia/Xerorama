import React, { forwardRef } from 'react'
import { useForm, Controller } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'

const InputForm = (props, ref) => {
  const { control, error } = useForm()
  const { name, label, errorMessage } = props

  return (
    <>
      <Controller
        as={TextField}
        name={name}
        control={control}
        ref={ref}
        defaultValue=""
        label={label}
        fullWidth={true}
        variant="outlined"
        {...props}
        error={error}
        helperText={errorMessage}
      />
    </>
  )
}

export default forwardRef(InputForm)
