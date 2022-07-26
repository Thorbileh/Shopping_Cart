import React from 'react'
import '../../style.css'
import { addProductToCart } from '../../actions/CartActions';
import { useDispatch } from 'react-redux';

function ProductItem({ item }) {

  const dispatch = useDispatch();
  const addCart = () => {

    console.log(item)
    dispatch(addProductToCart(item));
  }

  return (
    <div className='body' /* style={{ marginTop: '50px' }} */>
      <div className='Wall'>

      <div className='container'>
        
        <img style={{ width: '100px' }} src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p style={{ fontSize: '22px' }}>R{item.price}</p>
        <p>{item.quantity}</p>
        <p>{item.description}</p>
        <button onClick={addCart}>Add to cart</button>
      
      </div>
      </div>
 
    </div>
  )
}

export default ProductItem;