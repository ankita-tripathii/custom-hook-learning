import React,{useState, useMemo} from 'react';

export default function UseMemo (){

	const [add, setadd] = useState('0');
	const [subtract, setsubtract] = useState('10');

    function addition(){
      setadd (parseInt(add) + 1);
    }


   function subtraction(){
   	if (subtract > 0){
    setsubtract (subtract - 1);
   }}

   const multiply = useMemo(function multiplication(){
    console.log('*************');
   	return add*10;
   },[add])

   

	return(

		<div>
		<button onClick={addition} disabled = {add === 10}>Increasing</button>
		<p>{add}</p>
		<p>{multiply}</p>
		<p>{subtract}</p>
		<button onClick={subtraction} disabled = {subtract === 0}>Decreasing</button>
		</div>

		);
}