import * as actions from '../actions/ReviewListActions'
//import * as conActions from '../actions/connection-monitor'

export default function(state = {reviewsList:[]}, action) {
    switch (action.type) {
      case actions.REVIEWSLIST:
      return {
        ...state,
        reviewsList:action.reviewsList
      };
    default:
      return state?state:null
  }
}



//87193111d038e814c2fcff1fef98f2e7