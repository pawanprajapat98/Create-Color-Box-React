import React, { useState,useRef } from 'react'

function App() {
  const [backgroundColor,setbackgroundColor]=useState(' ')
  const [width,setwidth]=useState(' ')
  const [height,setheight]=useState(' ')
  const [box,setbox]=useState([])
  const widthInputRef = useRef();

 
  function handalClick(){
  
      const newBox = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: backgroundColor,
    }
  setbox(newBox)
  setwidth('');
  setheight('');
  setbackgroundColor('');
  widthInputRef.current.focus();
 
 }

 
return (
    <div>
       <div className='form'>
          
                <label>Enter width :</label>
                <input type="number" name="" ref={widthInputRef} value={width}   onChange={(e) => setwidth(e.target.value)}/>
                <label>Enter hight :</label>
                <input type="number" name=""   value={height} onChange={(e) => setheight(e.target.value)} />
                <label>Enter color :</label>
                <input type="text" name=""  value={backgroundColor} onChange={(e) =>setbackgroundColor(e.target.value)}/>
                <button onClick={handalClick}>Creat Color Box</button>
                {
                      <div  className="box" style={box}></div>
                }
              
       </div>
    </div>
  )
  }

export default App

