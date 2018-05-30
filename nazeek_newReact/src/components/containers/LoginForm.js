import LoginForm from '../login/loginForm'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/loginUserActions'

const mapDsipatchToProps = {
  onSubmit: loginUser
}

export default connect(null, mapDsipatchToProps)(LoginForm)
