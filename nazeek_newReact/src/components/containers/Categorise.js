import Categorie from '../categorie/categorie'
import { connect } from 'react-redux'
import { fetchCategotie } from '../../actions/fetchCatigorieActions'

const mapStateToProps = ({categorie}) => {
  const {categorie: Categorie, isFetching, error} = categorie

  return {
    categorie: Categorie,
    isFetching,
    error
  }
}

const mapDsipatchToProps = {
  fetchCategotie
}

export default connect(mapStateToProps, mapDsipatchToProps)(Categorie)
