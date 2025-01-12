import React from 'react';
import Format from 'format-number';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import './Product.css';

function Product({ data }) {
  return (
      <div className="card-box">
        <img src={data.image} alt={data.name} id='product-img' />
        <div>
        <h1>{data.name}</h1>
        <p id='price'>
          {Format({ prefix: '$' })(data.price)}
        </p>
        <ButtonGroup id={data.id} />
        </div>
      </div>
  );
}

export default Product;