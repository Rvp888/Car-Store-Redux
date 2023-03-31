
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { buyCar, saleCar } from './actions';




function App() {

  const myState = useSelector(store => store)
  const dispatch = useDispatch();

  const handleBuyCar = () => {
    dispatch(buyCar());
  }

  const handleSaleCar = () => {
    dispatch(saleCar());
  }

  return (
      <div className='App'>
          <button onClick={handleBuyCar}>Buy Car</button>
          {myState.noOfCars}
          <button onClick={handleSaleCar}>Sale Car</button>
      </div>
  );
}

export default App;
