import Counter from './Components/Counter';
import './App.css';
import React, { useContext} from 'react'
import CounterContext from './context/CounterContext';

function App() {
  const value = useContext(CounterContext);
  console.log(value);
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
