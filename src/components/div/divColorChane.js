import React, {useState, useEffect} from 'react';

export default function DivColorChange() {

	const [colorIndex, setColorIndex] = useState('0');
	const color = ['red', 'green', 'pink', 'orange', 'blue', 'skyblue', 'yellow', 'purple'];

	useEffect(()=>{
		const Intervalid = setTimeout(()=>{
        setColorIndex((prevIndex)=> (prevIndex+1)% color.length);

		}, 1000);

		return ()=> clearTimeout(Intervalid);

	},[colorIndex, color.length]);

	return(
      <div style={{width:'200px', height:'200px', backgroundColor:color[colorIndex]}}>
      <h4>hello i am a color changing div</h4>
      </div>

		);
}