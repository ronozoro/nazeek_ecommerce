import NewArrival from '../home/newArrival'
import { connect } from 'react-redux'
import { addToWishList } from '../../actions/wishlistActions'

const mapStateToProps = ({products}) => {
  const {products: Products, isFetching, error} = products

  return {
    products: Products,
    isFetching: isFetching,
    error: error
  }
}

const mapDispatchToProps = {
  addToWishList
}

export default connect(mapStateToProps, mapDispatchToProps)(NewArrival)
