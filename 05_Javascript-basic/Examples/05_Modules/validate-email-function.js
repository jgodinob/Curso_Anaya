function validateEmail(email) {
  if(email.indexOf('@') != -1) {
    return true;
  }
  return false
}

export default validateEmail