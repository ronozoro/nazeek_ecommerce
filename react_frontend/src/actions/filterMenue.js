export const GETDATA="GETDATA";
export const GETCATAGORYS="GETCATAGORYS";
export const SORTBY="SORTBY";
export const GETCATAGORYITMS="GETCATAGORYITMS";
import axios from "axios";
import history from "../utils/historyUtils";
import {filtersUrl} from '../constants/urls'
    export function get() {
        console.log('action')
      return function (dispatch) {
          axios.get(filtersUrl.catagoryitems, {}).then(response => {
              console.log(response)
            
               dispatch(set(response.data))
            console.log(response.data)
          }).catch((error) => {
              console.log(error)
            const data=[{image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
            {image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
            {image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
            {image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"}]
               dispatch(set(data))
          });
      };
  }
  function set(Data) {
    return {
        type: GETDATA,
        data: Data
    };
  }
    export function getsorteditems(filter) {
      let url=filtersUrl.sort+filter
      console.log(url)
      return function (dispatch) {
            console.log(url)
          axios.get(url, {}).then(response => {
              console.log(response)
          dispatch(set(response.data))
            console.log(response.data)
          }).catch((error) => {
              console.log(error)
            const data=[{image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
            {image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
            {image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
            {image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"}]
               dispatch(set(data))
          });
      };
  }
//   function setsorted(Data) {
//     return {
//         type: SORTBY,
//         data: Data
//     }
// }
export function getcatagorys() {

let url=filtersUrl.catagorys+'?format=json'
    console.log('catagory action')
  console.log(url)
  return function (dispatch) {
        console.log(url)
      axios.get(url, {}).then(response => {
          console.log(response)
      
           dispatch(setcatagorys(response.data.results))
        console.log(response.data)
      }).catch((error) => {
          console.log(error)
        const data=[{title:'furniture',id:1},{title:'outdoor',id:2},{title:'sevewhere',id:3},{title:'homedecore',id:4}]
         dispatch(setcatagorys(data))
      });
  };
}
function setcatagorys(Data) {
  console.log(Data)
  return {
      type: GETCATAGORYS,
      data: Data
  }
}

export function getcatagorysitms(id,title) {
    console.log(id)
    let url=filtersUrl.catagoryitems+id+"/?format=json"
    console.log('catagory action')
  console.log(url)
  return function (dispatch){
        console.log(url)
      axios.get(url, {}).then(response => {
          console.log(response)
      
           dispatch(set(response.data))
        console.log(response.data)
      }).catch((error) => {
          console.log(error)
          const data=[{image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
          {image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
          {image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
          {image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"}]
          dispatch(set(data))
      });
      history.push("/"+title)
  };
}
export function aftersearsh(items)
{
  return function (dispatch){
    return {
      type: GETDATA,
      data: items
  }
  history.push("/products")

  }

}
// function setccatagorysitms(Data) {
//   return {
//       type: GETCATAGORYITMS,
//       data: Data
//   }
//}