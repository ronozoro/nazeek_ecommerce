import Address from '../profile/address/addressBook'
import { connect } from 'react-redux'
import { getAdresses } from '../../actions/addressActions'

const mapStateToProps = ({address}) => {
  return {
    address
  }
}

const mapDispatchToProps = {
  getAdresses
}

export default connect(mapStateToProps, mapDispatchToProps)(Address)
