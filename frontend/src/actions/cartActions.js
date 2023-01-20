import axios from 'axios';
import {CART_ADD_ITEM, CART_REMOVE_ITEM} from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const {data} = await axios.get(`/api/programs/${id}`);
  console.log('qty in action::' + qty)
  console.log('id in action::' + id)
  dispatch({
    type : CART_ADD_ITEM,
    payload : {
      program: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      seatsAvailable: data.seatsAvailable,
      qty
    }
  })
  localStorage.setItem('cartItelms', JSON.stringify(getState().cart.cartItems));

}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

