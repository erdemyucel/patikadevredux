import React from 'react';
import Format from 'format-number';
import { useSelector } from 'react-redux';
import './Balance.css';

function Balance() {
  const balance = useSelector((state) => state.products.balance);

  return (
    <div className="balance">
      {Format({ prefix: '$' })(balance)}
    </div>
  );
}

export default Balance;