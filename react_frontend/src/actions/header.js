export const GETDATA="GETDATA";
export const GETCATAGORYS="GETCATAGORYS";
export const SORTBY="SORTBY";
export const GETCATAGORYITMS="GETCATAGORYITMS";
import axios from "axios";
import history from "../utils/historyUtils";
import {filtersUrl} from '../constants/urls'
    export function get(url) {
        console.log('action')
      console.log(url)
      return function (dispatch) {
            console.log(url)
          axios.get(url, {}).then(response => {
              console.log(response)
            
               dispatch(set(response.data))
            console.log(response.data)
          }).catch((error) => {
              console.log(error)
            const data=[{img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',Name:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
            {img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',Name:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
            {img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',Name:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
            {img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',Name:"Item Name",Shop_Name:"Shop Name",price:"345 DK"}]
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
       let url ="http://localhost:8000/api/products/?format=json&ordering="+filter
      return function (dispatch) {
            console.log(url)
          axios.get(url, {}).then(response => {
              console.log(response)
          dispatch(set(response.data))
            console.log(response.data)
          }).catch((error) => {
              console.log(error)
            const data=[{img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',Name:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
            {img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',Name:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
            {img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',Name:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
            {img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',Name:"Item Name",Shop_Name:"Shop Name",price:"345 DK"}]
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

let url=filtersUrl.products+'?format=json'
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
        const data=[{name:'furniture',id:1},{name:'outdoor',id:2},{name:'sevewhere',id:3},{name:'homedecore',id:4}]
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

export function getcatagorysitms(id) {
    console.log(id)
    let url="http://localhost:8000/api/products/"+id+"/?format=json"
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
          const data=[{img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',Name:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
          {img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',Name:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
          {img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',Name:"Item Name",Shop_Name:"Shop Name",price:"345 DK"},
          {img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',Name:"Item Name",Shop_Name:"Shop Name",price:"345 DK"}]
          dispatch(set(data))
      });
      history.push("/products")
  };
}
// function setccatagorysitms(Data) {
//   return {
//       type: GETCATAGORYITMS,
//       data: Data
//   }
//}