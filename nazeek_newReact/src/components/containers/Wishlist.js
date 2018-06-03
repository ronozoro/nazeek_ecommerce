import Wishlist from '../profile/wishlist/index'
import { connect } from 'react-redux'
import { getWishListItems, creatwishList } from '../../actions/wishlistActions'

const mapStateToProps = ({ wishlist }) => {
  console.log('wishlist', wishlist)

  return {
    wishlistItems: wishlist.wishListItem
  }
}

const mapDispatchToProps = {
  getWishListItems,
  creatwishList
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)
