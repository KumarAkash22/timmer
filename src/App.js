import './App.css';
import { useState } from 'react'; 
import { Timer } from './components/Timmer';
function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      {show ? <Timer/>: null}
      <button onClick={()=>setShow(!show)}>{show ? "Hide": "show"}</button>
    </div>
  );
}

export default App;
