import RecentProducts from '../home/recentProducts'
import { connect } from 'react-redux'

const mapStateToProps = ({filterdProducts}) => {
  const {filterdProducts: FilterdProducts, isFetching, error} = filterdProducts

  return {
    products: FilterdProducts,
    isFetching: isFetching,
    error: error
  }
}

export default connect(mapStateToProps)(RecentProducts)
