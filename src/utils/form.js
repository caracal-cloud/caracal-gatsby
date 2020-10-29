export const getInputProps = (field, form) => {
  const { touched, errors } = form
  const value = form.values[field]
  const hasError = touched[field] && errors[field]

  return {
    value,
    name: field,
    onChange: form.handleChange,
    onBlur: form.handleBlur,
    ...(hasError && {
      error: errors[field],
    }),
  }
}

export const getFormItemProps = input => {
  if (input.error) {
    return {
      validateStatus: 'error',
      help: input.error,
    }
  }
}
