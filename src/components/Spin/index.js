import React from 'react';

import spinSVG from '../../assets/spin.svg';
import './spin.scss';

const Spin = () => {
  return (
    <div className="spin">
      <img src={spinSVG} alt="Spinner"/>
    </div>
  );
};

export default Spin;
