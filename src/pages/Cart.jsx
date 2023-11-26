import Product from '../components/Product';

import { useSelector } from 'react-redux';
import { selectCart } from '../features/cart/cartSlice';

const Cart = () => {
  const cart = useSelector(selectCart);

  const calculateTotals = () => {
    let totalSum = 0;
    let totalDiscount = 0;

    cart.items?.forEach((product) => {
      totalSum += product.price * product.quantity;

      if (product.newPrice) {
        const discount = (product.price - product.newPrice) * product.quantity;
        totalDiscount += discount;
      }
    });

    return { totalSum, totalDiscount };
  };


  const { totalSum, totalDiscount } = calculateTotals();
  const totalAfterDiscount = totalSum - totalDiscount;

  return (
    <div className='cart-page'>
      <div className='container'>

        <div className='cart-items'>
          {cart.items?.map((product) => {
            return (
              <div key={product.id} className='cart-item'>
                <Product product={product} inCart={true} />
              </div>
            );
          })}
        </div>

        <div className='totals'>
          <h6>Tvoja narudžbina</h6>
          <div className='totals-row'>
            <p>Ukupno:</p>
            <p>{totalSum} <span className='currency'>rsd</span></p>
          </div>
          <div className='totals-row'>
            <p>Ušteda:</p>
            <p>- {totalDiscount} <span className='currency'>rsd</span></p>
          </div>
          <div className='totals-row'>
            <p>Isporuka Daily Express*</p>
            <p>Besplatna</p>
          </div>
          <div className='totals-row'>
            <p>
              Ukupno za uplatu:
              <span>Cena je sa uključenim PDV-om</span>
            </p>
            <p>{totalAfterDiscount} <span className='currency'>rsd</span></p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart