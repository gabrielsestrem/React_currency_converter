import React from 'react';
import Converter from "./components/Converter"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="row">
        <Converter currencyA="USD" currencyB="BRL"></Converter>
        <Converter currencyA="BRL" currencyB="USD"></Converter>
      </div>
      <div className="row">
        <Converter currencyA="NZD" currencyB="BRL"></Converter>
        <Converter currencyA="BRL" currencyB="NZD"></Converter>
      </div>
      <div className="row">
        <Converter currencyA="AUD" currencyB="BRL"></Converter>
        <Converter currencyA="BRL" currencyB="AUD"></Converter>
      </div>
      
    </div>
  );
}

export default App;
