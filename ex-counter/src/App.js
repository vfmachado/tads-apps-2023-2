import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';

function App() {

  const [counter, setCounter] = useState(null);

  useEffect(() => {
    console.log('useEffect counter ' + counter);
  }, [counter]);

  useEffect(() => {
    console.log("CARREGANDO A PAGINA");
    setTimeout(() => {
      setCounter(0);
    }
    , 3000);
  }, []); // [] => componentDidMount

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {counter}
        </p>
        <button
          className="App-link"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          AUMENTA
        </button>
      </header>
    </div>
  );
}

export default App;
