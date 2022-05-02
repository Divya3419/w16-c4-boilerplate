import React, { useEffect } from "react";
import { Select,Grid } from "./Styled";
import {useDispatch,useSelector} from "react-redux";
import {getProductsData,sortProducts} from "../Redux/actions"
import ProductCard from "./ProductCard"
export const Products = () => {

  const {isLoading,isError,data}=useSelector((state)=>state);
const dispatch = useDispatch()

  useEffect(() => {
   getProductsData(dispatch)
  }, [dispatch]);
  const handleSort = (e) => {
    // dispatch sort products on change
    dispatch(sortProducts(e.target.value))
  };
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      {isLoading ?(
        <h1>Loading...</h1>
      ) :isError ?(
        <h1>cheak data</h1>
      ):(
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
        {data.map((ele)=>(
          <ProductCard key={ele.id} {...ele}/>
        ))}
      </Grid>
      )}
    </>
  );
};
