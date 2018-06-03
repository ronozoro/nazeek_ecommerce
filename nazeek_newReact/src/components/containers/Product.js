import Producr from '../product/index'
import { connect } from 'react-redux'
import { fetchProduct } from '../../actions/fetchProductActions'

const mapStateToProps = ({product}) => {
  const {product: Product, isFetching, error} = product

  return {
    product: Product,
    isFetching: isFetching,
    error: error
  }
}

const mapDsipatchToProps = {
  fetchProduct
}

export default connect(mapStateToProps, mapDsipatchToProps)(Producr)
