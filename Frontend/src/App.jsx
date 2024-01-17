import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {  
  const [jokes,setJokes]=useState([])

  useEffect(() => {   
    // axios.get('http://localhost:3000/api/jokes')
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)  // update the state with the fetched data
    })
    .catch((error) => {
      console.log(error)  // log any error that occurred during the fetch
    })
},[])  // dependency array is empty, so this effect runs once after the initial render


  return (
    <>
      <h1>Pragun Full Stack</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke,index)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App