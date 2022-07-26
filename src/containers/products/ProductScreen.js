import React from 'react';
import ProductItem from '../../components/products/productItem';
// import {products} from '../../constant/products';
import {useDispatch, useSelector} from 'react-redux';
import {listProducts} from '../../actions/ProductActions';

function ProductScreen() {
  const dispatch = useDispatch();

  const productsList = useSelector((state)=> state.productsList);

  const {loading,error,products}= productsList;

  React.useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])

  return (
    <div>
      {loading?(

        <div>Loading...</div>
      ): error?(
        <div> {error} </div>
      ):
      <>
         <h1>Products</h1>
            {products.map((item)=>(
                <ProductItem item={item}/>
            ))}
      </>
      }
     
    </div>
  )
}

export default ProductScreen