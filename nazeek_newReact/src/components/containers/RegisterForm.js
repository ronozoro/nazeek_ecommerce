import RegisterForm from '../register/registerForm'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/registerUserActions'

const mapStateToProps = ({auth}) => {
  return {
    errors: auth.error
  }
}

const mapDsipatchToProps = {
  onSubmit: registerUser
}

export default connect(mapStateToProps, mapDsipatchToProps)(RegisterForm)
