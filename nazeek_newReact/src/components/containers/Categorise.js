import Categorie from '../products/products'
import { connect } from 'react-redux'
import { fetchCategotie } from '../../actions/fetchCatigorieActions'

const mapStateToProps = ({categorie}) => {
  const {categorie: Categorie, isFetching, error} = categorie

  return {
    categorie: Categorie,
    isFetching: isFetching,
    error: error
  }
}

const mapDsipatchToProps = {
  fetchCategotie
}

export default connect(mapStateToProps, mapDsipatchToProps)(Categorie)
