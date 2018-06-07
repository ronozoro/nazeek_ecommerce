import Footer from '../common/footer'
import { connect } from 'react-redux'
import { getDummyPages } from '../../actions/getDummyPages'

const mapStateToProps = ({ dummyPages }) => {
  return {
    pages: dummyPages.pages,
    isFetching: dummyPages.isFetching,
    error: dummyPages.error
  }
}

const mapDispatchToProps = {
  getDummyPages
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
