import React from 'react';
import useColorChange from './Usecolorchange';

function ColorChangingDiv() {
  const color = useColorChange();

  return (
    <div style={{ backgroundColor: color, width: '400px', height: '200px' }}>
      <h1>Hello, Color Changing Div!</h1>
    </div>
  );
}

export default ColorChangingDiv;
