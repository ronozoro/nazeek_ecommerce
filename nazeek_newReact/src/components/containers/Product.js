import Product from '../product/index'
import { connect } from 'react-redux'
import { fetchProduct } from '../../actions/fetchProductActions'
import { addItemToCart } from '../../actions/cartAcrions'

const mapStateToProps = ({product}) => {
  const {product: Product, isFetching, error} = product

  return {
    product: Product,
    isFetching: isFetching,
    error: error
  }
}

const mapDsipatchToProps = {
  fetchProduct,
  addItemToCart
}

export default connect(mapStateToProps, mapDsipatchToProps)(Product)
