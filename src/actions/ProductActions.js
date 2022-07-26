import { async } from "@firebase/util";
import { PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL} from "../constant/productConstant";
import { products } from "../constant/products";

export const listProducts = () => async (dispatch)=>{

    const productsData = [];

    try{
        //request for products to be pushed into array product data
        dispatch({
            type: PRODUCT_LIST_REQUEST,
        })
        products.forEach((products)=>{
            productsData.push(products)
        })
//if successful do this
        dispatch({
            type: PRODUCT_LIST_SUCCESS, payload:productsData
        })
    } catch(error){
        dispatch({
            type: PRODUCT_LIST_FAIL, payload:
            error.response && error.response.data.message
            ? error.response.data.message
            :error.message
        })
    }
}