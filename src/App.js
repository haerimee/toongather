import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import { axiosApi } from "./service/ApiService";

function App() {
  const [hello, setHello] = useState('');

  useEffect(() => {
    axiosApi.get('/hello')
      .then(response => setHello(response.data))
      .catch(error => console.log(error))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          백엔드 데이터 : {hello}
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
