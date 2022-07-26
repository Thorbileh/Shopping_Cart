import React from 'react'
import { useDispatch } from 'react-redux'
import {updateCartQty, deleteItemFromCart} from '../../actions/CartActions';


function CartItem({item}) {

  const [stateQty, setStateQty] = React.useState(item.qtyInCart)
  const dispatch = useDispatch()

  const handleCartDelete = (cartItemId) => {
    dispatch(deleteItemFromCart(cartItemId))
  }

  const handleCartQty = (itemId, qty) => {
    dispatch(updateCartQty(itemId, qty))
  }
  return (
    <div>
        <img src={item.image} alt={item.name} style={{maxWidth:'150px', maxHeight:'150px'}} />
       
        <div>
            <h3>Title</h3>
            <h4>{item.title}</h4>
        </div>

        <div>
        <h3>Price</h3>
        <h4> <span style={{fontWeight:600, marginRight:'2px' }} >R</span>{item.price}</h4>
        </div>


        <div>
            <h3>Qty in Cart</h3>
            <input
            type="number"
            min="1"
            value={stateQty}
            onChange={(e) => {
              setStateQty((prev) => Number(e.target.value))
              console.log(stateQty)
              handleCartQty(item.id, stateQty)
            }}
          />
        </div>
        <button onClick={() => handleCartDelete(item.id)}>Delete</button>
    </div>
  )
}

export default CartItem