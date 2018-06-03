import Home from '../home'
import { connect } from 'react-redux'
import { fetchProducts } from '../../actions/fetchProductsActions'
import { filterProducts } from '../../actions/filterProductsSctions'

const mapStateToProps = ({products}) => {
  const { isFetching, error } = products

  return {
    isFetching: isFetching,
    error: error
  }
}

const mapDispatchToProps = {
  fetchProducts,
  filterProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
