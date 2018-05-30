export default (response) => {
  if (response.status >= 400) {
    throw new Error('Error!')
  } else {
    return response.json()
  }
}
