import { useState } from 'react';
import monyet2 from './img/2.jpg';

const FunctionalComponent = ({ nama }) => {
  const [value, setValue] = useState(0);

  const handlePlus = () => {
    setValue(value + 1);
  };

  const handleMinus = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div className="func">
      <img src={monyet2} className="monyet2" alt="eko" />
      <h1>{nama}</h1>
      <h2>Rate tingkat ketampanan monyet 2 ini</h2>
      <button onClick={handleMinus}>-</button>
      <span> {value} </span>
      <button onClick={handlePlus}>+</button>
    </div>
  );
};

FunctionalComponent.defaultProps = {
  nama: 'User',
};
export default FunctionalComponent;
