import Cart from '../cart'
import { connect } from 'react-redux'
import { getItemsOfCart } from '../../actions/cartAcrions'

const mapDispatchToProps = {
  getItemsOfCart
}

export default connect(null, mapDispatchToProps)(Cart)
