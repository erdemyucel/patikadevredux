import "./ButtonGroup.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buy, sell } from "../../redux/product/ProductsSlice";

function ButtonGroup({id}) {
  
  const [amount, setAmount] = useState(0);
  const balance = useSelector((state) => state.products.balance);
  const products = useSelector((state) => state.products.items);
  const product = products.find((product) => product.id === id);
  const dispatch = useDispatch();

  const inputBuy = (e) => {
    setAmount(Number(e.target.value));

    dispatch(buy({ id, amount: Number(e.target.value) }));
  };

  const buttonBuy = () => {
    setAmount(amount + 1);

    dispatch(buy({ id, amount: amount + 1 }));
  };

  const buttonSell = () => {
    setAmount(amount - 1);

    dispatch(sell({ id }));
  };

  return (
    <div className="toogle-box">
      <button
        className="cell"
        onClick={buttonSell}
        {...(amount < 1 && { disabled: true })}
        {...(amount > 0 && {
          style: { backgroundColor: "red", color: "#fff" },
        })}
      >
        Cell
      </button>
      <input
        type="number"
        value={amount}
        onChange={inputBuy}
        {...(balance - product.price < 0 && { disabled: true })}
      />
      <button
        className="buy"
        onClick={buttonBuy}
        {...(balance - product.price < 0 && {
          disabled: true,
          style: {
            backgroundColor: "#f1f2f6",
            color: "gray",
          },
        })}
      >
        Buy
      </button>
    </div>
  );
}

export default ButtonGroup;
