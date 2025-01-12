import Format from 'format-number';
import { useSelector } from 'react-redux';
import './Receipt.css';

function Receipt() {
  const cart = useSelector((state) => state.products.cart);
  const cartPrice = useSelector((state) => state.products.cartPrice);

  if (cart.length === 0) {
    return null;
  }

  return (
    <div className="receipt-container">
      <div className="receipt-title">Your Receipt</div>
      <div className="receipt-items">
        {cart.map((product, index) => {
          return (
            <div className="receipt-item" key={index}>
              <div className="product-name">{product.name}</div>
              <div className="product-amount">x{product.amount}</div>
              <div className="product-price">
                {Format({ prefix: '$', integerSeparator: ',' })(product.price * product.amount)}
              </div>
            </div>
          );
        })}
      </div>
      <hr className="divider" />
      <div className="total">
        <div className="total-label">TOTAL</div>
        <div className="total-price">
          {Format({ prefix: '$', integerSeparator: ',' })(cartPrice)}
        </div>
      </div>
    </div>
  );
}

export default Receipt;
