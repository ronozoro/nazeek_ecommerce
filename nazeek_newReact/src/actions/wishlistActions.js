/* global alert, location, localStorage */

import { wishListUrl } from '../constants/urls'

import axios from 'axios'
import {
  GET_WISHLIST_COUNT,
  GET_WISHLIST_ITEMS,
  GET_WISHLIST_ID,
  DELETE_WISHLIST_ITEM
} from '../constant/actionsType'

const creatwishList = () => {
  return (dispatch) => {
    if (localStorage.getItem('token') === null) {
      location.pathname('/login')
    }

    return axios.get(wishListUrl.createList + '?token=' + localStorage.getItem('token'))
      .then(response => {
        dispatch({
          type: GET_WISHLIST_ID,
          id: response.data.id
        })
        return response.data
      })
  }
}

export const addToWishList = (product) => {
  return (dispatch) => {
    if (localStorage.getItem('token') === null) {
      location.pathname('/login')
    }

    let wishListId = null
    let isFound = false
    const wishlist = creatwishList()
    wishlist(response => {
      wishListId = response.id
    })

    var items = getWishListItems()
    items(response => {
      response.items.map(item => {
        if (product.object.id === item.product) {
          isFound = true
        }
      })
    })

    setTimeout(() => {
      if (isFound === false) {
        axios.post(wishListUrl.addtoList + '?token=' + localStorage.getItem('token'), {
          'wishlist': wishListId,
          'product': product.object.id,
          'quantity': 1
        }).then(response => {
        })
      } else {
        alert(' the product in wishList')
      }
      setTimeout(() => {
        var count = fetchWishlistItemCount()
        count(res => {
          dispatch({
            type: GET_WISHLIST_COUNT,
            count: res.count
          })
        })
      }, 300)
    }, 2000)
  }
}

export const getWishListItems = () => {
  return (dispatch) => {
    return axios.get(wishListUrl.getItems + '?token=' + localStorage.getItem('token'))
      .then(response => {
        dispatch({
          type: GET_WISHLIST_ITEMS,
          items: response.data
        })
        return response.data
      })
  }
}

export const fetchWishlistItemCount = () => {
  return (dispatch) => {
    return axios.get(wishListUrl.getCount + '?token=' + localStorage.getItem('token'))
      .then(response => {
        dispatch({
          type: GET_WISHLIST_COUNT,
          count: response.data.item_count
        })
        return response.data
      })
  }
}

export const deleteWishlistItem = (item) => {
  return (dispatch) => {
    axios.delete(wishListUrl.deleteItem + item.wishlist + '/wishlistitems/' + item.id + '/?token=' + localStorage.getItem('token'))
      .then(response => {
        dispatch({
          type: DELETE_WISHLIST_ITEM,
          item: response.data
        })
      })
  }
}
