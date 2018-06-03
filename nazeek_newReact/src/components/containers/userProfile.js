import UserProfilel from '../profile'
import { connect } from 'react-redux'
import { getUserProfile } from '../../actions/userProfileActions'
import { logoutUser } from '../../actions/loginUserActions'

const mapStateToProps = ({auth}) => {
  return {
    token: auth.userToken,
    user: auth.user
  }
}

const mapDispatchToProps = {
  getUserProfile,
  logout: logoutUser

}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilel)
