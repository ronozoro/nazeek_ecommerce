export const GETDATA="GETDATA";
import axios from "axios";

// export const get =(url) => {
//      console.log(url)
     
//             // dispatch({type:GETDATA});
//             fetch(url).then(results =>{
//                   console.log(url)
//                   console.log(results) 

//             }).then(Data =>{
                  
//                   this.setState({data:Data.results})
//                   console.log(this.State.data);
                  
//             })
            
            
        
//     }
    export function get(url) {
      console.log(url)
      return function (dispatch) {
            console.log(url)
          axios.get(url, {}).then(response => {
               dispatch(set(response.data))
            console.log(response.data)
          }).catch((error) => {
          });
      };
  }
  function set(Data) {
    return {
        type: GETDATA,
        data: Data
    };
}