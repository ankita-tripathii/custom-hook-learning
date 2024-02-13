import { useState, useEffect } from 'react';

function useColorChange() {
  const [colorIndex, setColorIndex] = useState(0); // Initialize color index

  const colors = ['#FF5733', '#33FF57', '#5733FF', '#33BFFF', '#FF33E6']; // Define an array of five colors


  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment color index and reset to 0 if it exceeds array length
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return colors[colorIndex];
}

export default useColorChange;
