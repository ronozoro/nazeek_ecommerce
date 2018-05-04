import * as actions from '../actions/filterMenue'
//import * as conActions from '../actions/connection-monitor'

export default function(state = {products:[]}, action) {
    switch (action.type) {
      case actions.GETDATA:
      return {
        ...state,
        products:action.data
      };
    default:
      return state?state:null
  }
}



//87193111d038e814c2fcff1fef98f2e7