// use axios for api call
import axios from "axios";
import { FILTER_PRODUCTS, GET_PRODUCTS_DATA, SORT_PRODUCTS ,ERROR_DATA,REQ_DATA} from "./actionTypes";

function getProductsData(dispatch) {

    dispatch(reqData())
axios.get(`https://movie-fake-server.herokuapp.com/products`)
.then((res)=>dispatch({
    type: GET_PRODUCTS_DATA,
    payload:res.data,
})
)
.catch((err)=>dispatch(errorData(err.message)));

}
const reqData=()=>({
    type:REQ_DATA
})

const errorData=(err)=>({
    type: ERROR_DATA,
    payload:err
})
const sortProducts = (payload) => ({
    type:SORT_PRODUCTS,
    payload,
});

const filterProducts = (payload) => ({
    type:FILTER_PRODUCTS,
    payload,
});

export { getProductsData, sortProducts, filterProducts};
