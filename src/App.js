import './App.css';

function App() {
  const title = "Adedeji"
  const likes = 50
  const website = "www.google.com"
  return (
    <div className="App">
     <h1>{title} component</h1>
     <p>{likes}</p>
     <a href={website}>Google site</a>
    </div>
  );
}

export default App;
