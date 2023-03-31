
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { buyCar, saleCar } from './actions';




function App() {

  const myState = useSelector(store => store)
  const dispatch = useDispatch();

  const handleBuyCar = (id) => {
    dispatch(buyCar(id));
  }

  const handleSaleCar = () => {
    dispatch(saleCar());
  }

  return (
      <div className='App'>
          {
            myState.map((car) => {
              return (
                <div key={car.id}>
                  <h5>{car.name}</h5>
                  <button onClick={() => handleBuyCar(car.id)}>Buy Car</button>
                </div>
              )
            })
          }
      </div>
  );
}

export default App;
