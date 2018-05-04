export const GETDATA="GETDATA";
import axios from "axios";

export function get(url) {
    console.log('action')
  console.log(url)
  return function (dispatch) {
        console.log(url)
      axios.get(url, {}).then(response => {
          console.log(response)
        const data=[{img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',colors:['','',''],h:['fhffkkds','lfgdfdffd','jhgjdgfdj']},
        {img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',colors:['jhf','jhf','gfd'],h:['fhffkkds','lfgdfdffd','jhgjdgfdj']},
        {img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',colors:['','',''],h:['fhffkkds','lfgdfdffd','jhgjdgfdj']},
        {img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',colors:['','',''],h:['fhffkkds','lfgdfdffd','jhgjdgfdj']}]
           dispatch(set(data))
        console.log(response.data)
      }).catch((error) => {
          console.log(error)
        const data=[{img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',colors:['','',''],h:['fhffkkds','lfgdfdffd','jhgjdgfdj']},
        {img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',colors:['jhf','jhf','gfd'],h:['fhffkkds','lfgdfdffd','jhgjdgfdj']},
        {img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',colors:['','',''],h:['fhffkkds','lfgdfdffd','jhgjdgfdj']},
        {img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',colors:['','',''],h:['fhffkkds','lfgdfdffd','jhgjdgfdj']}]
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
export function getsorteditems(url) {
    console.log('sort action')
  console.log(url)
  return function (dispatch) {
        console.log(url)
      axios.get(url, {}).then(response => {
          console.log(response)
        const data=[{img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',colors:['','',''],h:['fhffkkds','lfgdfdffd','jhgjdgfdj']},
        {img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',colors:['jhf','jhf','gfd'],h:['fhffkkds','lfgdfdffd','jhgjdgfdj']},
        {img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',colors:['','',''],h:['fhffkkds','lfgdfdffd','jhgjdgfdj']},
        {img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',colors:['','',''],h:['fhffkkds','lfgdfdffd','jhgjdgfdj']}]
           dispatch(set(data))
        console.log(response.data)
      }).catch((error) => {
          console.log(error)
        const data=[{img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',colors:['','',''],h:['fhffkkds','lfgdfdffd','jhgjdgfdj']},
        {img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',colors:['jhf','jhf','gfd'],h:['fhffkkds','lfgdfdffd','jhgjdgfdj']},
        {img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',colors:['','',''],h:['fhffkkds','lfgdfdffd','jhgjdgfdj']},
        {img1:'https://image.shutterstock.com/image-photo/gray-color-armchair-small-chair-260nw-582285019.jpg',colors:['','',''],h:['fhffkkds','lfgdfdffd','jhgjdgfdj']}]
           dispatch(setsorted(data))
      });
  };
}
function setsorted(Data) {
return {
    type: GETDATA,
    data: Data
}
}
