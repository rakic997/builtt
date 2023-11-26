import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart
} from '../features/cart/cartSlice';
import { selectCart } from '../features/cart/cartSlice';

const Product = ({ product, inCart }) => {

  const { id, image, title, price, newPrice } = product;
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const [localQuantity, setLocalQuantity] = useState(1);

  useEffect(() => {
    const cartProduct = cart.items.find((item) => item.id === id);
    if (cartProduct) {
      setLocalQuantity(cartProduct.quantity);
    }
  }, [cart.items, id]);


  const handleAddToCart = () => {
    const existingCartItem = cart.items.find((item) => item.id === id);

    if (existingCartItem) {
      dispatch(incrementQuantity({ id }));
    } else {
      dispatch(addToCart({ ...product, quantity: localQuantity }));
    }

    setLocalQuantity(1);
  };

  const handleIncrement = () => {
    setLocalQuantity(localQuantity + 1);
  };

  const handleDecrement = () => {
    if (localQuantity > 1) {
      setLocalQuantity(localQuantity - 1);
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <article className='product'>
      <div className='image'>
        <img src={image} />
        <div className='cart-options'>
          <div className={inCart ? 'quantity disabled' : 'quantity'}>
            <button className='minus-button' onClick={handleDecrement}>-</button>
            <span className='counter'>{localQuantity}</span>
            <button className='plus-button' onClick={handleIncrement}>+</button>
          </div>
          {!inCart && <button className='add-to-cart' onClick={handleAddToCart}>
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="35" height="35" rx="17.5" fill="black" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4697 7.52385L14.4125 9.80956L11.9017 12.5487L11.2286 11.9317L13.7381 9.19413L15.791 6.91306L16.4697 7.52385Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5303 7.52385L20.5874 9.80956L23.0983 12.5487L23.7714 11.9317L21.2619 9.19413L19.2089 6.91306L18.5303 7.52385Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7 11.7837L9.73913 25.4793H25.2609L28 11.7837H7ZM8.11373 12.6967L10.4876 24.5663H24.5124L26.8863 12.6967H8.11373Z" fill="white" />
            </svg>
          </button>}
          {inCart && <button className='remove-from-cart' onClick={handleRemoveFromCart}>
            Ukloni
          </button>}

        </div>
      </div>
      <h6 className='title'>{title}</h6>
      <p className='price'>{price} <span className='currency'>rsd</span></p>
      {inCart && newPrice ? <p className='price new-price'>{newPrice} <span className='currency'>rsd</span></p> : null}
    </article>
  )
}

export default Product