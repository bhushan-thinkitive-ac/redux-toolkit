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
      <h1 style={{ color: '#a3d9ea' }}>Counter App (Redux Toolkit)</h1>

      <button style={{ color: 'teal', font: 'message-box' }} onClick={handleIncrementClick}>Increment</button>
      <h1 style={{ color: 'red' }}>Count: {count}</h1>
      <button style={{ color: 'teal', font: 'message-box' }} onClick={handleDecrementClick}>Decrement</button>
      <p></p>
      <button style={{ color: 'green' }} onClick={handleResetClick}>|Reset|</button>
    </div >
  );
}

export default App;
