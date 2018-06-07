import AddressForm from '../profile/address/addressForm'
import { connect } from 'react-redux'
import { createAddress } from '../../actions/addressActions'

const mapDipatchToProps = {
  onSubmit: createAddress
}

export default connect(null, mapDipatchToProps)(AddressForm)
