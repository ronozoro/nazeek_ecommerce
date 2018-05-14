import axios from "axios";
import {ShopTypes} from "../constants/actionTypes";
import {ShopUrls} from "../constants/urls";
import history from "../utils/historyUtils";

 function setProducts(payload) {
    return {
        type: ShopTypes.PRODUCTS,
        payload: payload
    };
}

export function getProducts() {    
    return function (dispatch) {
        axios.get(ShopUrls.PRODUCTS, { }).then(response => {
            console.log({shop:response.data});
            
            dispatch(setProducts(response.data))
        }).catch((error) => {
            console.log(error);
            
        });
    };
}
function setCategories(payload) {
    return {
        type: ShopTypes.CATEGORIES,
        payload: payload
    };
}
export function getCategories() {
    return function (dispatch) {
        axios.get(ShopUrls.CATEGORIES, {}).then(response => {
            dispatch(setCategories(response.data))
        }).catch((error) => {
        });
    };
}

function setSellers(payload) {
    return {
        type: ShopTypes.SELLERS,
        payload: payload
    };
}
export function getSellers() {
    return function (dispatch) {
        axios.get(ShopUrls.SELLERS, {}).then(response => {
            dispatch(setSellers(response.data))
        }).catch((error) => {
        });
    };
}


function setBrands(payload) {
    return {
        type: ShopTypes.BRANDS,
        payload: payload
    };
}
export function getBrands() {
    return function (dispatch) {
        axios.get(ShopUrls.BRANDS, {}).then(response => {
            dispatch(setBrands(response.data))
        }).catch((error) => {
        });
    };
}
export function getProdDetails(product) {
    return function (dispatch) {
        
    dispatch({type:ShopTypes.GETDETAILS,product})
        
    };
}

export  function categoryItems(id){
    console.log(id);
        return function(dispatch){
        const catItems =  axios.get(ShopUrls.CATEGORIES+'/'+id+"/?format=json")
        catItems.then(items=>{
            console.log(items.data);
             dispatch(setProducts(items.data.product_set))
             history.push('/shop')
        })
    }
}
export function getsorteditems(filter) {
    let url=ShopUrls.ORDER+'?ordering='+filter
    return function (dispatch) {
        axios.get(url, {}).then(response => {
            console.log(response.data)
            dispatch(setProducts(response.data))            
        }).catch((error) => {
           alert(error)
        });
    };

}

export function getitemsbyFilter(filter) {
    return function(dispatch){
        // const filterItems =  axios.get(ShopUrls.CATEGORIES+'/'+filter.id+"/?format=json")
        // filterItems.then(items=>{
        //     console.log(items.data);
        //      //dispatch(setProducts(items.data.product_set))
        //      //history.push('/shop')
        // }).catch(error=>{
        // console.log(error);

        // })
    }

}