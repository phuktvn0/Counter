import React, { useState } from 'react'
import './App.css'


 function App() {
    let [count, setCount] = useState(0);
    let color = count > 0 ? "green" : count < 0 ? "red" : "black";
  
    return (
      <div className="container">
        <h1>COUNTER</h1>
        <div style={{ color }} id="value">
          {count}
        </div>
        <div className="btn-group">
          <button onClick={() => setCount(count - 1)} className="btn btn-decrease">
            DECREASE
          </button>
          <button onClick={() => setCount(0)} className="btn btn-reset">
            RESET
          </button>
          <button onClick={() => setCount(count + 1)} className="btn btn-increase">
            INCREASE
          </button>
        </div>
      </div>
    );
  }
export default App