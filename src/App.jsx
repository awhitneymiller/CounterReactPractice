import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Heading({title}){
  return <h1>{title}</h1>
}

function Button({label, action,}) {
  return <button onClick={action}>{label}</button>
}

function CounterDisplay({value}){
  return <h2>{value}</h2>
}

function App() {
  const [count, setCounter] = useState(0)

  function increment(){
    setCounter(count + 1);
  }

  function decrement(){
    setCounter(count - 1);
  }

  function reset(){
    setCounter((count) => 0);
  }


  return (
    <>
      <div className="App">
        <Heading title={"Counter"} />
        <CounterDisplay value={count}/>
        <div className = "flex-container">
        <Button action={increment} label="Up"/>
        <Button action={decrement} label="Down"/>
        <Button action={reset} label="Reset"/>
        </div> 
      </div>
    </>
  );
}


export default App
