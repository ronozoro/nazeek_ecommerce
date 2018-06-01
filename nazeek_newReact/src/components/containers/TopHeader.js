import TopHeader from '../common/header/topHeader'
import { connect } from 'react-redux'

const mapStateToProps = ({auth}) => {
  return {
    authenticated: auth.authenticated
  }
}

export default connect(mapStateToProps)(TopHeader)
