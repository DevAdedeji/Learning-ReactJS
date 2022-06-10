function Home() {
    const handleClick = (e)=>{
        console.log("Hello Ninjas", e);
    }
   
  return (
    <div className="home">
        <h2>HomePage</h2>
        <button onClick={handleClick}>Click Me</button>
        
    </div>
  )
}

export default Home