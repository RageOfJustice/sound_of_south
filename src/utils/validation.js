export const validateLoginForm = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Это поле обязательно'
  }
  if (!values.password) {
    errors.password = 'Это поле обязательно'
  }

  return errors
}

export const validateMessageForm = values => {
  const errors = {}
  if (!values.topic) {
    errors.topic = 'Это поле обязательно'
  }
  if (!values.area) {
    errors.area = 'Это поле обязательно'
  }

  return errors
}
