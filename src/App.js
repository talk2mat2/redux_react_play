import React from 'react';
import Navbar from './components/navbar/navbar.component'


import './App.css';
import Home from './components/home/home'

function App(props) {

 
  return (
    <div className="App">
      <header className="App-header">
<Navbar />
       <Home />
      </header>
    </div>
  );
}

export default App;
