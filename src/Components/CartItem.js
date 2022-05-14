import React, { useState } from 'react';

const CartItem = ({ item, onclickPlus }) => {
  const [cartNumber, setCartNumber] = useState(1);

  return (
    <div className="cartItem">
      <span className="cartCheckBox">
        <input type="checkbox"></input>
      </span>
      <img src={item?.img} alt="" />
      <p style={{ width: '400px' }}>{item?.title}</p>
      <span style={{ width: '240px' }}>
        <button
          onClick={() => {
            setCartNumber(cartNumber - 1);
          }}
        >
          -
        </button>
        &nbsp; {cartNumber} &nbsp;
        <button
          onClick={() => {
            setCartNumber(cartNumber + 1);
          }}
        >
          +
        </button>
      </span>

      <p>{item?.price}</p>

      <span style={{ width: '212px' }}>
        <button>X</button>
      </span>
    </div>
  );
};

export default CartItem;
