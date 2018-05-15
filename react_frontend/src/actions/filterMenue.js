export const GETDATA="GETDATA";
export const GETCATAGORYS="GETCATAGORYS";
export const SORTBY="SORTBY";
export const GETCATAGORYITMS="GETCATAGORYITMS";
import axios from "axios";
import history from "../utils/historyUtils";
import {filtersUrl} from '../constants/urls'
import {ShopUrls} from '../constants/urls'
import setProducts from './shopActions'
    export function get() {
        console.log('action')
      return function (dispatch) {
          axios.get(ShopUrls.PRODUCTS, {}).then(response => {
              console.log(response)
            
               dispatch(setProducts(response.data))
            console.log(response.data)
          }).catch((error) => {
              console.log(error)
            const data=[{image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
            {image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
            {image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
            {image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"}]
               dispatch(setProducts(data))
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
            {image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
            {image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
            {image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
            {image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"}]
               dispatch(set(data))
          });
          history.push("/products")

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
function setcatagoryItems(Data) {
  console.log(Data)
  return function(dispatch){
  dispatch({
      type:GETCATAGORYITMS ,
      data: Data
  })
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
           dispatch({
            type:GETCATAGORYITMS ,
            data: response.data
        })
          //  history.push("/"+title)

        console.log(response.data)
      }).catch((error) => {
          console.log(error)
          const data=[{image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
          {image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
          {image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
          {image:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',title:"Item Name",Shop_Name:"Shop Name",price:"345 DK"}]
          dispatch(setcatagoryItems(data))
      });
      setTimeout(() => {
        history.push("/"+title)

      }, 1000);
  };
}
export function aftersearsh(items)
{
  console.log({search:items});
  
  return function (dispatch){
    dispatch( {
      type: GETDATA,
      data: items
  })
  history.push("/products")

  }

}
// function setccatagorysitms(Data) {
//   return {
//       type: GETCATAGORYITMS,
//       data: Data
//   }
//}