import { useState } from 'react'
import './App.css'

function App() {
  const [animals, setAnimals] = useState([
    {
      id: 99,
      name: 'Scooby',
      type: 'Dog',
      age: 12
    },
    {
      id: 89,
      name: 'Woody',
      type: 'Bird',
      age: '9'
    }
  ]);

  const search = async (q) => {
    const response = await fetch('http://localhost:8080?' + new URLSearchParams(q));

  }

  return (
    <main>
      <h1>Zoo Animal Database</h1>

      <input 
        type = "text" 
        placeholder = "Search"
        onChange = {e => console.log(e.target.value)}
      />

      <ul>
        {animals.map( animal => (
          <Animal key={animal.id} {...animal} />
        ))}

          {animals.length===0 && 'No animals found'}
      </ul>
    </main>
  )
}

function Animal({id, type, name, age}){
  return (
    <li key={id}>
      <strong>{type}</strong>: {name}, {age} years old.
    </li>
  );
}

export default App
