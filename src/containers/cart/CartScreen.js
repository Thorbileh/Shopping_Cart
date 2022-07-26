import React from 'react'
import CartItem from '../../components/cart/CartItem';
import {useDispatch, useSelector} from 'react-redux';
import {listCartItems} from '../../actions/CartActions'


function CartScreen() {

    const dispatch = useDispatch();
    const cartItemsList = useSelector((state)=>state.cartItemsList);
    const  {loading,error, cartItems} = cartItemsList;

    React.useEffect(()=>{
        dispatch(listCartItems())
    },[dispatch])

  return (
    <div>

        {loading?(
            <div>Loading...</div>
        ):
        error?(
            <div> {error} </div>
          ):
          (
            <>
            
            <h1>Cart</h1> 


<div>
{cartItems.map((item)=>(
<CartItem item={item} key={item.id}/>
))}
</div>
            </>
          )
        }



    </div>
  )
}

export default CartScreen;