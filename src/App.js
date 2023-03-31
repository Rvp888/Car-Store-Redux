
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { buyCar, saleCar } from './actions';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



function App() {

  const myState = useSelector(store => store)
  const dispatch = useDispatch();

  const [isSaleShow, setIsSaleShow] = useState(false);
  const [carName, setCarName] = useState('');

  const handleBuyCar = (id) => {
    dispatch(buyCar(id));
  }

  const handleSaleCar = () => {
    const idd = uuidv4();
    dispatch(saleCar({
      id: idd,
      name: carName
    }));
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
          <button onClick={() => setIsSaleShow(true)}>Sale Car</button>
          {
            isSaleShow && <div>
              <input onChange={(e) => setCarName(e.target.value)} placeholder='Enter Car name' />
              <button onClick={handleSaleCar}>Sale Car</button>
            </div>
          }
      </div>
  );
}

export default App;
