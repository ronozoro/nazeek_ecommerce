import LoginForm from '../login/loginForm'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/loginUserActions'

const mapStateToProps = ({auth}) => {
  return {
    errors: auth.error
  }
}

const mapDsipatchToProps = {
  onSubmit: loginUser
}

export default connect(mapStateToProps, mapDsipatchToProps)(LoginForm)
