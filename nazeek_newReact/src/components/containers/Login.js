import Login from '../login'
import { connect } from 'react-redux'

const mapStateToProps = ({auth}) => {
  return {
    authenticated: auth.authenticated
  }
}

export default connect(mapStateToProps)(Login)
