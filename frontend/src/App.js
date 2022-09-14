import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

const URL = process.env.REACT_APP_API_URL

function App() {

  const [value, setValue] = useState()

  const getData = () => {
    fetch(URL + "/").then((res) => {
      return res.json()
    }).then((json) => {
      setValue(json) 
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { value && <p>{value.user}</p>}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
