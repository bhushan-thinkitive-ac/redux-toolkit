import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment, decrement, reset } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  return (
    <div className="container">
      <button onClick={handleIncrementClick}>Increment</button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementClick}>Decrement</button>
      <p></p>
      <button onClick={handleResetClick}>|Reset|</button>
    </div>
  );
}

export default App;
