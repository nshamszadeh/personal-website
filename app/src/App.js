import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/navbar';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  const [initialData, setInitialData] = useState([{}])

  useEffect(() => {
    fetch('/api').then(
      response => response.json()
    ).then(data => setInitialData(data))
  }, []);
  return (
    <Router>
    <Navbar />
    <div className="App">
      <h1>{initialData.title}</h1>
    </div>
    </Router>
  );
}

export default App;
