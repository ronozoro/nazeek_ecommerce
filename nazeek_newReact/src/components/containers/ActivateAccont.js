import ActivateAccount from '../auth/activateAccount'
import { connect } from 'react-redux'
import { activateUserAccount } from '../../actions/loginUserActions'

const mapDispatchToProps = {
  onSubmit: activateUserAccount
}

export default connect(null, mapDispatchToProps)(ActivateAccount)
