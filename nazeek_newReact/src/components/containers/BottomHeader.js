import BottomHeader from '../common/header/bottomHeader'
import { connect } from 'react-redux'
import { fetchCategoties } from '../../actions/fetchCatigoriseActions'

const mapStateToProps = ({categories}) => {
  const { isFetching, error, categories: Categories } = categories

  return {
    categories: Categories,
    isFetching,
    error
  }
}

const mapDispatchToProps = {
  fetchCategoties
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomHeader)
