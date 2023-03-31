
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCar, sellCar } from './actions';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



function App() {

  const myState = useSelector(store => store)
  const dispatch = useDispatch();

  const [isAddShow, setIsAddShow] = useState(false);
  const [carName, setCarName] = useState('');

  const handleSellCar = (id) => {
    dispatch(sellCar(id));
  }

  const handleAddCar = () => {
    const idd = uuidv4();
    dispatch(addCar({
      id: idd,
      name: carName
    }));
  }

  return (
      <div className='app'>
          {
            myState.map((car) => {
              return (
                <div key={car.id} className='car-store' >
                  <h5>{car.name}</h5>
                  <button onClick={() => handleSellCar(car.id)}>Sell Car</button>
                </div>
              )
            })
          }
          <button className='add-newcar-btn' onClick={() => setIsAddShow(true)}>Add New Car</button>
          {
            isAddShow && <div>
              <input className='car-input' onChange={(e) => setCarName(e.target.value)} placeholder='Enter Car name' />
              <button className='add-btn' onClick={handleAddCar}>Add</button>
            </div>
          }
      </div>
  );
}

export default App;
