import * as actions from '../actions/header'
//import * as conActions from '../actions/connection-monitor'

const header = (state={} , action)=> {
  console.log('reducer')
  switch (action.type) {
      case actions.get:
      return {
        ...state,
        error:null,
        data: {},
        loading:true
      };
    default:
      return state?state:null
  }
}

export default header;


//87193111d038e814c2fcff1fef98f2e7