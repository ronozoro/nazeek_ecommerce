import DummyPages from '../dummyPages'
import { connect } from 'react-redux'

const mapStateToProps = ({dummyPages}) => {
  return {
    pages: dummyPages.pages
  }
}

export default connect(mapStateToProps)(DummyPages)
