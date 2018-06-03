/* global alert */

import { wishListUrl } from '../constants/urls'
import history from '../utils/historyUtils'

import axios from 'axios'
export const GETCOUNT = 'GETCOUNT'
export const GETITEMS = 'GETITEMS'
export const GETwISHLISTID = 'GETwISHLISTID'
export const DELETE = 'DELETE'

export function creatwishList () {
  return function (dispatch) {
    if (window.localStoragerage.getItem('token') === null) {
      history.push('/login')
    }
    return axios.get(wishListUrl.createList + '?token=' + window.localStoragerage.getItem('token'))
      .then(response => {
        dispatch({type: GETwISHLISTID, id: response.data.id})
        return response.data
      })
  }
}

export function addToWishList (product) {
  return function (dispatch) {
    if (window.localStoragerage.getItem('token') === null) {
      history.push('/login')
    }
    var wishListId = null
    var isFound = false
    var wishlist = creatwishList()
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
        axios.post(wishListUrl.addtoList + '?token=' + window.localStoragerage.getItem('token'),
          {
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
          dispatch({type: GETCOUNT, count: res.count})
        })
      }, 300)
    }, 2000)
  }
}

export function getWishListItems () {
  return function (dispatch) {
    return axios.get(wishListUrl.getItems + '?token=' + window.localStoragerage.getItem('token')).then(response => {
      dispatch({type: GETITEMS, items: response.data})
      return response.data
    })
  }
}
export function fetchWishlistItemCount () {
  return function (dispatch) {
    return axios.get(wishListUrl.getCount + '?token=' + window.localStoragerage.getItem('token')).then(response => {
      dispatch({type: GETCOUNT, count: response.data.item_count})
      return response.data
    })
  }
}

export function deleteWishlistItem (item) {
  return function (dispatch) {
    axios.delete(wishListUrl.deleteItem + item.wishlist + '/wishlistitems/' + item.id + '/?token=' + window.localStoragerage.getItem('token')).then(response => {
      dispatch({type: DELETE, item: response.data})
    })

    setTimeout(() => {
      var items = getWishListItems()
      items(response => {
        dispatch({type: GETITEMS, items: response.items})
      })
      var count = fetchWishlistItemCount()
      count(res => {
        dispatch({type: GETCOUNT, count: res.count})
      })
    }, 300)
  }
}
