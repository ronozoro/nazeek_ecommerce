import Home from '../home'
import { connect } from 'react-redux'
import { fetchProducts } from '../../actions/fetchProductsActions'
import { filterProducts } from '../../actions/filterProductsSctions'

const mapDispatchToProps = {
  fetchProducts,
  filterProducts
}

export default connect(null, mapDispatchToProps)(Home)
