import BottomHeader from '../common/header/bottomHeader'
import { connect } from 'react-redux'
import { fetchCategoties } from '../../actions/fetchCatigoriseActions'
import { fetchCategotie } from '../../actions/fetchCatigorieActions'

const mapStateToProps = ({categories}) => {
  const { isFetching, error, categories: Categories } = categories

  return {
    categories: Categories,
    isFetching,
    error
  }
}

const mapDispatchToProps = {
  fetchCategoties,
  fetchCategotie
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomHeader)
