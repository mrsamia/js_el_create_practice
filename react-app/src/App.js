import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName]=useState('Like')
  function handleClick(){
    if(name==='Like'){
      setName('Unlike')
    }else{
      setName('Like')
    }
  }

  return (
    <button onClick={handleClick}>{name}</button>
  );
}

export default App;
