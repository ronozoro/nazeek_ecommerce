import * as actions from '../actions/header'
//import * as conActions from '../actions/connection-monitor'

const header = (state={products:[],sorteditems:[],catagoryitms:[],catagorys:[]} , action)=> {
  console.log('reducer')
  switch (action.type) {
      case actions.GETDATA:
      return {
        ...state,
      
        products: action.data,
        // catagoryitms:[],
        // sorteditems:[],
        // state:{}
       
      };
      case actions.GETCATAGORYITMS:
      return {
        ...state,
      
        catagoryitms: action.data,
        
        state:{}
       
      };
      case actions.GETCATAGORYS:
      return {
        ...state,
      
        catagorys: action.data,

        state:{}
       
      };
      case actions.SORTBY:
      return {
        ...state,
      
        sorteditems: action.data,
        
        
        state:{}
       
      };
    default:
      return state?state:null
  }
}

export default header;


//87193111d038e814c2fcff1fef98f2e7