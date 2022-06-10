import {useState} from 'react'

function Home() {
    

    const [name, setName] = useState("Mario")

    const handleClick = ()=>{
        setName("Luigi")
    }
   
  return (
    <div className="home">
        <h2>HomePage</h2>
        <p>{name}</p>
        <button onClick={handleClick}>Click Me</button>
        
    </div>
  )
}

export default Home