
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, asyncIncrement } from '../redux/actions';

const Counter = ({ count, increment, decrement, asyncIncrement }) => {
  const [amount, setAmount] = useState(1);

  const handleIncrement = () => {
    increment(amount);
  };

  const handleDecrement = () => {
    decrement(amount);
  };

  const handleAsyncIncrement = () => {
    asyncIncrement();
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <div>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value, 10))}
          />
        </label>
      </div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleAsyncIncrement}>Async Increment</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state,
});

const mapDispatchToProps = {
  increment,
  decrement,
  asyncIncrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
