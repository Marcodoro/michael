import React, { useState, useEffect, useRef } from 'react';
import './App.css';


export default function App() {
  
  const [userlogin, setlogin] = useState(false);

  return (
    <div className="main">
      {userlogin ? <Login /> : <Chat />}
    </div>
  )
}

function Login() {
  function loginuser() {
  }
  return (
    <div className='login'>
      login to continue
    </div>
  )
}

function Chat() {
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);
  const dummy = document.querySelector('.dummy');

  const handleClick = () => {
    dummy.scrollIntoView({ behavior: 'smooth' });
    console.log(text);
    setResult(text);
  };
  const deletemsg = () => {
    alert('you sure you want to delete');
  };
  const setResult = (text) => {
    const newResult = <h1 className='messages' onClick={deletemsg} key={results.length}>{text}</h1>;
    setResults([results, newResult]);
    setText('');
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) { // 13 is the key code for "Enter" key
      handleClick();
    }
  };
  
  return (
    <div className="App">
      <div className="chat">
         {results}
      </div>
      <div className="write">
      <button onClick={handleClick}>Send</button>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} onKeyDown={handleKeyDown} />
      </div>
      <span className="dummy"></span>
    </div>
  );
}
