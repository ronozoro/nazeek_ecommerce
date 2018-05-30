import RegisterForm from '../register/registerForm'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/registerUserActions'

const mapDsipatchToProps = {
  onSubmit: registerUser
}

export default connect(null, mapDsipatchToProps)(RegisterForm)
