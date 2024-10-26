import { useState,useEffect} from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes, setjokes] = useState([])
  useEffect(() => {
    axios.get('/api/jokes')
    .then((res)=>{
      setjokes(res.data)
    })
    .catch((error)=>{
      console.log(`an error accurd data not found`);
    })
  }, [])
  

  return (
    <div>
      <h1>Jokes:{jokes.length}</h1>
      <div>
        {jokes.map((joke)=>(
           <div key={joke.id}>
           <h1>{joke.setup}</h1>
           <h2>{joke.punchline}</h2 >
         </div>
        ))}
      </div>
    </div>
    
  )
}

export default App
