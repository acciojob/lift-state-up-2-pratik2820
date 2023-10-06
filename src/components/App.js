
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";


const App = () => {

  const[inputValue,setInputvalue] = useState("")

  function handle(e){
    setInputvalue(e.target.value)
  }
  


  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        {inputValue}
        <Child inputValue={inputValue} handle={handle}/>
        
    </div>
  )
}

export default App
