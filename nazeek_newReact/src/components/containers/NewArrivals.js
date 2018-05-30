import NewArrival from '../home/newArrival'
import { connect } from 'react-redux'

const mapStateToProps = ({products}) => {
  const {products: Products, isFetching, error} = products

  return {
    products: Products,
    isFetching: isFetching,
    error: error
  }
}

export default connect(mapStateToProps)(NewArrival)
