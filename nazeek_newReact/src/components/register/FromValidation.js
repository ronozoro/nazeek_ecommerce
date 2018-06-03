export default (values) => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length < 6 || values.username.length > 30) {
    errors.username = 'username should be morthan 6 and lessthan 30'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password1) {
    errors.password1 = 'Required'
  } else if (values.password1.length < 6) {
    errors.password1 = 'minimum of 6 characters'
  }

  if (!values.password2) {
    errors.password2 = 'Required'
  } else if (values.password2 !== values.password1) {
    errors.password2 = 'password not match'
  }

  if (!values.terms_conditions) {
    errors.terms_conditions = 'Required'
  }
  return errors
}
