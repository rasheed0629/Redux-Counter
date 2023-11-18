
export const increment = (amount) => ({
    type: 'INCREMENT',
    payload: amount,
  });
  
  export const decrement = (amount) => ({
    type: 'DECREMENT',
    payload: amount,
  });
  
  export const asyncIncrement = () => {
    return (dispatch) => {
      
      setTimeout(() => {
        dispatch(increment(1));
      }, 5000);
    };
  };
  