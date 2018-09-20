export const validateLoginForm = values => {
  const errors = {}
  if (!values.login) {
    errors.login = 'Это поле обязательно'
  }
  if (!values.password) {
    errors.password = 'Это поле обязательно'
  }

  return errors
}
