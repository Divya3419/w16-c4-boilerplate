
import {REQ_DATA,ERROR_DATA,GET_PRODUCTS_DATA} from "./actionTypes"


const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
switch (type){
  case REQ_DATA: 
  return { 
...state,
isLoading:true, 
isError:false, 
filterData:[],
products:[]
  }

  case ERROR_DATA: 
  return{
    ...state,
    isLoading:false, 
    isError:true, 
    filterData:[],
    products:[]
  } 

  case GET_PRODUCTS_DATA: 
  return{
    ...state,
isLoading:false, 
isError:false, 
filterData:[],
products:payload
  }
  default: 
  return state
}

};
export { reducer };
