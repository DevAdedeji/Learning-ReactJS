import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import Blog from './Blog';

function App() {
  
  return (
    <div className="App">
     <Navbar />
     <div className="content">
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/about' element={<Blog/>}></Route>
     </Routes>
     </div>
    </div>
  );
}

export default App;
