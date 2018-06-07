import Product from '../porducts'
import { connect } from 'react-redux'
import { fetchProducts } from '../../actions/fetchProductsActions'

const mapStateToProps = ({products}) => {
  const { products: Products, isFetching, error } = products

  return {
    products: Products,
    isFetching,
    error
  }
}

const mapDispatchToProps = {
  fetchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
